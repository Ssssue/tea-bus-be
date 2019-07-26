const AccountModel = require("../modules/accounts");

class accountController {
    static async create(ctx) {
        let req = ctx.request.body;
        console.log(req)
        if (req.username && req.password && req.role && req.email) {
            try {
                const ret = await AccountModel.createAccount(req);
                const data = await AccountModel.getAccountDetail(ret.id);

                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    message: "创建用户成功！",
                    data
                };
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    message: "用户创建失败！",
                    data: err
                }
            };
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                message: "参数不全"
            }
        }
    }

    static async detail(ctx) {
        let id = ctx.params.id;
        if (id) {
            try {
                let data = await AccountModel.getAccountDetail(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    message: "查询用户成功！",
                    data
                };
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    message: "用户查询失败！",
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                message: "参数不全"
            }
        }
    }
}

module.exports = accountController;