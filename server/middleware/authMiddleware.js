module.exports = {
  usersOnly: (req, res, next) => {
    if(!req.session.user){
      return res.status(401).send('Please log in')
    }
    next()
  },
  adminsOnly: (req, res, next) => {
    const { isAdmin } = req.session.user
    console.log(req.session.user)
    if(!isAdmin){
      res.status(403).send('You are not an admin')
    }
    next()
  }
}