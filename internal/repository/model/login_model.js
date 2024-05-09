const { DataTypes } = require('sequelize');
const sequelize = require("../../../pkg/database/db")

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nama: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
},{
  sequelize: sequelize,
  timestamps: false
})

module.exports = User

