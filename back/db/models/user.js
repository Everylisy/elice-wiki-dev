'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    __id: DataTypes.UUID,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    track: DataTypes.INTEGER,
    admin: DataTypes.INTEGER,
    authorized: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};