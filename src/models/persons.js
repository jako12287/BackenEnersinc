const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('persons', {
    names: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    lastnames: {
        type: DataTypes.STRING,
    },
    typedocument: {
        type: DataTypes.STRING //esto debe tener los tipos definidos ver despues
    },
    document: {
        type: DataTypes.STRING,
        unique : true

    },
    Hobbies: {
        type: DataTypes.TEXT
    }
  },{
    timestamps: false,
    freezeTableName: true,
  });
};