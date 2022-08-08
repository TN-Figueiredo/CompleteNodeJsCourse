const maintenance = (req, res, next) => {
  res.status(503).send("The website is currently in maintenance");
};

module.exports = maintenance;
