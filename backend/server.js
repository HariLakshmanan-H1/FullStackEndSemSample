const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost:27017/Orders")
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log(err));

const orderSchema = new mongoose.Schema({
    OrderID: {type:String,unique:true},
    CustomerName:String,
    Product:String,
    Quantity:Number,
    OrderDate:Date
});

const Order = mongoose.model("Order",orderSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/orders/add",async (req,res) => {
    const orderData = req.body;

    try {
        const order = new Order(orderData);
        await order.save();
        res.status(201).send("Order added successfully");
    } catch (error) {
        res.status(400).send("Error adding order");
    }
})

app.get("/api/orders/:orderId",async (req,res) => {
    try{
        const orders = await Order.findOne({
            OrderID:req.params.orderId
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).send("Error fetching orders");  
    }
})

app.delete("/api/orders/delete/:orderId",async (req,res) => {
    console.log(req.params.orderId);
    try {
        const result = await Order.findOneAndDelete({
            OrderID:req.params.orderId
        })
        if (!result) {
            return res.status(404).send("Order not found");
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).send("Error deleting order");
    }
})

app.put("/api/orders/:orderId",async (req,res) => {
    const {Product,Quantity} = req.body;
    try {
        const order = await Order.findOneAndUpdate(
            {OrderID:req.params.orderId},
            {Product,Quantity},
            {new:true}
        );
        if(order) {
            res.status(200).json(order);
        } else {
            res.status(404).send("Order not found");
        }
    } catch (error) {
        res.status(500).send("Error updating order");
    }
})


const PORT = 5000;
app.listen(PORT,() => {
    console.log("Listening on port 5000")
})