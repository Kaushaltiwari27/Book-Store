import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import {Link} from 'react-router-dom';

const ManageBook = () => {
  const[allBooks,setAllBooks]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:7000/all-books").then(res =>res.json()).then(data=>setAllBooks(data));
  },[])


  // delete a books
  const handleDelete =(id) =>{
    fetch(`http://localhost:7000/book/${id}`,{
      method:"DELETE",
    }).then(res => res.json()).then(data =>{alert("Book is deleted successfully")
  // setAllBooks(data);
})
  }
  return (
    <div className='px-4 my-12'>
       <h2 className="mb-8 text-3xl font-bold">Manage Your Books</h2>
  

  {/* table for book data */}
  <Table className='lg:w-[1180px]'>
        <Table.Head>
          <Table.HeadCell>Sr No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
           <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {index+1}
            </Table.Cell>
            <Table.Cell>{book.bookTitle}</Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <Link href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" to={`/admin/dashboard/editbooks/${book._id}`}>
                Edit
              </Link>
              <button onClick={()=>handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
        
      
    </Table>
    </div>
  )
}

export default ManageBook