import React from "react"
import petQuiz from '../../assets/petQuiz.jpeg'
import './Home.scss'


const Home = (props) => {
    return (
        <div className="">
            <h2>What Pet Should I Get? Take Our Quiz and Find Out!</h2>
            <img src={petQuiz}/>
            <p align = {'left'}>So you’re thinking of adding a pet to your family? Congrats! 
                Animals make our days more fun, our lives more rich and our sofas more snuggly. 
                But it’s important to not bring home the first furry (or feathered or scaly) 
                friend who catches your eye. Different pets require different levels of care and 
                commitment, and not every lifestyle is compatible with every animal. 
                So what’s the best choice for you? Take our What Pet Should I Get quiz to 
                determine your perfect companion.</p>
        </div>
      )
}

export default Home