import './App.css'
import Header from './components/Header'
import VideoDeatail from './pages/VideoDeatail'
import Feed from './pages/Feed'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SearchResult from './pages/SearchResult'

function App() {
  return (
<div>
<BrowserRouter>
<Header/>
<Routes>
<Route path='/' element={<Feed/>}/>
<Route path='/watch/:videoId' element={<VideoDeatail/>}/>
<Route path='/results' element={<SearchResult/>}/>

</Routes>
</BrowserRouter>

</div>
  )
}

export default App
// <Route path='/' element={<Feed/>}/>
// <Route path='/watch/:videoId' element={<VideoDeatail/>}/>