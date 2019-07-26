const db = require('../config/db')
const Sequelize = db.sequelize;
const Accounts = Sequelize.import("../schema/accounts");
Accounts.sync({ force: false });    // 自动创建表 (加force:true, 会先删掉表后再建表)

class AccountModel {
    /**
     * 创建用户模型
     */
    static async createAccount(data) {
        return await Accounts.create({
            username: data.username,
            password: data.password,
            email: data.email,
            role: data.role
        });
    }

    /**
     * 查询文章详情数据
     */
    static async getAccountDetail(id) {
        return await Accounts.findOne({
            where: {
                id
            }
        })
    }

}

module.exports = AccountModel;