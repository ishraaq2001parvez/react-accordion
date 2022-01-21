import React, { useState, useEffect } from 'react';
import Question from './Question';
import questions from './data';
function App(){
	const [queries,setQueries]=useState(questions);
	console.log(queries);
	return (
		<main>
			<div className='container'>
				<h3>Questions and answers about login</h3>
				<ul>
				{queries.map((query)=>{
					console.log(query);
					return <li key={query.id}><Question key={query.id} {...query} /></li>
				}
				)}
				</ul>
			</div>
		</main>
	);
};

export default App;