import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAddTask, showAdd }) => {

    // function handleClick() {
    //     console.log('clicked')
    // }

    return (
        <header className="header">
            <h1>Task Tracker</h1> 
            <p>{title}</p>
            <Button
                color={showAdd ? 'blue' : 'green'}
                // if Add btn is clicked, display close. otherwise display add
                text={showAdd ? "Close" : "Add"}
                onClick={onAddTask} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header