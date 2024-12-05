const BlogCard = ({ blog }) => {
    return (
      <li key={blog.id} className="p-4 border rounded-md shadow hover:shadow-lg">
        <h3 className="text-lg font-bold">{blog.title}</h3>
        <p className="text-sm text-gray-600">
          {blog.category} - {blog.date}
        </p>
      </li>
    );
  };
  
  export default BlogCard;