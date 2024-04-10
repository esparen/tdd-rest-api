module.exports = (app) => {
  const findAll = (filter = {}) => {
    return app.db('users').where(filter).select();
  };

  const save = async (user) => {
    if(!user.name) return { error: 'name is a required attribute'}
    if(!user.mail) return { error: 'mail is a required attribute'}
    if(!user.passwd) return { error: 'passwd is a required attribute'}

    const userDb = await findAll({mail: user.mail});
    if (userDb && userDb.length > 0) {
      return { error : 'An user with that email is already present'}
    }
    return app.db('users').insert(user, '*');
  }

  return {findAll, save}
}