const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles]; //spread operator to copy array
    const result = req.roles
      .map((role) => rolesArray.includes(role))
      .find((el) => el === true);
    if (!result) return res.sendStatus(401);
    next();
  };
};

module.exports = verifyRoles;
