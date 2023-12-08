import React, {useState, useEffect} from "react";
import "./Survey.scss"
import ButtonCard from "../ButtonCard/ButtonCard";

const Survey = (props) => {
    const [path, setPath] = useState('/results')

    const surveyQuestions = 
    ['1. Why do you want a pet?', '2. How much time are you able to devote to your new friend?',
        '3. What is your home like?', '4. How much training are you willing to do?', 
        '5. What does your pet budget look like?', '6. How much cleaning are you willing to do?',
        '7. What is your favourite animal movie?'
    ]

    const surveyOptions = 
    [
        ['I am searching for the perfect roommate: fun, clean and a good listener.',
        'I am looking for a BFF to share outdoor adventures and movie nights.',
        'I would like to come home to some low-key company after a long day.',
        'Id like a pet just like me: chirpy and quirky.',
        'I am longing to care for a pint-sized companion.',], //done

        ['Not a lot. My calendar is often packed full.',
        'Tons! I have a flexible schedule and plan to hire help as needed.',
        'Plenty. I’m a homebody and I know a great pet sitter to back me up.',
        'Sometimes my life gets busy, but I can find an extra hour our two each day.',
        'I have very little time available for daily care or interaction.'], //done

        ['It is perfect for me, but I’m not so sure I want a pet roaming around…',
        'I have plenty of space in my home, plus a backyard.',
        'Cozy, with an abundance of sunny windowsills.',,
        'Pretty fly, with plenty of perches.',
        'It’s perfect for me, and I’m positive I don’t want a pet roaming around.',], //done

        ['I’d prefer a pet that doesn’t require any training.',
        'As much as it takes. I plan to work with a trainer and am looking forward to learning along with my pet.',
        'A good amount. I’m prepared for the basics, and anything else that might benefit my pet.',
        'A little bit. Tricks sound especially fun!',
        'I’m not against training, but I wasn’t planning on it.',], //done

        ['After the initial costs for a habitat and supplies, I’d like to spend very little.',
        'Generous. In addition to budgeting for the basics, I plan to have an emergency fund set aside.',
        'Healthy. I can afford both routine and unexpected costs, if necessary.',
        'Pretty good, but I’d like to avoid any major expenses.',
        'Basic. I can afford start-up supplies and inexpensive recurring costs.',], //done

        ['I’ve been called a neat freak, and I’m looking for a similar pet.',
        'I’m OK with muddy paws and the occasional chewed up cushion.',
        'The occasional spill or shedding won’t bother me.',
        'Habitat maintenance is fine, but anything beyond that is a deal breaker.',
        'As long as most of the mess remains in a cage, I don’t mind.',],//done

        ['“Finding Nemo” swam its way into my heart.',
        '“Air Bud” for the win!',
        'Thackery Binx put the magic in “Hocus Pocus.”',
        '“Paulie” made my spirits soar.',
        '“Ratatouille,” oui oui!'], //done
    ]

    const radioOnChange = () => {
        let questionOne = document.getElementsByName(surveyQuestions[0])
        let questionTwo = document.getElementsByName(surveyQuestions[1])
        let questionThree = document.getElementsByName(surveyQuestions[2])
        let questionFour = document.getElementsByName(surveyQuestions[3])
        let questionFive = document.getElementsByName(surveyQuestions[4])
        let questionSix = document.getElementsByName(surveyQuestions[5])
        let questionSeven = document.getElementsByName(surveyQuestions[6])

        let questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven]

        let questionWeights = []

        for (let x = 0; x < 7; x++) {
            let weight = []
            for (let i = 0; i < questions[x].length; i++) {
                questions[x][i].checked ? weight.push(1) : weight.push(0)
            }
            questionWeights.push(weight)
        }
        let result = questionWeights.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), []);

        let newPath = result.indexOf(Math.max(...result))
        setPath('/results' + newPath)
    }

    return (
        <>
            <form id="form">

                {surveyQuestions.map((question) => {
                    return (
                            <div className="form-control">
                                <label id="label-name" className="question">
                                    {question}
                                </label>

                                <ul>
                                    {surveyOptions[surveyQuestions.indexOf(question)].map((option) => {            
                                        return (
                                            <li>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        id="option"
                                                        onChange={radioOnChange}
                                                        name={question}
                                                    />
                                                    {option}
                                                </label>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }

                <div className="form-control">
                    <label>
                        Any comments or suggestions
                    </label>


                    <textarea name="comment" id="comment"
                        placeholder="Enter your comment here">
                    </textarea>
                </div>

                
                <ButtonCard
                    buttonTitle = {'Submit'}
                    path = {path}
                    noStyle = {true}
                    //onClick = {handleSubmit} 
                />
            </form>
        </>
    )
}

export default Survey