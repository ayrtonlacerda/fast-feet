import * as Yup from 'yup';
import { Op } from 'sequelize';
import Recipiente from '../models/Recipient';
// import User from '../models/User';

class RecipientController {
  // criação de destinatario
  async store(req, res) {
    try {
      const recipient = req.body;
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        street: Yup.string().required(),
        number: Yup.number().integer().required(),
        city: Yup.string().required(),
        complement: Yup.string().required(),
        state: Yup.string().required(),
        cep: Yup.number().required().integer(),
      });

      const paramEmpty =
        recipient.name &&
        recipient.street &&
        recipient.number &&
        recipient.city &&
        recipient.complement &&
        recipient.state &&
        recipient.cep;
      if (!paramEmpty)
        return res.status(400).json({
          mensage: 'Todos os paramentros devem ser preenchidos',
          recipient,
        });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
          mensage: 'Falha na validação',
        });
      }

      const recipientExist = await Recipiente.findOne({
        where: { cep: recipient.cep },
      });

      if (recipientExist) {
        return res.status(400).json({
          mensage: 'Esse destinatario ja existe',
          recipient: {
            name: recipientExist.name,
            state: recipientExist.state,
            city: recipientExist.city,
            street: recipientExist.street,
            number: recipientExist.number,
          },
        });
      }

      const newRecipiente = await Recipiente.create(recipient);

      return res.status(200).json({ newRecipiente });
    } catch (error) {
      return res.status(500).json({ mensage: 'ERRO STORE RECIPIENTE', error });
    }
  }

  // atualização de dados do destinatario
  async update(req, res) {
    try {
      const { id: idParam } = req.params;
      const schema = Yup.object().shape({
        name: Yup.string(),
        street: Yup.string(),
        number: Yup.number().integer(),
        city: Yup.string(),
        complement: Yup.string(),
        state: Yup.string(),
        cep: Yup.number().integer(),
      });

      if (!(await schema.isValid({ ...req.body }))) {
        return res.status(400).json({
          mensage: 'Falha na validação',
        });
      }

      const recipient = await Recipiente.findByPk(idParam);
      if (!recipient) {
        return res.status(400).json({
          mensage: 'Esse destinatario não existe',
          recipient: idParam,
        });
      }

      const {
        id,
        name,
        street,
        number,
        complement,
        state,
        cep,
      } = await recipient.update(req.body);

      return res.status(200).json({
        msg: 'update',
        recipient: {
          id,
          name,
          street,
          number,
          complement,
          state,
          cep,
        },
      });
    } catch (error) {
      return res.status(500).json({ mensage: 'ERRO UPDATE RECIPIENT', error });
    }
  }

  async index(req, res) {
    let filter = {};
    if (req.query.recipient) {
      filter = {
        name: { [Op.iLike]: `%${req.query.recipient}%` },
      };
    }

    if (req.query.cep) {
      filter = {
        cep: req.query.cep,
      };
    }

    const recipients = await Recipiente.findAll({ where: filter });
    return res.json(recipients);
  }
}

export default new RecipientController();
