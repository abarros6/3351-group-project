import './App.scss'
import Structure from './components/Structure/Structure'
import Results from './components/Results/Results'
import Survey from './components/Survey/Survey'
import Home from './components/Home/Home'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Structure/>}>
          <Route path="results" element={<Results/>}/>
          <Route path="survey" element={<Survey/>}/>
          <Route path="results0" element={<Results result = {0}/>}/>
          <Route path="results1" element={<Results result = {1}/>}/>
          <Route path="results2" element={<Results result = {2}/>}/>
          <Route path="results3" element={<Results result = {3}/>}/>
          <Route path="results4" element={<Results result = {4}/>}/>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
