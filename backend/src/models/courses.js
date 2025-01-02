const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Course = sequelize.define('Course', {
    course_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    course_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    college: {
        type: DataTypes.ENUM('Computing', 'Management Sciences'),
        allowNull: false
    },
    level: {
        type: DataTypes.ENUM('PGD', 'M.Sc', 'PhD'),
        allowNull: false
    }
}, {
    tableName: 'courses',
    timestamps: true
});

module.exports = Course;