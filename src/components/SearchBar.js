/*import React from 'react';


class SearchBar extends React.Component{
    state = {term: ''};
   
    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }
  

    render(){
        return(
        <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form"><div className="field"><label>Video Search</label>
        <input value = {this.target}  onChange = {this.onInputChange}/></div>
        <button className="ui button" type="submit">Submit</button></form>
        </div>
        );
    }
}

export default SearchBar;*/

import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;