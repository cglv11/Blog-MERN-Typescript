import { useEffect, useRef, useState } from 'react'
import { reqResApi } from '../../api/reqRes';
import { ReqResListado, Usuario } from '../../interfaces/reqRes.interface';

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {
       // llamada API 
        cargarUsuarios()
    }, [])

    const cargarUsuarios = async () => { //paginacion de usuarios

        const resp = await reqResApi.get<ReqResListado>('/users', { 
            params: {
                page: paginaRef.current //current is paginaRef = useRef( current )
            }
        })

        if ( resp.data.data.length > 0){
            setUsuarios(resp.data.data)
        } else {
            paginaRef.current--;
            alert("No hay más registros")
        }

    }

    const paginaSiguiente = () => {
        paginaRef.current ++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1 ) {
            paginaRef.current --;
            cargarUsuarios();
        }
    } 

    return { 
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }
}
