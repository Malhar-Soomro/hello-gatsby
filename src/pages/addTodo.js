import React, { useState } from 'react'
import Layout from '../components/Layout'
import * as styles from "../styles/addTodo.module.css"

const AddTodo = () => {

    const [task, setTask] = useState("")

    const addNote = async () => {
        console.log(task);
        try {
            const response = await fetch("http://localhost:3000/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // Request payload data
                    text: task
                }),
            });

            // Handle the response data
            const data = await response.json();
            console.log(data);
        } catch (error) {
            // Handle any errors
            console.error(error);
        }
    }


    return (
        <Layout>
            <div className={styles.container}>
                <textarea
                    onChange={(e) => setTask(e.target.value)}
                    cols={30}
                    rows={7}>
                </textarea>
                <button onClick={addNote}>
                    Add
                </button>
            </div>
        </Layout>
    )
}
export default AddTodo