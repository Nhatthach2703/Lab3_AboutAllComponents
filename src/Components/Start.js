import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Start = ({ onStart }) => {
    return (
        <Card className='text-center'>
            <Card.Body>
                <Card.Title as="h2">Welcome to NhatThach's the Quiz App</Card.Title>
                <Card.Text>You can press the button below to start this quizz</Card.Text>
                <Button variant="primary" onClick={onStart}>
                    Start
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Start
