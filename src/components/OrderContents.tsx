import { OrderItem } from "../types"

type OrderContentsProps = {
    // Define the props for the OrderContents component here
    order: OrderItem[]
}
export default function OrderContents({ order }: OrderContentsProps) {
    return (
        <div>
            <h2 className="font-black text-center text-5xl">Consumo</h2>
            <div className="space-y-3 mt-5">
                {
                    order.length === 0 ?
                        <p className="text-center text-2xl">No hay productos en el pedido</p> :
                        order.map((item) => (
                            <div key={item.id} className="flex justify-between">
                                <p>{item.name}</p>
                                <p className="font-black">{item.quantity}</p>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}