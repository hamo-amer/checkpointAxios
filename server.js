const express=require('express');
let axios=require('axios');
let app=express();
const port=5000;

const reqTunis=axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tunis&appid=085901bfb99466df8d7898b2dfa9aa24')
const reqRoma=axios.get('https://api.openweathermap.org/data/2.5/weather?q=Roma&appid=085901bfb99466df8d7898b2dfa9aa24')
const reqLondon=axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=085901bfb99466df8d7898b2dfa9aa24')

axios.all([reqTunis,reqRoma,reqLondon])
.then(axios.spread((Tunis,Roma,London)=>{
    console.log(Tunis.data,Roma.data,London.data)
})).catch(err=>console.log(error));

app.get('/Tunis',(req,res)=>{
    reqTunis.then(doc=> {
    res.json(doc.data)
    });
});
app.get('/Roma',(req,res)=>{
    reqRoma.then(doc=> {
    res.json(doc.data)
    });
});
app.get('/London',(req,res)=>{
     reqLondon.then(doc=> {
    res.json(doc.data)
     });
    });

app.listen(port,err=>{
    err ? console.log('server not running'):console.log(`server is running on port ${port}`)
});
