import {  useMemo, useCallback} from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
}
export default function OrderTotals({order, tip}: OrderTotalsProps) {

    // Calculate the subtotal
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0) * tip, [order, tip])
    //we can use useCallback to memoize the function that calculates the total amount
    // This is useful if we want to pass this function as a prop to a child component
    // and we want to avoid unnecessary re-renders 
    const totalAmount = useCallback(() => order.reduce((total, item) => total + (item.price * item.quantity), 0) * (1 + tip), [order, tip])
    // Calculate the total amount
    return(
        <>
        <div className="space-y-3">
            <h2 className="font-bold text-2xl">Total:</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-black">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>Propina: {''}
                <span className="font-black">{formatCurrency(tipAmount)}</span>
            </p> 
            <p>Total: {''}
                <span className="font-black">{formatCurrency(totalAmount())}</span>
            </p>
            </div>
        </>    
    )
}