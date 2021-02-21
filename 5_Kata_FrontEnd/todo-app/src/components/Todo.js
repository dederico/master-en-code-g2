
import './Todo.css'
function Todo(props) {
    const showCompleted = (isCompleted) => {
        return isCompleted
            ? { 'textDecorationLine': 'line-through', 'marginLeft': '20px', }
            : { marginLeft: '20px' };
    }
    return (

        <div className="todo">
            <button type="button" onClick={() => props.delete(props.index)} style={{ 'marginRight': '19px' }}>Delete</button>
            <input type="checkbox" checked={props.isCompleted}
                onChange={() => props.setCompleted(props.index)} />
            <span style={showCompleted(props.isCompleted)}>
                {props.text}
            </span>

        </div>
    )
}
export default Todo;