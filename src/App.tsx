import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"

function App() {

  return (
    <>
      <header className=" bg-teal-500 py-5">
        <h1 className="text-center text-white text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>
      <main className="bg-white max-w-7xl mx-auto py-20 grid md:grid-cols-2 md:p-10">
        <div className="p-5">
          <h2 className="text-5xl font-black pb-5">Menu</h2>
          <div className="space-y-5">
          {
            menuItems.map((item) => (
              <MenuItem 
              key={item.id}
              item={item}
              />
            ))
          }
          </div>
        </div>
        <div>
          <h2 className="text-5xl font-black pb-5">Consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
