const Router = require('express');
const router = Router();

const con = require('../database/database');


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

// router.post('/userRegistration',(req,res)=>
// {
//     const {id, username, name, phonenumber, email, password} = req.body;
//     console.log(req.body);
//     con.query('insert into user(id, username, name, phonenumber, email, password) values(?,?,?,?,?,?);',
//     [id,username,name,phonenumber,email,password], (error,rows,fields)=>{
//         if(!error){
//             res.json({Status: 'success'});
//         }
//         else{
//             console.log(error);
//         }
//     });
// });

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


router.post('/userLogin',(req,res)=>
{
    const {username, password} = req.body;
    console.log(req.body);
    con.query('insert into user(username, password) values(?,?);',
    [username, password], (error,rows,fields)=>{
        if(!error){
            res.json({Status: 'success'});
        }
        else{
            console.log(error);
        }
    });
});


/*app.post('/userRegistration',(req, res) => {
    var POST_QUERY = {
      username: req.body.username,
      name:req.body.name,
      phonenumber: body.phonenumber,
      email: body.email,
      password: req.body.password
    }
    if (!POST_QUERY) {
      return res.status(400).send({ err: true, message: 'Please username' });
    }
  
    let query = `INSERT INTO user (id, username, name, phonenumber, email, password) VALUES (''${POST_QUERY.id}','${POST_QUERY.username}',${POST_QUERY.name}','${POST_QUERY.phonenumber}','${POST_QUERY.email}','${POST_QUERY.password}')`;
  
    con.query(query,function(err,results) {
      if(err){
        console.log(err);
      } else {
        return res.status(200).json({"status": 200,"err": null,"response": results});
      }    
    });
  }); 
*/

/*
router.put('/:users/:id',(req,res)=>{
    const {id, username, name, phonenumber, email, password} = req.body;
    console.log(req.body);
    con.query('update user set username=?, name=?, phonenumber=?, email=?, password=?, where id =? ;',
    [username,name,phonenumber,email,password,id], (error,rows,fields)=>{
        if(!error){
            res.json({Status: 'User updated'});
        }
        else{
            console.log(error);
        }
    });
})
*/

router.delete("/:users/:id", (req,res)=>{
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















