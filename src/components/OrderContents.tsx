import { MenuItem, OrderItem } from "../types"
import { formatCurrency } from "../helpers"
type OrderContentsProps = {
    // Define the props for the OrderContents component here
    order: OrderItem[]
    removeItem: (id:MenuItem['id']) => void
}
export default function OrderContents({ order, removeItem}: OrderContentsProps) {
    return (
        <div>
            <h2 className="font-black text-center text-5xl">Consumo</h2>
            <div className="space-y-3 mt-5">
                {
                    order.length === 0 ?
                        <p className="text-center text-2xl">No hay productos en el pedido</p> :
                        order.map((item) => (
                            <div key={item.id} className="flex items-center bg-white shadow-md p-5 rounded-lg justify-between">
                                <div>
                                    <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                                    <p className="font-black">Cantidad: {item.quantity}</p>
                                    <p className="font-black">Subtotal: {formatCurrency(item.price * item.quantity)}</p>
                                </div>
                                <div>
                                    <button className="bg-gray-600 h-8 w-8 rounded-full text-white font-black" onClick={() => removeItem(item.id)}>x</button>
                                </div>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}