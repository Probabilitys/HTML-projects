import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title, showAddTask, onAdd }) => {
    
    return (
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Button showAddTask={showAddTask} 
                text={showAddTask ? 'Close' : 'Add'} onClick={onAdd}/>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
 
Header.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}

export default Header
