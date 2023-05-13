import { useParams } from "react-router";
import useFetch from "./useFetch.js";

const BlogDetail = () => {
	const { id } = useParams();
	const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs'+id);

	return ( 
		<div className="detail-blog">
			{isLoading && <div>En cours de traitement</div>}
			{error && <div>{error}</div>}
			{blog && (
				<div className="blog">
					<h2 className="blog-title">{blog.title}</h2>
				</div>
			)}
		</div>
	 );
}
 
export default BlogDetail;