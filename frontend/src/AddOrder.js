import {useForm} from "react-hook-form";
import axios from "axios";

export default function AddOrder() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.post("http://localhost:5000/api/orders/add",data);
            if(response.status === 201) {
                alert("Order added successfully");
            } else {                
                alert("Error adding order");
            }   
        } catch (error) {
            alert("Error adding order");
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input 
                        type="text"
                        {...register("OrderID",{required:true})}
                        placeholder="Order ID"
                    />
                    {errors.OrderID && <span>Order ID is required</span>}

                    <input 
                        type="text" 
                        {...register("CustomerName",{required:true})}
                        placeholder="Customer Name"
                    />
                    {errors.CustomerName && <span>Customer Name is required</span>}

                    <input 
                        type="text" 
                        {...register("Product",{required:true})}
                        placeholder="Product"
                    />
                    {errors.Product && <span>Product is required</span>}

                    <input 
                        type="number" 
                        {...register("Quantity",{required:true,min:1})}
                        placeholder="Quantity"
                    />
                    {errors.Quantity && <span>Quantity is required and must be at least 1</span>}

                    <input 
                        type="date" 
                        {...register("OrderDate",{required:true})}
                        placeholder="Order Date"
                    />
                    {errors.OrderDate && <span>Order Date is required</span>}
                    <button type="submit">Add Order</button>
                </div>
            </form>
        </div>
    )
}