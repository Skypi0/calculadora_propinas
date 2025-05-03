import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import OrderContents from "./components/OrderContents"
function App() {

const { order,addItem,removeItem, tip, setTip} = useOrder()

  return (
    <>
      <header className=" bg-teal-500 py-5">
        <h1 className="text-center text-white text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>
      <main className="bg-white max-w-7xl mx-auto py-20 grid md:grid-cols-2 md:p-10">
        <div>
          <h2 className="text-5xl text-center font-black pb-5">Menu</h2>
          <div className="space-y-5">
          {
            menuItems.map((item) => (
              <MenuItem 
              key={item.id}
              item={item}
              addItem={addItem}
              />
            ))
          }
          </div>
        </div>
        <div className="border border-dashed border-gray-300 p-5 rounded-lg shadow-md space-y-10 bg-gray-100">
          <OrderContents 
          order={order}
          removeItem={removeItem}/>
          <TipPercentageForm 
          setTip={setTip}
          />
          <OrderTotals 
          order={order}
          tip={tip}
          />
        </div>
      </main>
    </>
  )
}

export default App
