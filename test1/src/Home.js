import { useState, useEffect} from 'React';
import BlogList from './BlogList';

const Home = () => {
	
	const [blogs, setBlog] = useState( [
		{
			id: 0,
			title: "1er titre",
		},
		{
			id: 1,
			title: "2e titre",
		}
	]);

	const HandleDelete = (id) => {
		const newBlogs = blogs.filter( (blog) => blog.id !== id);
		setBlog(newBlogs);
	}

	useEffect( ()=> {
		console.log('YO');
	}, []);

	return (
		<div className="home">
			<BlogList blogs={blogs} title={'Liste des blogs'} HandleDelete={HandleDelete} />
		</div>
	);

}

export default Home;