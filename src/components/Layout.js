import React from 'react'
import "../styles/global.css"
import { Link } from 'gatsby'

const Layout = ({ children }) => {
    return (
        <>

            <div className='layout'>
                <Link to='/'>Home</Link>
                <Link to='/addTodo'>Add todo</Link>
            </div>

            <div className='content'>
                {children}
            </div>

            <div className='footer'>
                Footer
            </div>

        </>
    )
}

export default Layout