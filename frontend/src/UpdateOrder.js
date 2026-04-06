import {useForm} from "react-hook-form";
import axios from "axios";

export default function UpdateOrder() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.put(`http://localhost:5000/api/orders/${data.OrderID}`,data);
            if (response.status === 200) {
                alert("Order updated successfully");
            } else {
                alert("Error updating order");
            }
        } catch (error) {
            alert("Error updating order");
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
                {errors.OrderID && <span>Order ID is required</span>}
                <input 
                    type="text"
                    {...register("Product",{required:true})}
                    placeholder = "Product"
                />
                <input 
                    type="text"
                    {...register("Quantity",{required:true})}
                    placeholder = "Quantity"
                />
                <button type="submit">Update Order</button>
            </form>
        </div>
    )
}