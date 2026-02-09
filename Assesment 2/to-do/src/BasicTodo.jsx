import { useState } from 'react';
import './BasicTodo.css';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('all');

    function addTask() {
        if (input.trim() === '') return;
        setTasks([...tasks, { text: input, status: 'pending' }]);
        setInput('');
    }

    function setCompleted(index) {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, status: 'completed' } : task
        ));
    }

    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }

    const filteredTasks = tasks.filter(task => filter === 'all' || task.status === filter);
    const pendingCount = tasks.filter(task => task.status === 'pending').length;
    const completedCount = tasks.filter(task => task.status === 'completed').length;

    return (
        <div className="todo-container">
            <h2>Basic To-Do App</h2>

            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Add a task"
                className="todo-input"
            />

            <button onClick={addTask} className="todo-add-btn">Add</button>

            <div className="filter-buttons">
                <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
                <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pending</button>
                <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
            </div>

            <div className="counts">
                <p>Pending: {pendingCount}</p>
                <p>Completed: {completedCount}</p>
            </div>
            
            <ul className="todo-list">
                {filteredTasks.map((task, i) => (
                    <li key={i} className="todo-item">
                        <span className={`todo-text${task.status === 'completed' ? ' todo-completed' : ''}`}>
                            {task.text} ({task.status})
                        </span>
                        <button onClick={() => setCompleted(i)} disabled={task.status === 'completed'} className="todo-complete-btn">
                            Complete
                        </button>
                        <button onClick={() => deleteTask(i)} className="todo-delete-btn">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
