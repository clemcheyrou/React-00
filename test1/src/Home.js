import { useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {

	const [blogs, setBlog] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect( ()=> {
		setTimeout( () => {
			fetch('http://localhost:3000/blogs')
				.then( (response) => {
					return response.json();
				})
				.then( (data) => {
					setBlog(data);
					setIsLoading(false);
				})
				
			}, 2000)
	}, []);

	return (
		<div className="home">
			{ isLoading && <div>en cours de traitement</div>}
			{ blogs && <BlogList blogs={blogs} title={'Liste des blogs'}/>}
		</div>
	);
}
 
export default Home;