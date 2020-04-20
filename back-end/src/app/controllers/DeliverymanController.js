import * as Yup from 'yup';
import { Op } from 'sequelize';
import { Deliveryman, File } from '../models';

class DeliverymanController {
  // cria um entregador
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
      });

      const deliveryman = req.body;

      // validação
      const paramEmpty = deliveryman.name && deliveryman.email;
      if (!paramEmpty)
        return res.status(400).json({
          mensage: 'Todos os paramentros devem ser preenchidos',
          deliveryman,
        });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
          mensage: 'Falha na validação',
        });
      }

      const userExist = await Deliveryman.findOne({
        where: { email: deliveryman.email },
      });
      if (userExist) {
        return res.status(400).json({
          mensage: 'Esse entregador ja existe',
          user: {
            email: deliveryman.email,
            name: deliveryman.name,
          },
        });
      }

      // inserir no db
      const newDeliveryman = await Deliveryman.create(deliveryman);

      return res.status(201).json(newDeliveryman);
    } catch (error) {
      return res.status(500).json({
        error,
        mensage: 'DELIVERYMAN STORE',
      });
    }
  }

  async index(req, res) {
    let filter = {};
    if (req.query.deliveryman) {
      filter = {
        name: { [Op.iLike]: `%${req.query.deliveryman}%` },
      };
    }

    const deliverymans = await Deliveryman.findAll({
      where: filter,
      include: [
        { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
      ],
    });
    return res.json(deliverymans);
  }

  async show(req, res) {
    const { id } = req.params;
    const schema = Yup.object().shape({
      id: Yup.number().integer().required(),
    });

    if (!(await schema.isValid({ id }))) {
      return res.status(400).json({
        mensage: 'Falha na validação',
      });
    }

    const deliveryman = await Deliveryman.findByPk(id, {
      include: [
        { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
      ],
    });

    return res.status(200).json(deliveryman);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().integer().required(),
    });
    const { id } = req.params;
    if (!(await schema.isValid({ id }))) {
      return res.status(400).json({
        mensage: 'Falha na validação',
      });
    }
    const deliveryman = await Deliveryman.findByPk(id);
    const deliverymanExist = await Deliveryman.findByPk(id);
    if (!deliverymanExist) {
      return res.status(400).json({
        mensage: 'Esse entregador não existe',
      });
    }

    const { name, email, avatar_id } = await deliveryman.update(req.body);

    return res.status(200).json({ name, email, avatar_id });
  }

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const schema = Yup.object().shape({
        id: Yup.number().integer().required(),
      });
      console.log({ id });

      if (!(await schema.isValid({ id }))) {
        return res.status(400).json({
          mensage: 'Falha na validação',
        });
      }

      const deliverymanExist = await Deliveryman.findByPk(id);
      if (!deliverymanExist) {
        return res.status(400).json({
          mensage: 'Esse entregador não existe',
        });
      }

      console.log({ deliverymanExist });

      await deliverymanExist.destroy();
      console.log('tamo junto');
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ msg: 'DELETE DELIVERYMAN', error });
    }
  }
}

export default new DeliverymanController();
