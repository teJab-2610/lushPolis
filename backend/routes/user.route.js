const loginmiddleware = require ('../middleware/login.middleware');
const controller = require('../controllers/user.controller');
const multer= require("multer");
const cloudinary = require("../config/cloudinary");
const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage });

module.exports = (app) => {
    app.post('/createPost'
    // ,function(req,res,next){
    //     console.log('middlware');
    //     loginmiddleware(req,res,next);
    //     console.log('middlware done');
    // }
    ,function(req, res){
        console.log('createPost');
        controller.createPost(req, res);
        console.log('createPost done');
    });

    app.get('/getFollowingPosts',function(req, res){
        console.log('getFollowingPosts');
        controller.getFollowingPosts(req, res);
        console.log('getFollowingPosts done');
    });

    app.post('/getTagPosts/:tag',function(req, res){
        console.log('getTagPosts');
        controller.getTagPosts(req, res);
        console.log('getTagPosts done');
    });

    app.get('/targetUserPosts/:id',function(req, res){
        console.log('targetUserPosts');
        controller.targetUserPosts(req, res);
        console.log('targetUserPosts done');
    });

    app.get('/getSinglePost/:id',function(req, res){
        console.log('getSinglePost');
        controller.getSinglePost(req, res);
        console.log('getSinglePost done');
    });

    app.get('/getallPosts',function(req, res){
        console.log('getallPosts');
        controller.getallPosts(req, res);
        console.log('getallPosts done');
    });

    app.post('/searchPosts',function(req, res){
        console.log('searchPosts');
        controller.searchPosts(req, res);
        console.log('searchPosts done');
    });


//     app.post('/uploadImage', upload.single('file'), async (req, res) => {
//         try {
//           const file = req.file;
//           if (!file) {
//             return res.status(400).json({ message: 'No file uploaded.' });
//           }
      
//           // Upload the image to Cloudinary
//           const cloudinaryResponse = await cloudinary.uploader.upload_stream({
//             resource_type: 'auto',
//           }, (error, result) => {
//             if (error) {
//               return res.status(500).json({ message: 'Image upload failed.' });
//             }
//             res.status(200).json({ imageUrl: result.secure_url });
//           });
//           req.file.stream.pipe(cloudinaryResponse);
//         } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: 'Internal server error.' });
//         }
//       });
// };
    app.post('/uploadImage', upload.single('file'), async (req, res) => {
        console.log("Inside Image Upload");
        try {
          const file = req.file;
          if (!file) {
            return res.status(400).json({ message: 'No file uploaded.' });
          }
          
          const cloudinaryResponse = await cloudinary.uploader.upload(file.path, {
            resource_type: 'auto',
          });
          console.log(cloudinaryResponse.url);
          res.status(200).json({ imageUrl: cloudinaryResponse.url });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error.' });
        }
      });
    };

/*******11 BACKUP ABOVE THIS  *********/
/*****BELOW IS FROM ACTUAL CODE******/


// const loginmiddleware = require ('../middleware/login.middleware');
// const controller = require('../controllers/user.controller');
// const multer= require("multer");
// const cloudinary = require("../config/cloudinary");
// const storage = multer.memoryStorage(); // Store the file in memory
// const upload = multer({ storage });

// module.exports = (app) => {

//   app.post('/followUser',function(req, res){
//     console.log('followUser');
//     controller.followUser(req, res);
//     console.log('followUser done');
//   });

//   app.post('/unfollowUser',function(req, res){
//       console.log('unfollowUser');
//       controller.unfollowUser(req, res);
//       console.log('unfollowUser done');
//   });

//   app.get('/getFollowingPosts',function(req, res){
//     console.log('getFollowingPosts');
//     controller.getFollowingPosts(req, res);
//     console.log('getFollowingPosts done');
//   });

//   app.post('/getFollowers',function(req, res){
//     console.log('getFollowers');
//     controller.getFollowers(req, res);
//     console.log('getFollowers done');
//   });

//   app.post('/getTagPosts/:tag',function(req, res){
//     console.log('getTagPosts');
//     controller.getTagPosts(req, res);
//     console.log('getTagPosts done');
//   });

  
//   app.get('/targetUserPosts/:id',function(req, res){
//     console.log('targetUserPosts');
//     controller.targetUserPosts(req, res);
//     console.log('targetUserPosts done');
//   });

//   app.get('/getSinglePost/:id',function(req, res){
//     console.log('getSinglePost');
//     controller.getSinglePost(req, res);
//     console.log('getSinglePost done');
//   });

//   app.get('/getallPosts',function(req, res){
//     console.log('getallPosts');
//     controller.getallPosts(req, res);
//     console.log('getallPosts done');
//   });


//     app.post('/searchUsers',function(req, res){
//       console.log('searchUsers');
//       controller.searchusers(req, res);
//       console.log('searchusers done');
//     });

//     app.post('/getUser',function(req, res){
//       console.log('getUser');
//       controller.getUser(req, res);
//       console.log('getUser done');
//     });

    
//     app.post('/createPost'
//     // ,function(req,res,next){
//     //     console.log('middlware');
//     //     loginmiddleware(req,res,next);
//     //     console.log('middlware done');
//     // }
//     ,function(req, res){
//         console.log('createPost');
//         controller.createPost(req, res);
//         console.log('createPost done');
//     });


//     app.post('/searchPosts',function(req, res){
//         console.log('searchPosts');
//         controller.searchPosts(req, res);
//         console.log('searchPosts done');
//     });

//     app.post('/getLikes',function(req, res){
//       console.log('getLikes');
//       controller.getPostLikes(req, res);
//       console.log('getLikes done');
//     });

//     app.post('/likePost',function(req, res){
//         console.log('likePost');
//         controller.likePost(req, res);
//         console.log('likePost done');
//     });

//     app.post('/unlikePost',function(req, res){
//         console.log('unlikePost');
//         controller.unlikePost(req, res);
//         console.log('unlikePost done');
//     });

//     app.post('/getComments',function(req, res){
//       console.log('getComments');
//       controller.getPostComments(req, res);
//       console.log('getComments done');
//     });






// //     app.post('/uploadImage', upload.single('file'), async (req, res) => {
// //         try {
// //           const file = req.file;
// //           if (!file) {
// //             return res.status(400).json({ message: 'No file uploaded.' });
// //           }
      
// //           // Upload the image to Cloudinary
// //           const cloudinaryResponse = await cloudinary.uploader.upload_stream({
// //             resource_type: 'auto',
// //           }, (error, result) => {
// //             if (error) {
// //               return res.status(500).json({ message: 'Image upload failed.' });
// //             }
// //             res.status(200).json({ imageUrl: result.secure_url });
// //           });
// //           req.file.stream.pipe(cloudinaryResponse);
// //         } catch (error) {
// //           console.error(error);
// //           res.status(500).json({ message: 'Internal server error.' });
// //         }
// //       });
// // };
//     app.post('/uploadImage', upload.single('file'), async (req, res) => {
//         console.log("Inside Image Upload");
//         try {
//           const file = req.file;
//           if (!file) {
//             return res.status(400).json({ message: 'No file uploaded.' });
//           }
          
//           const cloudinaryResponse = await cloudinary.uploader.upload(file.path, {
//             resource_type: 'auto',
//           });
//           console.log(cloudinaryResponse.url);
//           res.status(200).json({ imageUrl: cloudinaryResponse.url });
//         } catch (error) {
//           console.error(error);
//           res.status(500).json({ message: 'Internal server error.' });
//         }
//       });
//     };