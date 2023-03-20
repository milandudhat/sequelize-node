'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    


    
    static associate(models) {
      // define association here

      // associations with his own model in paraenr_id
      Categories.hasMany(models.Categories, {
        foreignKey : 'parent_id',
        as: 'children'
      });

      // associations with his own model in id
      Categories.belongsTo(models.Categories, {
        foreignKey : 'parent_id',
        as: 'parent'
      });
      
      
     
    }
  }
  Categories.init({
    title: DataTypes.STRING,
    parent_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Categories',
    underscored: true,
    paranoid: true,
  });

  return Categories;
};