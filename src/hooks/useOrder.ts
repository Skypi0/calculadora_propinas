import { useState } from 'react'
import { OrderItem, MenuItem } from '../types'
export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip,setTip] = useState(0)
    
    const addItem = (item : MenuItem) => {
        const itemExists = order.find((orderItem) => orderItem.id === item.id)
        if(itemExists){
            const updatedOrder = order.map((orderItem) => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)
        }else{
            const newItem : OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    // Function to remove an item from the order
    const removeItem = (id: MenuItem['id']) => {
        // Logic to remove an item from the order
        setOrder(order.filter((item) => item.id !== id))
        
    }
    console.log(order)
    return{
        order,
        tip,
        setTip,
        // Functions to add and remove items from the order
        addItem,
        removeItem
    }
}