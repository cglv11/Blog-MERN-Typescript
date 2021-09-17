import React from 'react'
import { Link } from 'react-router-dom'
import { skills, experiences } from '../profile'

const MainPage = () => {
    return (
        <div>
            {/* headercard */}
            <header className="row">
                <div className="col-md-12">
                    <div className="card-body bg-secondary text-light">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="camilog.jpg" alt="" className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <h1>Camilo Galvis</h1>
                                <h3>FullStack developer</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Blanditiis impedit assumenda officia quos aliquid. Voluptas quia a odio cumque alias maiores,
                                    porro amet non assumenda repudiandae quasi quis deleniti quae? </p>
                                <a href="/hireme">Hire me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Second section */}
            <div className="row py-2">
                <div className="col-md-4">
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            <h1>Skills</h1>
                            {
                                skills.map(({ skill, percentage }, i) => (
                                    <div className="py-3" key={i}>
                                        <h5>{skill}</h5>
                                        <div className="progress">
                                            <div className="progress-bar"
                                                role="progressbar"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            <h1>Experience</h1>
                            <ul>
                                {
                                    experiences.map(({title, description, from, to}, index) => (

                                        <li key={index}>
                                            <h3>{title}</h3>
                                            <h5>{from}-{to}</h5>
                                            <p>{description}</p>
                                        </li>

                                    ))
                                }
                            </ul>                      
                            <Link className="navbar-brand btn-btn-light" to="/">
                                Know more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
