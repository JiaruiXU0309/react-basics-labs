const Task = (props) => {
    
    return (
        <div className="card">
        <p className="title">{props.title}</p>
        <p>Due: {props.deadline}</p>
        <p className="description">{props.description}</p>
        <p className="level">{props.level}</p>
        </div>
        
    )
}

export default Task;
