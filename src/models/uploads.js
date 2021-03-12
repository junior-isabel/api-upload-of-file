'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class uploads extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      uploads.belongsTo(models.User, { foreignKey: 'user_id'})
    }
  };
  uploads.init({
    name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    path_name: {
      type: DataTypes.VIRTUAL,
      get () {
        return `${process.env.HOST}/public/${this.name}`
      }
    }
  }, {
    sequelize,
    modelName: 'Upload',
    tableName: 'uploads'
  });
  return uploads;
};