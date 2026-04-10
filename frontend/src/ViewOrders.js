import { useState,useEffect } from 'react';
import axios from 'axios';

export default function ViewOrders() {
    const [orders,setOrders] = useState([]);
    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/orders");
                setOrders(response.data);
            
            } catch (error) {
                alert("Error fetching orders");
            }
        }
        fetchOrders();
    },[])
    return (
        <div>
            <h2>All Orders</h2>
            <ul>
                {orders.map((order) => {
                    return (
                        <li key={order.OrderID}>
                            <div>Order ID: {order.OrderID}</div>
                            <div>Customer: {order.CustomerName}</div>
                            <div>Product: {order.Product}</div>
                            <div>Quantity: {order.Quantity}</div>
                            <div>Date: {order.OrderDate}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}