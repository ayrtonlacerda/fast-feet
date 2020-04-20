import { getHours, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import { Deliveryman, Order, Recipient } from '../models';

class ProcessController {
  async index(req, res) {
    const { id, deliveres } = req.params;
    let filter = {};
    const deliveryman = await Deliveryman.findByPk(id);
    if (!deliveryman) {
      return res.status(400).json({
        mensage: 'Esse entregador não existe',
      });
    }

    if (!deliveres) {
      filter = {
        deliveryman_id: id,
        canceled_at: null,
      };
    } else if (deliveres === 'deliveres') {
      filter = {
        deliveryman_id: id,
        canceled_at: null,
        end_date: { $ne: null },
      };
    } else {
      return res.status(404).json();
    }

    const orders = await Order.findAll({
      where: filter,
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
      ],
    });

    return res.status(200).json(orders);
  }

  async update(req, res) {
    const {
      start_date,
      end_date,
      deliverymanId,
      orderId,
      signature_id: sid,
    } = req.body;

    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(400).json({
        mensage: 'Esse ordem de entrega  não existe',
      });
    }

    const deliveryman = await Deliveryman.findByPk(deliverymanId);
    if (!deliveryman) {
      return res.status(400).json({
        mensage: 'Esse entregador não existe',
      });
    }

    const orders = await Order.findAll({
      where: {
        deliveryman_id: deliverymanId,
        created_at: {
          [Op.between]: [startOfDay(new Date()), endOfDay(new Date())],
        },
      },
    });

    if (orders.length > 5) {
      return res.status(400).json({
        mensage: 'Excedeu o limit de retiradas do dia. Limite max: 5',
      });
    }

    if (start_date) {
      const hour = getHours(start_date);
      if (hour >= 18 || hour <= 8) {
        return res.status(400).json({
          mensage: 'Horario de retirada deve ser entre 8:00 a 18:00',
        });
      }

      const {
        product,
        recipient_id: recipientId,
        deliveryman_id,
        signature_id,
        canceled_at,
        start_date: startDate,
        end_date: endDate,
      } = await order.update({ start_date });
      return res.status(200).json({
        product,
        recipient_id: recipientId,
        deliveryman_id,
        signature_id,
        canceled_at,
        start_date: startDate,
        endDate,
      });
    }

    if (end_date && sid) {
      const {
        product,
        recipient_id: recipientId,
        deliveryman_id,
        signature_id,
        canceled_at,
        start_date: startDate,
        end_date: endDate,
      } = await order.update({ end_date, signature_id: sid });
      return res.status(200).json({
        product,
        recipient_id: recipientId,
        deliveryman_id,
        signature_id,
        canceled_at,
        start_date: startDate,
        endDate,
      });
    }

    return res
      .status(400)
      .json({ msg: 'Um dos parametros deve ser preenchido' });
  }
}

export default new ProcessController();
