import React, { useState } from 'react'
import * as styles from "../styles/task.module.css";

const Task = ({ task, fetchTasks }) => {

    const [updatedId, setUpdatedId] = useState();

    const updateTask = async (id) => {
        setUpdatedId(id);


        if (document.getElementById("updateInput")) {
            const inputValue = document.getElementById("updateInput").value;
            const defaultValue = document.getElementById("updateInput").defaultValue;
            if (inputValue !== defaultValue) {
                try {
                    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            // Request payload data
                            text: inputValue
                        }),
                    });

                    // Handle the response data
                    const data = await response.json();
                    console.log(data);
                    setUpdatedId()
                } catch (error) {
                    // Handle any errors
                    console.error(error);
                }
            }
        }

        fetchTasks()

    }

    const deleteTask = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/tasks/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            // Handle the response data
            const data = await response.json();
            console.log(data);
        } catch (error) {
            // Handle any errors
            console.error(error);
        }
        fetchTasks()
    }

    return (
        <div className={styles.container}>
            {console.log(updatedId)}

            {updatedId && (
                (updatedId === task.id) &&
                <input id='updateInput' type="text" defaultValue={task.text} />
            )}
            <p>
                {task.text}
            </p>
            <div className={styles.btnContainer}>
                <button onClick={() => updateTask(task.id)}>
                    Update
                </button>
                <button onClick={() => deleteTask(task.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Task