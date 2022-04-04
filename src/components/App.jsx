import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import List from "./List";

function App() 
{	
	useEffect(() => {
			const localList = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[]
			setList(localList)
	}, [])

	const [list, setList] = useState([])
	const [inputVal, setInputVal] = useState('')
			// console.log("locally stored"+localStorage.getItem('list'))
			// console.log("locally stored"+typeof( JSON.parse(localStorage.getItem('list'))))
	const handleSubmit =(e)=>{
		e.preventDefault()
		// console.log(inputVal)
		if(inputVal.length>0){
			const newData = list.concat(inputVal)
			setInputVal('')
			// localStorage.setItem(newData)
			// localStorage.removeItem('list');
			localStorage.setItem('list', JSON.stringify( newData));
			const localList = JSON.parse(localStorage.getItem('list'))
			setList(localList)
			// setList(localStorage.getItem('array'))


		}else{
			alert('please feed something')
		}
		// setList(prevData=> {[...prevData], inputVal})

	}
	return (
	<div id="main">
		<div className="title">
			<h1>Todo App</h1>
		</div>
			<div className="form">
				<form onSubmit={handleSubmit}>
				<input type="text" id="task" value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/>
				<button id="btn" onClick={(e)=>handleSubmit(e)}>Submit</button>
			</form>
			</div>
		<div className="list">
			{list.map((ele,index)=><List key={index} text={ele} id={index} list={list} setList={setList}/>)}
		</div>
	</div>
	);
}


export default App;
