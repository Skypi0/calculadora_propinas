import type { MenuItem } from "../types"

type MenuItemProps = {
  // Define the props for the MenuItem component here
  item: MenuItem
}
export default function MenuItem({item}: MenuItemProps) {
  // Destructure the item prop to get the properties you need
  return (
    <>
    <button className="flex w-10/12 items-center justify-between bg-gray-100 p-5 rounded-lg shadow-md hover:bg-gray-200 transition duration-300 border-2 border-gray-300">
    <p>{item.name}</p>
    <p className="font-black">{item.price}</p>
    </button>
    </>
  )
}
