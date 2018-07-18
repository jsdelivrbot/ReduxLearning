import React, { Component } from 'react';
import { connect } from 'react-redux'  // it is a function

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );

    });
  }


  render () {


    return(
      <ul className='list-group col-sm-4'>
        { this.renderList() }
      </ul>
    );
  }
}


function mapStateToProps(state) {
  // whatever returned here will show up as props inside BookList

  return {
    books: state.books      // will assigned to this.props.books
  }
}


// take state into container

export default connect(mapStateToProps)(BookList);
