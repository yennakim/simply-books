/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { viewAuthorDetails } from '../../api/mergedData';
import { getAuthorBooks } from '../../api/authorData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const [authorBooks, setAuthorBooks] = useState([]);
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  useEffect(() => {
    getAuthorBooks(firebaseKey).then(setAuthorBooks);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="d-flex flex-column">
        <img src={authorDetails.image} alt={authorDetails.first_name} {...authorDetails.last_name} style={{ width: '300px' }} />
      </div>
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
          {authorDetails.favorite ? ' 🤍' : ''}
        </h5>
        <p>Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a></p>
        <hr />
        <div className="d-flex flex-wrap">
          {authorBooks.map((book) => (
            <BookCard key={book.firebaseKey} bookObj={book} onUpdate={getAuthorBooks} />
          ))}
        </div>
      </div>
    </div>
  );
}
