const BlogList = ({blogs, title}) => {

	return ( 
		<div className="bloglist">
			<h2>{title}</h2>
			{
				blogs.map( (blog) => (
					<div className="blog" key ={blog.id}>
						<a href="google.com" className="blog-titre">{blog.title}</a>
					</div>
				))
			}
		</div>
	 );
}
 
export default BlogList;