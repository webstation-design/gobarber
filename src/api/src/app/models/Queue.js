import Sequelize, { Model } from 'sequelize';

class Queue extends Model {

  static init(sequelize) {

    super.init({
      key: Sequelize.STRING,
      error: Sequelize.BOOLEAN,
      message: Sequelize.STRING,
    }, {
      sequelize,
    });

    return this;

  }

  static associate(models) {
    this.belongsTo(models.Appointment, { foreignKey: 'appointment_id', as: 'appointment' });
  }

}

export default Queue;
