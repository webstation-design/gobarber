import Sequelize, { Model } from 'sequelize';

class Notification extends Model {

  static init(sequelize) {

    super.init({
      content: Sequelize.STRING,
      user: Sequelize.INTEGER,
    }, {
      sequelize,
    });

    return this;

  }

}

export default Notification;
