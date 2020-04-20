import * as Yup from 'yup';
import { getHours } from 'date-fns';
import { Op } from 'sequelize';
import { Order, Deliveryman, Recipient, File } from '../models';

class OrderController {
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        product: Yup.string().required(),
        recipient_id: Yup.number().integer().required(),
        deliveryman_id: Yup.number().integer().required(),
      });
      const { product, recipient_id, deliveryman_id } = req.body;

      // validações
      const isEmpty = product && recipient_id && deliveryman_id;
      if (!isEmpty) {
        return res.status(400).json({
          mensage: 'Todos os paramentros devem ser preenchidos',
          body: 'product, recipient_id, deliveryman_id',
        });
      }

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
          mensage: 'Falha na validação',
        });
      }

      const deliveryman = await Deliveryman.findByPk(deliveryman_id);
      if (!deliveryman) {
        return res.status(400).json({
          mensage: 'Esse entregador não existe',
        });
      }

      const recipient = await Recipient.findByPk(recipient_id);
      if (!recipient) {
        return res.status(400).json({
          mensage: 'Esse destino não existe',
        });
      }

      // cria o produto
      const newOrder = await Order.create(req.body);

      return res.status(200).json(newOrder);
    } catch (error) {
      return res.status(500).json({ msg: 'ORDER STORE', error });
    }
  }

  async index(req, res) {
    let filter = {};

    if (req.query.order) {
      filter = {
        product: { [Op.iLike]: `%${req.query.order}%` },
      };
    }

    const orders = await Order.findAll({
      where: filter,
      include: [
        {
          model: Recipient,
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'city',
            'complement',
            'state',
            'cep',
          ],
          as: 'recipient',
        },
        {
          model: Deliveryman,
          attributes: ['id', 'name', 'email'],
          include: [
            { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
          ],
          as: 'deliveryman',
        },
        { model: File, as: 'signature', attributes: ['name', 'path', 'url'] },
      ],
    });

    return res.status(200).json(orders);
  }

  async show(req, res) {
    const { id } = req.params;

    const order = await Order.findOne({
      where: { id },
      include: [
        {
          model: Recipient,
          attributes: [
            'name',
            'street',
            'number',
            'city',
            'complement',
            'state',
            'cep',
          ],
          as: 'recipient',
        },
        {
          model: Deliveryman,
          attributes: ['name', 'email'],
          as: 'deliveryman',
        },
      ],
    });

    if (!order) {
      return res.status(400).json({
        mensage: 'Essa orderm de entrega não existe',
      });
    }

    return res.status(200).json({ order });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      product: Yup.string(),
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      canceled_at: Yup.date(),
      start_date: Yup.date(),
      end_date: Yup.date(),
    });
    const { id } = req.params;
    const { recipient_id, deliveryman_id, start_date } = req.body;
    console.log({ body: req.body });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        mensage: 'Falha na validação',
      });
    }

    const order = await Order.findByPk(id);
    if (!order) {
      return res.status(400).json({
        mensage: 'Esse ordem de entrega  não existe',
      });
    }

    if (recipient_id) {
      const recipient = await Recipient.findByPk(recipient_id);
      if (!recipient) {
        return res.status(400).json({
          mensage: 'Esse destino não existe',
        });
      }
    }

    if (deliveryman_id) {
      const deliveryman = await Deliveryman.findByPk(deliveryman_id);
      if (!deliveryman) {
        return res.status(400).json({
          mensage: 'Esse entregador não existe',
        });
      }
    }

    if (start_date) {
      const hour = getHours(start_date);
      if (hour >= 18 || hour <= 8) {
        return res.status(400).json({
          mensage: 'Horario de retirada deve ser entre 8:00 a 18:00',
        });
      }
    }

    const {
      product,
      recipient_id: recipientId,
      deliveryman_id: deliverymanId,
      signature_id,
      canceled_at,
      start_date: startDate,
      end_date,
    } = await order.update(req.body);

    return res.status(200).json({
      product,
      recipientId,
      deliverymanId,
      signature_id,
      canceled_at,
      startDate,
      end_date,
    });
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

      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(400).json({
          mensage: 'Essa ordem de entrega não existe',
        });
      }

      await order.destroy();

      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ msg: 'DELETE ORDER' });
    }
  }
}

export default new OrderController();
