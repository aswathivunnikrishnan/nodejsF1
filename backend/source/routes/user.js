const Router = require('express');
const router = Router(); 
const bodyParser = require('body-parser');
// const session = require('express-session');
// // const path = require('path')

const con = require('../database/database');

// router.get('/', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/login.dart'));
// });


router.get('/',(req,res)=>{
    res.status(200).json('Server on port 8000 and db connected');
});

router.get('/:users',(req,res)=>{
    con.query('select * from user;',(error,rows,fields) =>
    {
        if(!error){
            res.json(rows);
        }
        else{
            console.log(error);
        }
    })
});

router.get('/:users/:id',(req,res)=>{
    const {id} = req.params;
    con.query('select * from user where id = ?;', [id], (error,rows,fields) =>{
        if(!error){
            res.json(rows);
        }
        else{
            console.log(error);
        }
    } )
})

router.post('/userRegistration',(req,res)=>
{
    const {id, username, name, phonenumber, email, password} = req.body;
    console.log(req.body);
    con.query('insert into user(username,email, password) values(?,?,?);',
    [username,email,password], (error,rows,fields)=>{
        if(!error){
            return res.status(200).send({Status:'success'});
        }
        else{
            console.log(error);
        }
    });
});

// router.post('/userLogin',(req,res)=>
// {
//     const {username, password} = req.body;
//     console.log(req.body);
//     con.query('SELECT * FROM user WHERE username = ?, password = ?',
//     [username, password], (error,result)=>{
//     // const login=quiz_project.findOne({
//     //     username:req.body.username

//     // })
//     if(!error){
//         return res.status(200).send({Status:'success'});
//         }
//         else{
//             res.console(error);
//         }
//         // else{
//         //     return res.status(200).send({Status:'success'});

//         // }
//      });
// }
// );


router.post('/userLogin', function(req, res) {
	const username = req.body.username;
	const password = req.body.password;
	if (username && password) {
		con.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				req.username = username;
				
                return res.status(200).send({Status:'success'});

			} else {
				res.send({error:error}) ;
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});







router.delete("/:userDelete/:id", (req,res)=>{
    const {id} = req.params ;
    con.query('delete from user where id = ?;',[id],(error, rows, fields)=>{
        if(!error){
            res.json({Status:'deletion completed'})
        }
        else{
            res.json({Status: error});
        }
    })

});

module.exports = router;











