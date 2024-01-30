import React from 'react'
import {useLoaderData} from 'react-router-dom';

const SingleBook = () => {
  const bookData = useLoaderData();
  const {_id, bookTitle ,imageURL} = bookData;
  return (
    <div className='mt-28 px-4 lg:px-24'>
     <img src={imageURL} alt="" className='h-96'/>
      <h3 >{bookTitle}</h3>
    </div>
  )
}

export default SingleBook