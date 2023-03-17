import React from 'react';
import ReactDOM from 'react-dom';

import { books } from './books';
import Book from './Book';
import './index.css'

function BookList() {
  return (
    <div className='booklist'>
      {
        books.map(book => {
          return <Book {...book} key={book.id} />
        })
      }
    </div>
  )
}



ReactDOM.render(<BookList />, document.getElementById('root'))