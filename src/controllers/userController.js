

module.exports = {

  async list(req, res) {
    const { User, Upload } = req.db
    const users = await User.findAll({
      include: Upload
    })

    return res.json(users)
  },
  async create (req, res) {
    const { User } = req.db
    const { name, email } = req.body
    try {
      const user = await User.create({name, email})
      res.json(user)
    } catch (error) {
      return res.status(404).json({
        error: error.message
      })   
    }
  },
  async upload (req, res) {
    const { id } = req.params
    const { User, Upload } = req.db
    const pdf = req.file

    try {
      if (id == null) {
        return res.status(404).json({
          error: 'id is required'
        })
      }

      const user = await User.findByPk(id)
      const upload = await user.createUpload({
        name: pdf.filename
      })
      res.json(upload)
    } catch (error) {
      res.status(404).json({
        error: error.message
      })
    }
  }
}