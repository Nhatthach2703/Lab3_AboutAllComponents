import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

class TimeCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeLeft: props.duration
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.countDown, 1000)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentQuestion !== this.props.currentQuestion) {
            this.resetTimer()
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    countDown = () => {
        const { timeLeft } = this.state
        if (timeLeft > 0) {
            this.setState({ timeLeft: timeLeft - 1 })
        } else {
            this.props.onTimeUp()
        }
    }

    resetTimer = () => {
        this.setState({ timeLeft: this.props.duration })
    }

    render() {
        return (
            <div className='d-flex'>
                <h5 >Time Left: </h5>
                <h5 className='text-danger mx-2'>{this.state.timeLeft}s</h5>
            </div>
        )
    }
}

export default TimeCounter