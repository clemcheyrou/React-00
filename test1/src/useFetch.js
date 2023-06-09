import { useState, useEffect} from 'react';

const useFetch = ({url}) => {

	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect( ()=> {
		const abortCont = new AbortController();

		setTimeout( () => {
			fetch(url, {signal : abortCont.signal})
				.then( (response) => {
					if(!response) {
						throw Error('Desole une erreur est survenu...');
					}
					return response.json();
				})
				.then( (data) => {
					setData(data);
					setIsLoading(false);
					setError(null);
				})
				.catch( err => {
					if (err.name === "AbortError")
						console.log('pb fetch');
					else
					{
						setError(err.message);
						setIsLoading(false);
					}
				})
				
			}, 2000)

			return () => abortCont.abort();

	}, []);

	return {data, isLoading, error};
}
 
export default useFetch;