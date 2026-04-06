import { useForm } from "react-hook-form";
import axios from "axios";

export function DeleteOrder() {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        try {
            const response = await axios.delete(`http://localhost:5000/api/orders/delete/${data.OrderID}`);
            if (response.status === 204) {
                alert("Order deleted successfully");
            } else {
                alert("Error deleting order");
            }
        } catch (error) {
            alert("Error deleting order");
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
                <button type="submit">Delete Order</button>
                {errors.OrderID && <span>Order ID is required</span>}
            </form>

            <div>

            </div>
        </div>
    )
}