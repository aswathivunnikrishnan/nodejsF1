const Router = require('express');
const router = Router();

const con = require('../database/database');


router.get('/',(req,res)=>{
    res.status(200).json('Server on port 8888 and db connected');
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

router.post('/:users',(req,res)=>
{
    const {id, username, name, phonenumber, email, password} = req.body;
    console.log(req.body);
    con.query('insert into user(id, username, name, phonenumber, email, password) values(?,?,?,?,?,?);',
    [id,username,name,phonenumber,email,password], (error,rows,fields)=>{
        if(!error){
            res.json({Status: 'success'});
        }
        else{
            console.log(error);
        }
    });
});

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















