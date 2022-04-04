import React,{useState} from 'react'

const List = ({text,id, setList,list}) => {
    const [inEditingPhase,setInEditingPhase] = useState(false)
	const [inputVal, setInputVal] = useState('')
    const deleteItem=(id)=>{
        const newData = list.filter((ele,index)=>index!==id);
        localStorage.setItem('list', JSON.stringify( newData));
			const localList = JSON.parse(localStorage.getItem('list'))
			setList(localList)
        // setList(newData)
    }
    const editItem = ()=>{
        setInEditingPhase(prev=>!prev)
        // console.log('clicked')
    }
    const saveItem = (id,e)=>{
        e.preventDefault()
        list[id]= inputVal
        let newList = [...list]
         localStorage.setItem('list', JSON.stringify( newList));
			const localList = JSON.parse(localStorage.getItem('list'))
			setList(localList)
        setList(newList)
        // console.log(list)
        setInEditingPhase(prevState=>!prevState)
    }
    return (
        <div className='sub--list'>
        {inEditingPhase?<form onSubmit={(e)=>saveItem(id,e)}> <div className='editing--input'>
            <input type="text" id='task' onChange={(e)=>setInputVal(e.target.value)}/> <button id="btn" onClick={(e)=>saveItem(id,e)}>Save</button>
            </div> </form>:
        <>
        <p className='list'>{text}</p>
            <button id="btn" onClick={()=>editItem()}>Edit</button>
            <button id="btn" onClick={()=>deleteItem(id)}>Delete</button>
        </>
        }
       
        </div>
    )
}

export default List
