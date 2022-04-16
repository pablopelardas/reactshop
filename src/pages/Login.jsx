import React, { useRef } from 'react';
import '../styles/Login.scss';
// useRef va a generar una referencia al elemento para poder acceder a sus valores en cualquier momento y poder transmitirlos a donde queramos.
// @ts-ignore
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (e) => {
		// El current trae los valores actuales del formulario
		e.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password'),
		};
		console.log(data);
	};

	// FormData nos va a permitir instanciar todos los elementos capturados dentro de un form. Podemos enviar esto tambien al backend, de esta forma viaja de una forma mas segura para que no sea accesible por otras personas o alguien malicioso.

	return (
		<div className='Login'>
			<div className='Login-container'>
				<img src={logo} alt='logo' className='logo' />
				<form action='/' className='form' ref={form}>
					<label htmlFor='email' className='label'>
						Email address
					</label>
					<input
						type='text'
						name='email'
						placeholder='platzi@example.cm'
						className='input input-email'
					/>
					<label htmlFor='password' className='label'>
						Password
					</label>
					<input
						type='password'
						name='password'
						placeholder='*********'
						className='input input-password'
					/>
					<button
						onClick={handleSubmit}
						className='primary-button login-button'
					>
						Log in
					</button>
					<a href='/'>Forgot my password</a>
				</form>
				<button className='secondary-button signup-button'>Sign up</button>
			</div>
		</div>
	);
};

export default Login;
