// verificação se o usuario esta logado
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

const { promisify } = require('es6-promisify');

export default async (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log({ headers: req.headers });

  if (!authHeader) {
    return res
      .status(401)
      .json({ mensage: 'Acesso negado', error: 'Sem token de autenticacao' });
  }

  const [, token] = authHeader.split(' ');
  if (token === '') {
    return res
      .status(401)
      .json({ mensage: 'Acesso negado', error: 'Token não disponivel' });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res
      .status(401)
      .json({ mensage: 'Acesso negado', error: 'Token invalido' });
  }
};
