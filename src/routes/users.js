module.exports = (app) => {
  const findAll = async (req, res) => {  
    const response = await app.services.user.findAll();
    res.status(200).json(response);
  };
  
  const create = async (req, res) => {
    const response = await app.services.user.save(req.body);
    if(response.error) return res.status(400).json(response)
    res.status(201).json(response[0]);
  };

  return {findAll, create}
}