'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'notifications',
      'read',
      {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: 0,
      }
    )

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('notifications', 'read');
  }
};
