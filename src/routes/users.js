module.exports = (app) => {
  var users = [
    {name:'John Doe', email: 'email@email.com' }
  ]

  const findAll = (req, res) => {  
    res.status(200).json(users);
  };
  
  const create = (req, res) => {
    users.push(req.body);
    res.status(201).json(req.body);
  };

  return {findAll, create}
}

