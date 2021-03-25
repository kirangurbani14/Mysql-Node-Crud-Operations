const express = require('express');
const mysql = require('mysql');
//const bodyParser = require('body-parser');

var app = express();

app.use(express.json());

var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "",
  database: "test"
});  

con.connect(function(err) {  
    if(!err) 
    console.log("Connected!");
  });

app.post('/users',(req,res)=>{
    con.query('INSERT INTO users(name,favcolor,hobby) VALUES(?,?,?)',[req.body.name,req.body.favcolor,req.body.hobby],(err,response)=>{
        if(!err) 
            res.send('Record Inserted');
        else
            res.send("error")
    });
});

app.get('/users',(req,res)=>{
    con.query(' SELECT * FROM users',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            res.send("error");
        }
    });
});

app.get('/users/:id',(req,res)=>{
    con.query(' SELECT * FROM users WHERE id = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            if(!rows==req.params.id)
            {
                res.send('Please enter correct id');
            }
           res.send(rows) 
        }
        else{
            res.send("error");
        }
    });
});

app.put('/users/:id',(req,res)=>{
    con.query('UPDATE users SET hobby=? WHERE id=?',[req.body.hobby,req.params.id],(err,rows,fields)=>{
        if(!err){
                if(!rows==req.params.id)
                    {
                        res.send('Please enter correct id');
                    }
               res.send("Record updated")

        }
        else{
            res.send("error");
        }
    });
});

app.delete('/users/:id',(req,res)=>{
    con.query('DELETE FROM users WHERE id = ?',[req.params.id],(err,row,fields)=>{
        if(!err){
            if(!row==req.params.id)
            {
                res.send('Please enter correct id');
            }
            res.send("Record deleted");
        }
        else{
            res.send("error");
        }
    });
});

app.listen(3000, ()=>{
    console.log("Port 3000");
});



