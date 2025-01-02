const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Application = sequelize.define('Application', {
    application_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.ENUM('Pending', 'Admitted', 'Rejected'),
        defaultValue: 'Pending'
    }
}, {
    tableName: 'applications',
    timestamps: true
});

module.exports = Application;