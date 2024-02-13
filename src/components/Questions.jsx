import { useState, useEffect } from 'react'
import questions from '../../public/assets/questions'

function Questions() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timer, setTimer] = useState(6); // bunu degısmeyiii unutmaaa 30 sn olcak.
    const currentQuestion = questions[currentQuestionIndex];
    const [showOptions, setShowOptions] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [wrongAnswer, setWrongAnswer] = useState(0);

    useEffect(() => {
        setShowOptions(false);
        const countDown = timer > 0 && setInterval(() => {
            setTimer(prevTimer => prevTimer - 1);  // timer-1 idi değiştirdik.
        }, 1000);

        if (timer <= 3) {  // degismeti unutmaaaa
            setShowOptions(true);
        }

        if (timer === 0) {
            nextQuestion();
        }

        return () => clearInterval(countDown);
    }, [timer, currentQuestionIndex]);

    useEffect(() => {
        console.log("Doğru: " + correctAnswer + ", Yanlış: " + wrongAnswer);
    }, [correctAnswer, wrongAnswer]);

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimer(6); // burada da değişecekkkkkkk
            setShowOptions(false);
        } else {
            alert('finish')
        }
    };

    const handleAnswer = (selectedOption) => {
        if(selectedOption === currentQuestion.answer) {
            setCorrectAnswer(prevCorrect => prevCorrect + 1);
        } else {
            setWrongAnswer(prevWrong => prevWrong + 1);
        }
        nextQuestion();
    };

    return (
        <div className='questions'>
            <p className='timer'>{timer}</p>
            <img src={`/assets/pictures/${currentQuestion.media}`} alt={currentQuestion.media} width='300' />
            <h2>{currentQuestion.id}-{currentQuestion.question}</h2>
            {showOptions && (
                <div className='options'>
                    {currentQuestion.options.map((item, index) => (
                        <button className='button' key={index} onClick={() => handleAnswer(item)}>
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Questions