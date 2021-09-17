import useForm from './hooks/useForm';

const Formularios = () => {

    const { onChange, formulario, email, password, apellido } = useForm({
        email: 'name@email.com',
        password: '12345',
        apellido: 'perez'
    });

    return (
        <>
            <h3> Formularios </h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={ email }
                onChange={({ target }) => onChange( target.value , 'email') }
            />

            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={ password }
                onChange={({ target }) => onChange( target.value , 'password') }
            />

            <code>
                <pre>{ JSON.stringify( formulario, null, 2)}</pre>
            </code>
        </>
    )
}

export default Formularios
