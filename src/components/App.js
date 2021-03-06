import React from 'react';
import { connect } from 'react-redux';
import { createBook, deleteBook, filterBook } from '../actions/index';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import './App.scss';
import userSolid from '../assets/images/user-solid.svg';

const mapStateToProps = (state) => ({ books: state.books, category: state.category });
const mapDispatchToProps = (dispatch) => ({
  deleteBook: (book) => dispatch(deleteBook(book)),
  changeFilter: (filter) => dispatch(filterBook(filter)),
});

const BooksListContainer = connect(mapStateToProps, mapDispatchToProps)(BooksList);

const mapDispatchToPropsForm = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});
const BooksFormContainer = connect(null, mapDispatchToPropsForm)(BooksForm);

const App = () => (
  <div className="App">
    <header className="header">
      <h2 className="header-title">
        BookStore CMS
      </h2>
      <span className="user-profile">
        <img alt="user svg" src={userSolid} />
      </span>
    </header>
    <BooksListContainer />
    <BooksFormContainer />
  </div>
);

export default App;
