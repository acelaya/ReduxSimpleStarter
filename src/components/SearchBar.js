import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { term: 'Starting value' };
    }

    render() {
        return (
            <div>
                <input 
                    placeholder="Search"
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;
