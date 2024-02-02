import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
const author = "Sarah J. Maas";
const title = "House of Flame and Shadow";
const img = "./images/book-1.jpg";

// parameters
const someFunc = (param1, param2) => {
  console.log(param1, param2);
};
// arguments
someFunc('job', 'developer');
const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  
  return (
    <article className="book">
      <img src={img} alt={title}/>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />); 


