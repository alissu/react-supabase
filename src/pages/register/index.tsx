import React from 'react'
import supabase from '../../helper/supabaseCliente';
import { Link } from 'react-router-dom';

const Index = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmitAsync = async (event: React.FormEvent) => {
    event.preventDefault();

    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      setMessage("Usuário criado com sucesso");
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <h2> Register </h2>
      <br />
      {message && <span> {message} </span>}
      <form onSubmit={handleSubmitAsync}>
        <input type='email' placeholder='Email' value={email} required onChange={handleChangeEmail} />
        <input type='password' placeholder='Password' value={password} required onChange={handleChangePassword} />
        <button type='submit'> Criar conta </button>
      </form>
      <span> Já possui uma conta? </span>
      <Link to='/login'> Login </Link>
    </div>
  )
}

export default Index;