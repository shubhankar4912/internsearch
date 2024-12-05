import React, { useState } from "react";
import data from "../data";



const SearchBox = () => {
 
    
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");


  const categories = [...new Set(data.map((blog) => blog.category))];

  const filteredBlogs = data.filter((blog) => {
    return (
      (blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedCategory ? blog.category === selectedCategory : true)
    );
  });

  return (
    <div>
      <div className="w-full p-4">
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex space-x-4 p-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full p-4">
        {filteredBlogs.length > 0 ? (
          <ul className="space-y-4">
            {filteredBlogs.map((blog) => (
              <li
                key={blog.id}
                className="p-4 border rounded-md shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p className="text-sm text-gray-600">
                  {blog.category} - {blog.date}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
