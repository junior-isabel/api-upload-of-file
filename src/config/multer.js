const multer = require('multer')
const path = require('path')

const config = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', 'uploads'))
  },
  filename: (req, file, cb) => {
    const basename = path.basename(file.originalname)
    const ext = path.extname(basename)
    cb(null, `${Date.now()}_${file.fieldname}${ext}`)
  }
})


module.exports = multer({ storage: config })