import React,{useState,useEffect} from 'react';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
function Icon(props){
	if(props.displayed){
		return <AiOutlineMinus/>;
	}
	else{
		return <AiOutlinePlus/>;
	}
}
function Text({displayed, info}){
	if(displayed){
		return <p>{info}</p>;
	}
	else{
		return <p></p>
	}
}
function Question({id, title, info}){
	const [displayed,setDisplayed]=useState(false);
	return (
		<div className='question'>
			<header>
				<h4>{title}</h4>
				<button className='btn' onClick={()=>{setDisplayed(!displayed)}}><Icon displayed={displayed}/> </button>
			</header>
			<Text displayed={displayed} info={info}/>
		</div>
	)
}

export default Question;