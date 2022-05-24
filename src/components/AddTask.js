// component level state

import { useState } from "react"


const AddTask = ({ onAdd }) => {

    // stateHook
    const [text, setText] = useState("")

    const [date, setDate] = useState("")

    const [reminder, setReminder] = useState("")

    const submitTask = (e) => {
        // prevent submitting when refreshed
        e.preventDefault()

        // check if text is there
        if (!text) {
            console.log("please add task")
            return
        }

        onAdd({ text, date, reminder })

        setText("")
        setDate("")
        setReminder(false)
    }

    return (
        <form 
            className="add-form"
            onSubmit = {submitTask} >
            <div className="form-control">
                <label>Task </label>
                <input 
                    type="text" 
                    placeholder="Add Task"
                    // destructuring text from text useState Hook
                    value = {text}
                    onChange = {(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input 
                    type="text" 
                    placeholder="Add Date"
                    value = {date}
                    onChange = {(e) => setDate(e.target.value)} 
                />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input 
                    type="checkbox"
                    checked = {reminder}
                    value = {reminder}
                    // give true or false
                    onChange = {(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    )
}

export default AddTask