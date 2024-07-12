import { ContactsOutlined, FireOutlined, HomeOutlined, InfoCircleOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav >
            <div className="navbar">
                <Link
                    className="btn btn-outline-primary"
                    to="/"
                >
                    <HomeOutlined /> Inicio
                </Link> <br />
                <Link
                    className="btn btn-outline-primary"
                    to="/ask"
                >
                    <FireOutlined /> Ask
                </Link><br />
                <Link
                    className="btn btn-outline-primary"
                    to="/informmation"
                >
                    <InfoCircleOutlined /> information
                </Link><br />
                <Link
                    className="btn btn-outline-primary"
                    to="/contact"
                >
                    <ContactsOutlined />  contact
                </Link>
            </div>
        </nav>
    )
}

export default Navbar