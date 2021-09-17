import { useEffect, useReducer } from 'react'

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type loginPayload = {
    username: string;
    nombre: string;
}

type AuthAction = 
    | { type: 'logout' }
    | { type: 'login', payload: loginPayload };


const authReducer = ( state: AuthState, action: AuthAction): AuthState => { //args state and action because is a reducer
    
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        case 'login':

            const { nombre, username } = action.payload;
            
            return { 
                
                validando: false,
                token: 'ASKLDFKJ',
                nombre,
                username
            }

        default:
            return state;
    }

}
 
const Login = () => {

    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({type: 'logout'})
        }, 1500);
    }, [])

    const login = () => {
        dispatch({ type: 'login', 
                   payload: { 
                       nombre: 'Camilo', 
                       username: 'cglv11' 
                    } 
        })
    }

    const logout = () => {
        dispatch({
            type: 'logout'
        })
    }

    if( validando ) {   
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    validando...
                </div> 
            </>
        )
    }


    return (
        <>
            <h3>Log</h3>

            {   
                ( token ) 
                    ? <div className="alert alert-success"> Autenticado { nombre } </div>
                    : <div className="alert alert-danger"> No autenticado </div>
            }

            {            
                ( token )
                    ?   (                 
                            <button className="btn btn-danger" onClick={ logout }>
                                Logout
                            </button> 
                        )
                    :      
                        ( 
                            <button className="btn btn-primary" onClick={ login }>
                                Login
                            </button>
                        )
            }

        </>
    )
}

export default Login
