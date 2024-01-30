import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";


const EditBooks = () => {
  const{id} =useParams();
  const{bookTitle ,authorName,imageURL,category,bookDescription,bookPDFURL}=useLoaderData(); 
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "History",
    "Mistry",
    "Programming",
    "Horror",
    "Science Fiction",
    "Fantasy",
    "Romance",
    "Bibliography",
    "Autobiography",
    "Self-help",
    "Memoir",
    "Business",
    "Educational",
    "Children",
    "Travel",
    "Religion",
    "Art and design",
  ];

  const [selectBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  const handledChangedSelectedvalue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  // handle book submission
  const handleUpdate = (event => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
  
    const updateBookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };
    fetch(`http://localhost:7000/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(updateBookObj)
    }).then((res) => res.json())
    .then((data) => {
      alert("Book is Updated  successfully!!!");
    
    });
  
  });

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update the book data</h2>
      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4 "
        onSubmit={handleUpdate}
      >
        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput
            id="bookTitle"
            name="bookTitle"
            type="text"
            placeholder="Book Name"
            value={bookTitle}
            required
          />
        </div>

        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput
            id="authorName"
            name="authorName"
            type="text"
            value={authorName}
            placeholder="Author Name"
            required
          />
        </div>

        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Image" />
          </div>
          <TextInput
            id="imageURL"
            name="imageURL"
            type="text"
            value={imageURL}
            placeholder="Image Url"
            required
          />
        </div>

        <div className="lg:w-1/2">
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Book Category" />
          </div>
          <Select
            id="inputState"
            name="categoryName"
            className="w-full rounded"
            value={selectBookCategory}
            onChange={handledChangedSelectedvalue}
          >
            {bookCategories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </div>

        <div className="lg:w-3/4">
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write Your book Description..."
            value={bookDescription}
          
            required
            className="w-full"
            rows={6}
          />
        </div>

        {/* Book Pdf Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            value={bookPDFURL}
            placeholder="book pdf url"
            required
          />
        </div>
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
}

export default EditBooks
