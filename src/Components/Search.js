import React, {Component} from 'react';

//getProfile()

class Search extends Component {

  submitForm(event){
    event.preventDefault();
    let value= this.refs.username.value;
    this.props.searchProfile(value);
    this.refs.username.value='';
  }

  render(){
    return(
      <div className="search-box">
        <form onSubmit={this.submitForm.bind(this)}>
          <label>Search here:<input type="search" ref="username" placeholder="Type username and hit enter" /></label>
        </form>
      </div>
    );
  }
}
export default Search;
