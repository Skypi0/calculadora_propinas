import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"

function App() {

  return (
    <>
      <header className=" bg-teal-500 py-5">
        <h1 className="text-center text-white text-4xl font-black">Calculadora de propinas y consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2>Menu</h2>
          {
            menuItems.map((item) => (
              <MenuItem 
              key={item.id}
              
              />
            ))
          }
        </div>
        <div>
          <h2>consumo</h2>
        </div>
      </main>
    </>
  )
}

export default App
