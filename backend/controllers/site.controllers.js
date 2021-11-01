
const mobilephone = require('../models/mobilephone');
const { mutipleMogooseToObject } = require('../util/mongoose');
const { mongoosesToObject } = require('../util/mongoose');
class siteControllers{

    //[get]/
    home(req,res,next){
        mobilephone.find({}, function (err, mobilephone) {
            if(!err){
                // res.render('home',{
                //    //mobilephone:mobilephone 
                //(handlebars có lỗi bảo mật và k cho truy cập) nếu như này thì ra ngoài sẽ k truy cập trưc  tiếp được 
                //    //phải làm theo cách dưới   
                // })
                
                res.render('home',{
                    mobilephone: mutipleMogooseToObject(mobilephone),
                });

            }else {
                res.status(400).json({
                    error: 'loi',
                })
            }
          });
    }

    //[GET]/phone
    phone(req,res){
        //cach 1 dung callback
        mobilephone.find({}, function (err, mobilephone) {
            if(!err){
                // res.render('home',{
                //    //mobilephone:mobilephone 
                //(handlebars có lỗi bảo mật và k cho truy cập) nếu như này thì ra ngoài sẽ k truy cập trưc  tiếp được 
                //    //phải làm theo cách dưới   
                // })
                
                res.render('mobilephone/phone',{
                    mobilephone: mutipleMogooseToObject(mobilephone),
                });

            }else {
                res.status(400).json({
                    error: 'loi',
                })
            }
          });

      
          

    }
    //[GET]/search
    search(req,res,next){
        mobilephone.find({name:req.query.search})
        .then(mobilephone => {
            res.render('mobilephone/search',{
                mobilephone:mutipleMogooseToObject(mobilephone)
            })
        })
        .catch(next)
    }
    // tam(req,res,next){
    //     // mobilephone.find({name:req.query.search})
    //     // .then(mobilephone => {
    //     //     res.render('mobilephone/search',{
    //     //         mobilephone:mutipleMogooseToObject(mobilephone)
    //     //     })
    //     // })
    //     // .catch(next)
    //     res.render('mobilephone/tam')
    // }
    details(req,res,next){
        mobilephone.findOne({slug:req.params.slug})
        .then(mobilephone => {
            // res.json(mobilephone)
            res.render('mobilephone/details',{
                mobilephone:mongoosesToObject(mobilephone)
            })
        })
        .catch(next)
        // res.render('mobilephone/details');
        // //res.send('details')
    }

}

module.exports = new siteControllers;