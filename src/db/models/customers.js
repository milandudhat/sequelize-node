'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Customers.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    primary_mobile_number: DataTypes.STRING,
    primary_email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    date_of_birth: DataTypes.DATEONLY,
    secondry_mobile_number: DataTypes.STRING,
    secondry_email: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Customers',
    underscored: true,
  });
  return Customers;
};