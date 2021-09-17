import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserGit } from './UserGit';

const Github = () => {

    const initialState = {
        name: "",
        html_url: "",
        avatar_url: "",
        bio: "",
        blog: ""
    }

    const [userGit, setUserGit] = useState<UserGit>(initialState)

    const {name, html_url, avatar_url, bio, blog} = userGit;

    const loadGit = async () => {
        const res = await fetch('https://api.github.com/users/cglv11');
        const data = await res.json();
        setUserGit(data);
    }

    useEffect(() => {
        loadGit()
    }, [])

    return (
            <div>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="card card-body text-center border border-3 border-dark">
                            <h1>{name}</h1>
                            <img src={avatar_url}></img>
                            <p>{bio}</p>
                            <Link to={blog} target="_blank" className="btn btn-outline-secondary my-2">My Blog</Link>
                            <Link to={html_url} target="_blank" className="btn btn-outline-secondary my-2">Go to Github</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Github




