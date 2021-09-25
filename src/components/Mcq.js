import React, { useState, useRef } from "react";


const Mcq = ({ details, crr_option }) => {
  let res = [];
  let list = [];
  const [data, setData] = useState([])
  const [percent, setPercent] = useState(0)
  const [answered, setAnswered] = useState(false)
  const resultBox = useRef('')

  const createList = () => {
    details.forEach((element, index) => {
      if (crr_option[index] === 1) {
        list.push(element.option1);
      } else if (crr_option[index] === 2) {
        list.push(element.option2);
      } else if (crr_option[index] === 3) {
        list.push(element.option3);
      } else if (crr_option[index] === 4) {
        list.push(element.option4);
      }
    });
  };

  createList();

  const handelClick = (e, c) => {
    let chosen = e.target.value;
    do {
      res[c - 1] = chosen;
      break;
    } while (1);
  };

  let temp = []
  const handelSubmit = () => {
    setAnswered(true)
    let score = 0;
    console.log(res);
    console.log(list);
    for (let i = 0; i < res.length; i++) {
      if (res[i] === list[i]) {
        score += 1;
        temp.push(`Answer of question number ${i + 1} is correct`)
      } else {
        temp.push(`Answer of question number ${i + 1} is incorrect`)
      }
    }
    let x = (parseInt(score) / parseInt(res.length)) * 100
    setData(temp)
    setPercent(x)
  };

  return (
    <>
      <h1>Your MCQ questions! (You can submit only once)</h1>
      {details.map((q) => {
        const { counter, question, option1, option2, option3, option4 } = q;
        return (
          <div key={counter}>
            <h2 className="question">{counter}. {question}</h2>
            <div className="q-cont">
              <div className="form-check radio-cont">
                <input className="form-check-input" type="radio" name={counter} value={option1} onClick={(e) => handelClick(e, counter)} label={option1} id="op1" />
                <label className="form-check-label" htmlFor={option1}>{option1}</label>
              </div>
              <div className="form-check radio-cont">
                <input className="form-check-input" type="radio" name={counter} value={option2} onClick={(e) => handelClick(e, counter)} label={option2} id={option2} />
                <label className="form-check-label" htmlFor={option2}>{option2} </label>
              </div>
              <div className="form-check radio-cont">
                <input className="form-check-input" type="radio" name={counter} value={option3} onClick={(e) => handelClick(e, counter)} label={option3} id={option3} />
                <label className="form-check-label" htmlFor={option3}>{option3}</label>
              </div>
              <div className="form-check radio-cont">
                <input
                  className="form-check-input" type="radio" name={counter} value={option4} onClick={(e) => handelClick(e, counter)} label={option4} id={option4} />
                <label className="form-check-label" htmlFor={option4}>{option4}</label>
              </div>
            </div>
          </div>
        );
      })}
      <div className="btn-cont">
        <button className="btn btn-submit" onClick={handelSubmit}>Submit</button>
      </div>
      {answered &&
        <div ref={resultBox} className="result-box">
          {
            data.map(result => {
              return (
                <div>
                  <li>{result}</li>
                </div>
              )
            })
          }
          <h2 className={(percent > 80 ? "green" : percent < 50 && percent >= 40 ? "yellow" : percent < 40 ? "red" : "orange")}>Total percent scored: {percent} %</h2>
        </div>
      }
    </>
  );
};

export default Mcq;
