import React, { useState } from 'react'
import { toast } from 'react-toastify'

const urlToken = 'https://inclubtest.com:2053/api/token'

const Login = () => {

	const [usuario,setUsuario] = useState('')
	const [contraseña,setContraseña] = useState('')

	const obtenerToken = async () => {
		try {
			const promise = await fetch(urlToken,{
				method: 'POST',
				headers:{
					'Content-Type': 'application/json'
				},

				body: JSON.stringify({
					"username": usuario,
					"password": contraseña
				})
			})
			const response = await promise.json()
			if(promise.status == 200){
				toast.success('Logueado correctamente')
				
			}else{
				toast.error('Usuario o contraseña incorrecta')
			}
			console.log("response -> ",response)
			
		} catch (error) {
			toast.error('error')
			
		}
	}

	return (
		<section className='flex items-center justify-center h-screen'>
			<div className='flex flex-col w-[400px] gap-4'>
				<div className='flex flex-col gap-2'>
					<span>Usuario</span>
					<input value={usuario} onChange={e => setUsuario(e.target.value)} type="text" />
					<span>Contraseña</span>
					<input value={contraseña} onChange={e => setContraseña(e.target.value)} type="password" />
				</div>
				<button onClick={obtenerToken} className='border rounded py-2'>Ingresar</button>
			</div>
		</section>
	)
}

export default Login