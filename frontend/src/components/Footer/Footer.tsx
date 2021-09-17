import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-light text-center ">
                <div className="container p-4">
                    <h1>&copy; Camilo Galvis Portfolio</h1>
                    <p>2019 - {new Date().getFullYear()}</p>
                    <p>All rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
