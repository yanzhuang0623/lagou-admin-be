const path = require('path');
const multer  = require('multer');

//  中间件可以改变request&respones对象
// 第一种方式 无法把文件名称传给下一个中间件  
// const uploadFile = () => {
//     const storage = multer.diskStorage({
//         destination: function (req, file, cb) {
//         cb(null, path.resolve(__dirname, '../public/uploads'))  //把文件放在哪个文件夹下
//         },
//         filename: function (req, file, cb) {
//         const fn = file.originalname;
//         const bat = fn.lastIndexOf('.')  //获取文件后缀名
//         cb(null, file.originalname + '-' + Date.now() + fn.substr(bat))    //文件重命名
//         }
//     })
    
//     const upload = multer({ storage: storage });

//     return   upload.single('companyLogo')
// }

const uploadFile = (req, res, next) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../public/uploads'))  //把文件放在哪个文件夹下
        },
        filename: function (req, file, cb) {
        const fn = file.originalname;
        const bat = fn.lastIndexOf('.')  //获取文件后缀名
        const filename = file.originalname + '-' + Date.now() + fn.substr(bat)
        req.filename = filename  //通过中间件改变req对象  把文件名挂在在request对象上 下一个中间件就可以通过request对象拿到文件名
        cb(null, filename)    //文件重命名
        }
    })
    
    const upload = multer({ storage: storage }).single('companyLogo');

    upload(req, res, function (err) {
        if (err) {
          return
        } else {
          next()
        }
        // Everything went fine.
      })
}

module.exports = uploadFile