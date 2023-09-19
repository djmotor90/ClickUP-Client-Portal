import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios/axiosConfig'; // Adjust the path based on your file structure

function TaskView() {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const { taskId } = useParams();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`/task/${taskId}`);
        console.log('Task API Response:', response.data);
        setTask(response.data);
      } catch (error) {
        console.error('Task API Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (taskId) {
      fetchTask();
    }
  }, [taskId]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (!task) {
    return <div className="error">Task not found or an error occurred while fetching the task details.</div>;
  }

  const descriptionParagraphs = task.description 
    ? task.description.split('\n').map((paragraph, index) => (<p key={index}>{paragraph}</p>)) 
    : 'No description available.';

  return (
    <div>
      <h1>Task View</h1>
      <p>Here you can view details of the selected task:</p>
      <h2>{task.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              {descriptionParagraphs}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskView;
