const Task = (props) => {
    
    let backgroundColor;
    if (props.level === "High") {
        backgroundColor = "red";
    } else if (props.level === "Medium") {
        backgroundColor = "orange";
    } else {
        backgroundColor = "green";
    }


    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
        <p className="title">{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p className="description">{props.description}</p>
        <p className="level" style={{backgroundColor: props.done ? 'lightgrey' : backgroundColor}}>{props.level}</p>
        <button onClick={props.markDone} className='doneButton'>Done</button>
        <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
        
    )
}

export default Task;
