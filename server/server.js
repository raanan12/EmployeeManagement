const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('mongoose');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static('body/build'))


const link = 'mongodb+srv://ranan97531:2524097531R@cluster0.rhkco4m.mongodb.net/empolyTask'
db.connect(link).then(
    console.log('db is on')
    )
    
    
    
    const schmaUser = db.Schema({
        userName:String,
        id:String,
        class:String,
        arrWork:Array,
        activWorks:Array
    })
    
    const schmaTask = db.Schema({
        nameTask:String,
        forClass:String,
        descripton:String,
        id:Number
    })
    
    
    
    const colectionUsers = db.model('users',schmaUser);
    const colectionTask = db.model('task',schmaTask);
    
let id2 = 0

const UidTa = async ()=>{
    let arr = await colectionTask.find()
    let number = arr[arr.length-1].id
    id2 = number
}

UidTa()

app.post('/checkUser', async (req,res)=>{
    const user = await colectionUsers.findOne({userName:req.body.userName,id:req.body.id})
    if (user == null){
        res.json(false)
    }
    else{
        res.json(user)
    }
})

app.post('/addEmpoly',async(req,res)=>{
    let temp = {
        userName:req.body.name,
        id:req.body.id,
        class:req.body.class,
        arrWork:[],
        activWorks:[]
    }
    let user = await colectionUsers.findOne({id:temp.id})
    if(user === null){
        await colectionUsers.insertMany(temp)
        res.json(true)
    }
    else{
        res.json(false)
    }
})

app.get('/allTask',async (req,res)=>{
    let allTask = await colectionTask.find()
    res.json(allTask)
})

app.post('/takingTask',async(req,res)=>{
    let task = await colectionTask.findOne({id:req.body.idTask})
    await colectionTask.deleteOne({id:req.body.idTask})
    let user = await colectionUsers.findOne({id:req.body.id})
    let arr = [...user.activWorks,task]
    await colectionUsers.updateOne({id:req.body.id},{activWorks:arr})
    res.json(true)
})

app.post('/deletTask',async(req,res)=>{
    await colectionTask.deleteOne({id:req.body.id})
    res.json(true)
})

app.post('/takingTaskUsetStop',async(req,res)=>{
    let user = await colectionUsers.findOne({id:req.body.id})
    res.json(user.arrWork)
})


app.post('/stopeTask',async (req,res)=>{
    let user = await colectionUsers.findOne({id:req.body.id})
    let arr = user.activWorks
    let task = arr[req.body.index]
    arr = arr.filter((val,index)=> index != req.body.index)
    await colectionUsers.updateOne({id:req.body.id},{activWorks:arr})
    arr = [...user.arrWork,task]
    await colectionUsers.updateOne({id:req.body.id},{arrWork:arr})
    res.json(true)
})


app.post('/actionTasc',async(req,res)=>{
    let user = await colectionUsers.findOne({id:req.body.id})
    console.log(user)
    res.json(user.activWorks)
})

app.post('/addTaskAdmin',async(req,res)=>{
    temp={
        nameTask:req.body.name,
        forClass:req.body.class,
        descripton:req.body.descripton,
        id:++id2
    }
    await colectionTask.insertMany(temp)
    res.json(true)
})

app.get('/allEmpoly',async(req,res)=>{
    let users = await colectionUsers.find()
    res.json(users)
})

app.listen(3000,()=>{
    console.log('port 3000 is on');
})