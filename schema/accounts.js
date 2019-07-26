"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "accounts",
        {
            id: {
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                type: DataTypes.INTEGER
            },
            username: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            password: {
                allowNull: false,
                type: DataTypes.STRING(64)
            },
            role: {
                allowNull: false,
                type: DataTypes.STRING(),
                defaultValue: "USER"
            },
            email: {
                allowNull: false,
                type: DataTypes.STRING,
                // defaultValue: null
            },
        },
        {
            timestamps: false
        }
    );

};