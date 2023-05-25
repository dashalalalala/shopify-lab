import { Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PageFour( {questions}) {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({answer: '' })
    const [errors, setErrors] = useState({answer : ''});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

        const validateForm = () => {
            let formErrors = {};
        
            if (!formData.answer) {
            formErrors.answer = 'Please select a answer';
            }
            setErrors(formErrors);
        };

    const handleAnswerOptionClick = (isCorrect) => {

        const validationErrors = validateForm();
        if ( isCorrect &&  !Object.keys(validationErrors).length) {
        setScore(score + 1);
        } else {
            setErrors(validationErrors);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        } else {
            setFormData(isCorrect)
        setShowScore(true);
        }
    };

    const handleChange = (e) => {
        setFormData(e.target.value);
      };
      

console.log(formData);

    const buttonReset = () => {
        navigate("/quiz");
    };

    return (
        <div>
        {showScore ? (
            <div className="title">
            You scored {score} out of {questions.length}
            <p>check your for certification</p>
            <button type="reset" onClick={buttonReset}>
                Reset
            </button>
            </div>
        ) : (
            <>
            <h2 className="title">Management Skills Quiz</h2>
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                <>
                <form
                onSubmit={(e => handleAnswerOptionClick(answerOption.isCorrect))}
            >
                    <p className="text" key={index}>
                    {questions[currentQuestion].questionText}
                    </p>
                    <input
                    type="radio"
                    name="answer"
                    value={answerOption.answerText}
                    checked={formData.answer === answerOption.isCorrect}
                    onChange={handleChange}
                    />
                    <label className="text" htmlFor="answer">{answerOption.answerText}</label>
                    {errors.answer && <p>{errors.answer}</p>}
                    <button className="button">SUBMIT</button>
                    </form>
                </>
                ))}
           
            </>
        )}
        </div>
    );
}

// <div className="guide">
// {showScore ? (
//     <div className="title">
//     You scored {score} out of {questions.length}
//     <p>check your for certification</p>
//     <button type="reset" onClick={buttonReset}>
//         Reset
//     </button>
//     </div>
// ) : (
//     <>
//     <h2 className="title">Management Skills Quiz</h2>
//         {questions[currentQuestion].answerOptions.map((answerOption, index) => (
//         <>
//         <form
//         onSubmit={(e => handleAnswerOptionClick(answerOption.isCorrect))}
//     >
//             <p className="text" key={index}>
//             {questions[currentQuestion].questionText}
//             </p>
//             <input
//             type="radio"
//             name="answer"
//             value={answerOption.answerText}
//             checked={formData.answer === answerOption.isCorrect}
//             onChange={handleChange}
//             />
//             <label className="text" htmlFor="answer">{answerOption.answerText}</label>
//             {errors.answer && <p>{errors.answer}</p>}
//             <button className="button">SUBMIT</button>
//             </form>
//         </>
//         ))}
   
//     </>
// )}
// </div>
// );