import React, { Component } from 'react'
import { Card, Button, ListGroup } from 'react-bootstrap'

class Question extends Component {
  render() {
    const { questionData, selectedAnswer, onSelectAnswer, onNextQuestion } = this.props
    const { question, options } = questionData

    return (
      <Card className="mt-2">
        <Card.Body>
          <Card.Title>{question}</Card.Title>
          <ListGroup>
            {options.map((option, index) => (
              <ListGroup.Item
                key={index}
                // active={selectedAnswer === option}
                variant={selectedAnswer === option ? 'success' : ''}
                onClick={() => onSelectAnswer(option)}
                style={{ cursor: 'pointer' }}
              >
                {option}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button
            className="mt-3"
            variant="primary"
            onClick={onNextQuestion}
            disabled={!selectedAnswer}
          >
            Next Question
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default Question
