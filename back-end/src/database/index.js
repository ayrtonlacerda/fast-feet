import Sequelize from 'sequelize';
import {
  User,
  Recipient,
  Deliveryman,
  Order,
  Problem,
  File,
} from '../app/models';

import databaseConfig from '../config/database';

const models = [User, Recipient, Deliveryman, Order, Problem, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
