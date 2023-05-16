const { Model } = require('objection')

class HistoryModel extends Model {
    static get tableName() {
        return 'history'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [],
            properties: {
                id: { type: 'integer' },
                userId: { type: 'integer' },
                date: { type: 'string' },
                time: { type: 'string' },
                description: { type: 'string' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' },
            },
        }
    }

    static get relationMappings() {
        const UsersModel = require('./users')

        return {
            userHistory: {
                relation: Model.BelongsToOneRelation,
                modelClass: UsersModel,
                join: {
                    from: 'history.userId',
                    to: 'users.id',
                },
            },
        }
    }
}

module.exports = HistoryModel
