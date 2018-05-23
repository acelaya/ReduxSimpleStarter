import React from 'react';
import { connect } from 'react-redux'
import { fetchWeather } from '../actions'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { term: '' }
    }

    render() {
        return (
            <form className="input-group" onSubmit={(e) => this.onFormSubmit(e)}>
                <input className="form-control" placeholder="Get a five-day forecast in your favourite cities"
                    value={this.state.term} onChange={(e) => this.onInputChange(e)} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }

    onInputChange(event) {
        this.setState({term: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault()

        this.props.fetchWeather(this.state.term)
        this.setState({ term: '' })
    }
}

export default connect(null, { fetchWeather })(SearchBar)
