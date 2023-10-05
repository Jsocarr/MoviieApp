import {Route, Routes} from 'react-router-dom'
import { MovieApp } from './pages'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieApp/>}/>
      </Routes>
      
    </>
  )
}

export default App
