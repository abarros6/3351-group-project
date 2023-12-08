import './NavBar.scss'
import { useState } from 'react'
import ButtonCard from '../ButtonCard/ButtonCard'

const Navbar = () => {

  return (
    <>
        <div className="navbar">
            <ButtonCard
                buttonTitle = {'Home'}
                path = {'/'}
            />
            <ButtonCard
                buttonTitle = {'Survey'}
                path = {'/survey'}
            />
            <ButtonCard
                buttonTitle = {'Results'}
                path = {'/results'}
            />
            {/* <h1>Pet Recomendation Survey</h1> */}
        </div>
    </>
  )
}

export default Navbar;