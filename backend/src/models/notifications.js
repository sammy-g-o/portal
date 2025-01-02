const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notification = sequelize.define('Notification', {
    notification_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Sent', 'Pending'),
        defaultValue: 'Pending'
    }
}, {
    tableName: 'notifications',
    timestamps: true
});

module.exports = Notification;