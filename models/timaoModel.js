const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Timao = sequelize.define('Timao', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome: { type: DataTypes.STRING, allowNull: false, defaultValue: 'Sem Nome' },
    fundacao: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: '2000-01-01' },
    jogadores: { type: DataTypes.STRING(500), allowNull: false, defaultValue: 'alisson' },
    cidade: { type: DataTypes.STRING, allowNull: false, defaultValue: 'São Paulo' }
}, {
    tableName: 'timaos',
    timestamps: false
});

module.exports = Timao;