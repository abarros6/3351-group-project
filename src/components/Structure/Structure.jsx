import { Outlet } from 'react-router-dom'
import Navbar from '../NavBar/NavBar'


const Structure = (props) => {
    return (
        <div className="App">
            <Navbar/>
            <div style={{marginTop: 50}}>    
                <Outlet/>
            </div>
        </div>
      )
}

export default Structure