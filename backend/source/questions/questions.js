const Router = require('express');
const con = require('../database/database');
const router = Router(); 


router.get('/:questions',(req,res)=>{
    con.query('select * from questions;',(error,rows,fields) =>
    {
        if(!error){
            res.json(rows);
        }
        else{
            console.log(error);
        }
    })
});

router.get('/:questions/:id',(req,res)=>{
    const {question_id} = req.params;
    con.query('select * from user where question_id = ?;', [question_id], (error,rows,fields) =>{
        if(!error){
            
            res.json(rows);
        }
        else{
            console.log("Cannot find question table.");
            console.log(error);
        }
    } )
});


        
module.exports = router;