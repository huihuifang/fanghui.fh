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
 function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms))
}
module.exports = async function (params, context, logger) {
  // 日志功能

    for (let i = 1; i <= 9999; i++) {
      logger.info(`函数开始执行了 ${i} 猜猜我到几了？9999了吗？hahadgfdhgfdjhgfkjhlkh;lkj';hkgjfhdgsfhjkjlhkljkhjgfdhgfjgfhjfghhkjfghdjfghjfgjhdgjghjdhgjdghjhdjhgjdghjhfgggdgfjfdjfghjdfjfgdjgdfjgdjgd代购代购代购好地方回归佛的施工方活动过后发生的功夫皇帝规范和宋皇贵妃i哦代购地方回归短发还是个恢复单身狗后if的时光的时光和对方回归i发的回归恢复到死的时光iu地方回归i发的函数第更换i都是高富帅的功夫都是个恢复单身狗i饭后水果i放虎归山地方回归后发生的回归`);
      await sleep(10);
    }

    await sleep(10);
  logger.info(`我是第 10000 条日志，函数 要 结束执行了,65476587696879543546576786543456775645345656453456754535675435675467546467687546568754657645543676456765676456745765fghjhgfghgfdfghgrtyutrytfgfdgbdfgfgbgfgbfgchbrfgbfggbrfhbrghbfghbgg,dgfdsgfsgfsd，dgfhdhgf，dsgfhsgh，刮骨，疗伤，青龙偃月刀，LG,Tr<IU`);
  await sleep(10);
  logger.info(`我是第 10001 条日志，函数 真 结束执行了，你看的到我吗？`);
  // 在这里补充业务代码
}