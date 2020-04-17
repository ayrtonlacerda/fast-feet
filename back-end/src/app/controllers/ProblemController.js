import * as Yup from 'yup';
import { Op } from 'sequelize';
import { Order, Deliveryman, Problem } from '../models';

class ProblemController {
  async store(req, res) {
    const schema = Yup.object().shape({
      deliverymanId: Yup.number().integer().required(),
      orderId: Yup.number().integer().required(),
      description: Yup.string().required(),
    });
    const { deliverymanId, orderId, description } = req.body;

    const isEmpty = deliverymanId && description;
    if (!isEmpty) {
      return res.status(400).json({
        mensage: 'Todos os paramentros devem ser preenchidos',
        body: 'deliverymanId, description',
      });
    }

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        mensage: 'Falha na validação',
      });
    }

    const deliveryman = await Deliveryman.findByPk(deliverymanId);
    if (!deliveryman) {
      return res.status(400).json({
        mensage: 'Esse entregador não existe',
      });
    }

    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(400).json({
        mensage: 'Essa ordem de entrega  não existe',
      });
    }

    if (order.deliveryman_id !== deliverymanId) {
      return res.status(400).json({
        mensage: `Essa ordem de entrega não pertence a esse entregador: ${deliverymanId}`,
      });
    }

    const newProblem = await Problem.create({
      description,
      delivery_id: orderId,
    });

    return res.status(201).json(newProblem);
  }

  async index(req, res) {
    const { id } = req.params;
    let filter = {};
    const schema = Yup.object().shape({
      id: Yup.number().integer(),
    });

    if (id) {
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
          mensage: 'Falha na validação',
        });
      }

      const order = await Order.findByPk(id);
      if (!order) {
        return res.status(400).json({
          mensage: 'Essa ordem de entrega  não existe',
        });
      }

      filter = {
        delivery_id: id,
      };

      const problems = await Problem.findAll({ where: filter });

      return res.status(200).json(problems);
    }

    const problemsRespose = await Problem.findAll({ where: filter });
    // transforma a resposta em um array manipulavel
    const problems = JSON.parse(JSON.stringify(problemsRespose, null, 2));

    let ids = problems.map((problem) => problem.delivery_id);
    // retira elementos repetidos
    ids = [...new Set(ids)];
    const orders = await Order.findAll({
      where: {
        id: {
          [Op.or]: ids,
        },
      },
    });
    return res.status(200).json({ orders, problemsRespose });
  }

  // mostra todos os problemas de um
  async show() {}
}

export default new ProblemController();
