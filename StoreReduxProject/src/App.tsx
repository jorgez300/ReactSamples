import { Routes, Route } from 'react-router-dom'
import Menu from './Components/Common/Menu'
import CartIndex from './Components/Cart/CartIndex'
import InventoryIndex from './Components/Inventory/InventoryIndex'
import { Provider } from 'react-redux'
import { store } from './Store/Store'

function App() {

  return (
    <>
      <Provider store={store}>
        <Menu />

        <Routes>
          <Route path='/' element={<InventoryIndex />} />
          <Route path='/Cart' element={<CartIndex />} />
          <Route path='/Inventory' element={<InventoryIndex />} />
        </Routes>
      </Provider>

    </>
  )
}

export default App
