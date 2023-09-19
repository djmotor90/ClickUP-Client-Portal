import React, { useEffect, useState } from 'react';
import axios from '../axios/axiosConfig'; // Adjust the import path according to your file structure
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const listId = process.env.REACT_APP_LIST_ID;

  useEffect(() => {
    if (!listId) {
      console.error('List ID is undefined in the environment variable.');
      return;
    }

    const fetchTasks = async () => {
      try {
        const response = await axios.get(`/list/${listId}/task`);
        setTasks(response.data.tasks); // Adjust according to API response structure
      } catch (err) {
        console.error('Tasks API Error:', err);
        setError(err);
      }
    };

    fetchTasks();
  }, [listId]);

  if (error) {
    return <div>Error loading tasks</div>;
  }

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>{task.name}</Link> {/* Add a Link component wrapping the task name */}
          </li> 
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
