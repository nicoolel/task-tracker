import { FaTimes } from "react-icons/fa"

const Task = ({ task, onDelete, onToggle }) => {
    return (
        // passing in task obj and getting the text value from each
        <div 
            // if task reminder is true, add the reminder class. else leave it empty
            className= {`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick ={() => onToggle(task.id) }>
            {/* import icon into h3 element */}
            <h3>{task.text} 
                <FaTimes 
                    style={{color: 'blue', cursor: 'pointer'}}
                    onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task