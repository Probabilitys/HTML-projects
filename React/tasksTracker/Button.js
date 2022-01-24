const Button = ({ showAddTask, text, onClick }) => {

    return (
        <button onClick={onClick} className='btn'
        style={{backgroundColor: showAddTask ? 'red' : 'green'}}>
            {text}
        </button>
    )
}
export default Button
