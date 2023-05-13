const BlogList = ({blog, title}) => {

	const HandleDelete = (id) => {
		const newBlogs = blog.filter( (blog) => blog.id !== id);
	}

	return ( 
		<div className="bloglist">
			<h2>{title}</h2>
			{
				BlogList.map( (blog) => (
					<div className="blog" key ={blog.id}>
						<a href="" className="blog-titre">{blog.title}</a>
						<button onClick={ HandleDelete(blog.id) }>supprimer article</button>
					</div>
				))
			}
		</div>
	 );
}
 
export default BlogList;