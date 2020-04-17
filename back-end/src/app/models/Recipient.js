import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        city: Sequelize.STRING,
        complement: Sequelize.STRING,
        state: Sequelize.STRING,
        cep: Sequelize.INTEGER,
      },
      { sequelize }
    );
    return this;
  }
}

export default Recipient;
