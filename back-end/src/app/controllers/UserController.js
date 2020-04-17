import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  // criação de usuario
  async store(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required().min(6),
      });
      const user = req.body;

      // validação
      const paramEmpty = user.name && user.email && user.password;
      if (!paramEmpty)
        return res.status(400).json({
          mensage: 'Todos os paramentros devem ser preenchidos',
          user,
        });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
          mensage: 'Falha na validação',
        });
      }

      const userExist = await User.findOne({ where: { email: user.email } });
      if (userExist) {
        return res.status(400).json({
          mensage: 'Esse usuario ja existe',
          user: {
            email: user.email,
            name: user.name,
          },
        });
      }
      // inserir no db
      const newUser = await User.create(user);

      return res.status(200).json(newUser);
    } catch (error) {
      return res.status(500).json({
        error,
        mensage: 'USER-STORE',
      });
    }
  }

  async update(req, res) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string(),
        email: Yup.string(),
        oldPassword: Yup.string().min(6),
        password: Yup.string()
          .min(6)
          .when('oldPassword', (oldPassword, field) =>
            oldPassword ? field.required() : field
          ),
        confirmPassword: Yup.string()
          .min(6)
          .when('password', (password, field) =>
            password ? field.oneOf([Yup.ref('password')]) : field
          ),
      });
      const { email, oldPassword } = req.body;

      // validação
      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({
          mensage: 'Falha na validação',
        });
      }

      const user = await User.findByPk(req.userId);

      const userExist = await User.findOne({ where: { email } });
      if (!userExist) {
        return res.status(400).json({
          mensage: 'Esse usuario não existe',
          email,
        });
      }

      if (oldPassword && !(await user.checkPassword(oldPassword))) {
        return res.status(401).json({ mensage: 'Senha não coincide' });
      }

      // update de usuario
      const { id, name } = await user.update(req.body);

      return res.status(200).json({
        id,
        email,
        name,
      });
    } catch (error) {
      return res.status(500).json({ mensage: 'UPDATE-USER', error });
    }
  }
}

export default new UserController();
