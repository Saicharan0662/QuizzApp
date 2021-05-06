import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Details = ({ details, setDetails, crr_option, setCrr_option }) => {
    const [counter, setCounter] = useState(1)
    const [question, setQuestion] = useState('')
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [option3, setOption3] = useState('')
    const [option4, setOption4] = useState('')
    const [l1, setL1] = useState()

    const handelSubmit = (e) => {
        e.preventDefault()
        if (question && option1 && option2 && option3 && option4) {
            let newQuestion = {
                counter,
                question,
                option1,
                option2,
                option3,
                option4
            }
            setDetails([...details, newQuestion])
            setQuestion('')
            setOption1('')
            setOption2('')
            setOption3('')
            setOption4('')
            setCounter(counter + 1)

            setCrr_option([...crr_option, parseInt(l1)])
            setL1('')
        }
    }


    return (
        <>
            <div className="details-cont">
                <div className="details">
                    <form onSubmit={handelSubmit}>
                        <div className="input_cont">
                            <label htmlFor="question">Question: {counter}</label>
                            <input required type="text" value={question} onChange={(e) => setQuestion(e.target.value)} id="question" placeholder="Enter the question" />
                        </div>
                        <div className="input_cont">
                            <label htmlFor="option1">Option 1:</label>
                            <input type="text" value={option1} required onChange={(e) => setOption1(e.target.value)} id="option1" placeholder="Enter the Option 1" />
                        </div>
                        <div className="input_cont">
                            <label htmlFor="option2">Option 2:</label>
                            <input type="text" value={option2} required onChange={(e) => setOption2(e.target.value)} id="option2" placeholder="Enter the Option 2" />
                        </div>
                        <div className="input_cont">
                            <label htmlFor="option3">Option 3:</label>
                            <input type="text" value={option3} required onChange={(e) => setOption3(e.target.value)} id="option3" placeholder="Enter the Option 3" />
                        </div>
                        <div className="input_cont">
                            <label htmlFor="option4">Option 4:</label>
                            <input type="text" value={option4} required onChange={(e) => setOption4(e.target.value)} id="option4" placeholder="Enter the Option 4" />
                        </div>
                        <div className="toggle_cont">
                            <input className="correct_opt" required type="number" value={l1} onChange={(e) => setL1(e.target.value)} min="1" max="4" placeholder="correct option" />
                            <button type="submit" className="btn btn-add">Add</button>
                        </div>
                    </form>
                    <button className='btn btn-create'><Link className="Link" to="/mcq">Create</Link></button>
                </div>
                <div className="d-left">
                    Make your MCQ QUESTIONS on a GO!
                </div>
            </div>
        </>
    )
}

export default Details