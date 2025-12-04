const express = require("express")

const app = express();

app.get('/payment',(req,res)=>{
    console.log("data fetch")
})

app.post(
    '/paymentInsert',(req,res)=>{
    console.log("data insert")
}
)


app.put('/paymentedit',(req,res)=>{
    console.log("data edit")
})


app.delete('/paymentdelete',(req,res)=>{
    console.log("data delete")
})