import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Books from './Components/Books'
import Add from './Components/Add'
import Update from './Components/Update'

function App() {

  return (

    <BrowserRouter>
      <>
        <div className="main">
        <Routes>
          <Route path='/' element={<Books/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/update/:id' element={<Update/>} />
        </Routes>

        </div>
      </>
    </BrowserRouter>
  )
}

export default App
