//필요한 모듈들 가져오기
const express = require("express");
const bodyParser = require("body-parser");

const db = require('./db');


//Express 서버 생성
const app = express();

//json 형태로 오는 요청의 본문을 해석해줄수 있게 등록
app.use(bodyParser.json());

// db.pool.query(`CREATE TALBE lists ( 
//     id INTEGER AUTO_INCREMENT, 
//     value Text,
//     PRIMARY KEY (id) 
//     )`, (err,results, fileds) =>{
//     console.log('results', results)
// })

//DB lists 테이블에 있는 데이터를 프론트에 보여주기
app.get('/api/values', function(req, res){
    //db에서 모든 정보 가져오기
    db.pool.query('SELECT * FROM lists;',
    (err,results,fileds) =>{
        if(err)
            return res.status(500).send(err)
        else
            return res.json(results)
    })
})

//Client에서 입력한 값을 데이터베이스 lists 테이블에 넣어주기
app.post('/api/value',function (req,res,next) {
    db.pool.query('INSERT INTO lists (value) VALUES("${req.body.value}")',
        (err,results,fileds)=>{
            if(err)
                return res.status(500).send(err)
            else   
                return res.json({success:true, value:req.body.value})
        })
})




app.listen(5000, ()=>{
    console.log('어플리케이션이 5000번 포트에서 시작')
})


