// 在路由级别定义中间件，设置共享变量
const prisma = require("../prisma/prisma");
const sharedVariableMiddleware = (req, res, next) => {
  req.sharedVariable = "Shared Value";
  next();
};

// 在路由中使用中间件
/*app.get('/', sharedVariableMiddleware, (req, res) => {
    const sharedValue = req.sharedVariable;
    res.send(`Shared Value: ${sharedValue}`);
});*/

// 定义中间件函数
const checkLogin = (req, res, next) => {
  res.locals.user = req.session.user;
  next();
};

// 在需要验证用户登录状态的路由中使用中间件
/*app.get('/profile', checkLogin, (req, res) => {
  res.render('profile');
});*/

// 设置省市列表全局变量

module.exports = {
  sharedVariableMiddleware,
  checkLogin,
};
