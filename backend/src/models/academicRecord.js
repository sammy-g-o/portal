const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AcademicRecord = sequelize.define('AcademicRecord', {
    record_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    institution_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    qualification: {
        type: DataTypes.STRING,
        allowNull: false
    },
    classification: {
        type: DataTypes.ENUM('Distinction', 'Merit', 'Upper Credit', 'Lower Credit', 'Pass'),
        allowNull: false
    },
    graduation_year: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'academic_records',
    timestamps: true
});

module.exports = AcademicRecord;