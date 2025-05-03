import { Dispatch } from "react"
const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-15',
        value: .15,
        label: '15%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]
type TipPercentageFormProps = {
    setTip: Dispatch<React.SetStateAction<number>>
}
export default function TipPercentageForm({setTip}: TipPercentageFormProps) {
    return (
        <>
            <div>
                <h2 className="font-black text-center text-2xl">Propina</h2>
                <form>
                    {tipOptions.map((tip) => (
                        <div className="flex items-center gap-2" key={tip.id}>
                            <label htmlFor="{tip.id}">{tip.label}</label>
                            <input 
                            id={tip.id}
                            type="radio"
                            name="tip"
                            value={tip.value}
                            className="cursor-pointer"     
                            onChange={(e) => {
                                setTip((+e.target.value))
                                //we use the + operator to convert the string to a number
                                // setTip(Number(e.target.value))
                                // setTip(parseFloat(e.target.value))
                            }}
                            />
                        </div>
                    ))}
            </form>
            </div>
        </>
    )
}