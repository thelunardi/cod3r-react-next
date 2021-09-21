import { useEffect, useState } from 'react'

export default function Quiz() {
    const [quiz, setQuiz] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/api/quiz/1')
            .then(resp => resp.json())
            .then(setQuiz)
    }, [])

    const renderAnswers = () => {
        if(quiz) {
            return quiz.answers.map((answer, id) => <li key={id}>{answer}</li>)
        }
        return false
    }

    return (
        <div>
            <h1>Quiz</h1>
            <div>
                <span>{quiz?.id} - {quiz?.question}</span>
                <ul>
                    {renderAnswers()}
                </ul>
            </div>
        </div>
    )
}
