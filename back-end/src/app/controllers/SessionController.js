import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import { User, Deliveryman, File } from '../models';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    console.log({ tets: 'SUPER TEST', email, password });
    const schema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required().min(6),
    });

    const isEmpyt = !email && !password;
    if (isEmpyt) {
      return res
        .status(400)
        .json({ mensage: 'Email e senha são obrigatorios' });
    }

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        mensage: 'Falha na validação',
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ mensage: 'Acesso negado' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ mensage: 'Senha incorreta' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }

  async show(req, res) {
    const { email } = req.params;
    let response;
    const deliveryman = await Deliveryman.findAll({
      where: {
        email,
      },
      include: [
        { model: File, as: 'avatar', attributes: ['name', 'path', 'url'] },
      ],
    });

    if (deliveryman.length === 0) {
      response = null;
    } else {
      response = deliveryman[0];
    }

    return res.status(200).json(response);
  }
}

export default new SessionController();
