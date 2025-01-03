const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Payment = sequelize.define('Payment', {
    payment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    payment_code: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'payments',
    timestamps: true
});

module.exports = Payment;