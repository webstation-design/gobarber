import Sequelize, { Model } from 'sequelize';

class Notification extends Model {

  static init(sequelize) {

    super.init({
      content: Sequelize.STRING,
      user: Sequelize.INTEGER,
      read: Sequelize.BOOLEAN,
    }, {
      sequelize,
    });

    return this;

  }

}

export default Notification;
