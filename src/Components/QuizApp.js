import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Card } from 'react-bootstrap'
import Question from './Question'
import Score from './Score'
import TimeCounter from './TimeCounter'
import Start from './Start'

class QuizApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questions: [
        {
          id: 1,
          question: 'What is the capital of France?',
          options: ['Paris', 'London', 'Berlin', 'Madrid'],
          answer: 'Paris'
        },
        {
          id: 2,
          question: 'What is the largest planet in our solar system?',
          options: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
          answer: 'Jupiter'
        },
        {
          id: 3,
          question: 'What day is Vietnam National Day?',
          options: ['02/09/1940', '02/09/1945', '03/09/1975', '02/09/1946'],
          answer: '02/09/1945'
        },
        {
          id: 4,
          question: "The growth rate of the Russian Federation's economy from 1991 to 1995 fell into a state of",
          options: ['Always a negative number', 'Underdeveloped', 'No development', 'Stagnation, slow development'],
          answer: 'Always a negative number'
        },
        {
          id: 5,
          question: 'About 20 years after World War II, America became',
          options: ["The world's largest economic and financial center", 'The first country to successfully launch an artificial satellite', 'One of three major economic and financial centers of the world', "The world's second economic and financial center"],
          answer: "The world's largest economic and financial center"
        },
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
      selectedAnswer: '',
      quizStarted: false
    }
  }

  handleAnswerSelect = (answer) => {
    this.setState({ selectedAnswer: answer })
  }

  handleNextQuestion = () => {
    const { selectedAnswer, currentQuestion, score, questions } = this.state
    if (selectedAnswer === questions[currentQuestion].answer) {
      this.setState({ score: score + 1 })
    }
    this.setState({ selectedAnswer: '' })

    if (currentQuestion < questions.length - 1) {
      this.setState({ currentQuestion: currentQuestion + 1 })
    } else {
      this.setState({ quizEnd: true })
    }
  }

  handleTimeUp = () => {
    this.handleNextQuestion()
  }

  handleStartQuiz = () => {
    this.setState({ quizStarted: true })
  }

  render() {
    const { questions, currentQuestion, quizEnd, selectedAnswer, score, quizStarted } = this.state
    const { timerDuration = 20 } = this.props

    return (
      <Container className='mt-5'>
        {!quizStarted ? (
          <Start onStart={this.handleStartQuiz} />
        ) : !quizEnd ? (
          <>
            <Card className='mb-4'>
              <Card.Body>
                <Card.Title as="h2" className='text-center'>NhatThach's the Quiz App</Card.Title>
                <TimeCounter
                  className='mb-5'
                  currentQuestion={currentQuestion}
                  onTimeUp={this.handleTimeUp}
                  duration={timerDuration}
                />
                <Question
                  questionData={questions[currentQuestion]}
                  selectedAnswer={selectedAnswer}
                  onSelectAnswer={this.handleAnswerSelect}
                  onNextQuestion={this.handleNextQuestion}
                />
              </Card.Body>
            </Card>
          </>
        ) : (
          <Card className='mb-0'>
            <Card.Body>
              <Score score={score} totalQuestions={questions.length} />
            </Card.Body>
          </Card>
        )}
      </Container>
    )
  }
}

export default QuizApp
