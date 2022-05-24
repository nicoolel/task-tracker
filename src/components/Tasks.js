import Task from "./Task"

// bringing in eachTask prop
const Tasks = ({ eachTask, onDelete, onToggle }) => {

    return (
        <div>
            {/* looping through Task Array in App.js and outputting it in Task.js */}
            {eachTask.map(task => (
                <Task 
                    key={task.id} 
                    task={task}
                    onDelete = {onDelete}
                    onToggle = {onToggle} />
            ))}
        </div>
    )
}

export default Tasks