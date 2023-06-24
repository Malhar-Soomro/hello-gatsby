import React, { useState, useEffect } from "react"
import Layout from "../components/Layout";
import Task from "../components/Task";
import * as styles from "../styles/tasks.module.css";


const IndexPage = () => {

  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    const data = await fetch("http://localhost:3000/tasks");
    const response = await data.json()
    setTasks(response)
  }

  useEffect(() => {
    fetchTasks()
  }, [])


  return (
    <Layout>
      <div className={styles.container}>
        <h1>Tasks</h1>
        {tasks.map((task) => {
          return (
            task.id && <Task key={task.id} task={task} fetchTasks={fetchTasks} />
          )
        })}
      </div>

    </Layout>
  )
}

export default IndexPage

