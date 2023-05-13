import { Link } from 'react-router-dom';

const BlogList = ({blogs, title}) => {

	return ( 
		<div className="bloglist">
			<h2>{title}</h2>
			{
				blogs.map( (blog) => (
					<div className="blog" key ={blog.id}>
						<Link to={`/blogs/${blog.id}`} className="blog-titre">{blog.title}</Link>
					</div>
				))
			}
		</div>
	 );
}
 
export default BlogList;