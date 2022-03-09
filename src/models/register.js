const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('register', {
    username: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING 
    }
  },{
    timestamps: false,
    freezeTableName: true,
  });
};