import {useForm} from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function SearchOrder() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const [order,setOrder] = useState(null);

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.get(`http://localhost:5000/api/orders/${data.OrderID}`)
            if(response.status === 200) {
                const order = response.data;
                setOrder(order);

            } else {
                alert("Order not found");
            }
        } catch (error) {
            alert("Error fetching order");
        }
    }
        return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                        type="text"
                        {...register("OrderID",{required:true})}
                        placeholder = "Order ID"
                    />
                    <button type="submit">Search Order</button>
                    {errors.OrderID && <span>Order ID is required</span>}
                </form>
                <div>
                    {order && `${order.OrderID}  ${order.CustomerName} ${order.Product} ${order.Quantity} ${new Date(order.OrderDate).toLocaleDateString()}`}
                </div>
            </div>
        )
}