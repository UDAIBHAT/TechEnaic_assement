const AppService = require("../services/app.service");

const AppController = {
  home: (req, res, next) => {
    res.send(AppService.home());
  },

  register: async (req, res, next) => {
    const body = req.body;
    console.log({ body });
    try {
      await AppService.registerUser(body);
      res.send({
        ...body,
        password: null,
      });
    } catch (error) {
      res.status(500).send({
        error,
      });
    }
  },

  login: async(req, res, next) => {
    const body = req.body;
    console.log({ body });

    const user = await AppService.getUser(body);

    console.log('user in cont: ', user)
    if (!user) {
      res.sendStatus(401);
    } else {
      res.send({
        ...user,
        password: null,
      });
    }
  },
};

module.exports = AppController;
