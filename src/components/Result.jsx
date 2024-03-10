import React from 'react';
import '../App.css'

function Result({ score }) {
    return (
        <div className="container">
            <div className="justify-content-center text-center">
                <h3 className="res-title m-3">Result</h3>
                <hr />
                <p className="res-text text-success">Correct Answers: {score.correct}</p>
                <p className="res-text text-danger">Incorrect Answers: {score.incorrect}</p>
            </div>
        </div>
    );
}

export default Result;
