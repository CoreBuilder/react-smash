import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  /*
    // Callback
    onInputChange(event) {
        console.log(event.target.value);
    }
  */
  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Car Search</label>
            {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
            {/* <input type="text" onChange={this.onInputChange}></input> */}
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
