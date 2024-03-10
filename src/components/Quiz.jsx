import React, { useState } from 'react';
import { data } from '../questions';
import Result from './Result';
import '../App.css'


function Quiz() {
    const [currentQue, setCurrentQue] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState({ correct: 0, incorrect: 0 });
    const [showResult, setShowResult] = useState(false);

    const handleOption = (optionIndex) => {
        setSelectedOption(optionIndex);

        if (data[currentQue].correctOption === optionIndex) {
            setScore((prevScore) => ({
                ...prevScore,
                correct: prevScore.correct + 1,
            }));
        } else {
            setScore((prevScore) => ({
                ...prevScore,
                incorrect: prevScore.incorrect + 1,
            }));
        }

        setTimeout(() => {
            if (currentQue < data.length - 1) {
                setCurrentQue(currentQue + 1);
                setSelectedOption(null);
            } else {
                setShowResult(true);
            }
        }, 500); 
    };

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div style={{ height: '100%', width: '50%' }} className="bg-light border shadow m-5 p-3">
                {showResult ? (
                    <Result score={score} />
                ) : (
                    <div className="row m-3">
                        <div className="que">
                            <h6 style={{color:'brown'}}>Question: {currentQue + 1}</h6>
                            <h3>{data[currentQue].question}</h3>
                        </div>
                        <div className="ans">
                            <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                {data[currentQue].options.map((option, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`btn  ${selectedOption === index ? (index === data[currentQue].correctOption ? 'btn-success' : 'btn-danger') : 'optbtn'}`}
                                        onClick={() => handleOption(index)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Quiz;
