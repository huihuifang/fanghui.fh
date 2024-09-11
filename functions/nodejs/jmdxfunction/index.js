// 通过 NPM dependencies 成功安装 NPM 包后此处可引入使用
// 如安装 linq 包后就可以引入并使用这个包
// const linq = require("linq");

/**
 * @param {Params}  params     自定义参数
 * @param {Context} context    上下文参数，可通过此参数下钻获取上下文变量信息等
 * @param {Logger}  logger     日志记录器
 *
 * @return 函数的返回数据
 */
 module.exports = async function (params, context, logger) {
  const records = await application.data.object("object_095a1b41608").limit(4).select("text_2b85bdd9d4f","number_85bdd9d4fd9","phone_b41608d22df","email_1608d22df1b","bigint_08d22df1bb0","option_d22df1bb0f9","decimal_bdd9d4fd9f7","subObject_d32f9d1467e.text_2f9d1467e22","subObject_d32f9d1467e.bigint_d1467e22c90","subObject_d32f9d1467e.number_9d4fd9f77da","subObject_d32f9d1467e.option_4fd9f77da19","subObject_d32f9d1467e.email_7da19d61877","subObject_d32f9d1467e.phone_a19d61877ff","subObject_d32f9d1467e.decimal_9d61877fff6",
"_id").find();
logger.info(`records: ${JSON.stringify(records)}`);
logger.info(`${new Date()} 函数开始执行2`);
logger.info(`records: ${JSON.stringify(records)}`);

  // 在这里补充业务代码
}