import multer from " multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./hitlic/temp")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
    
export const upload = multer({ 
    storage,
 })
//There are two options available, destination and filename. They are both functions that determine where the file should be stored.