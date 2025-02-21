import React from 'react'
import supabase from '../../helper/supabaseCliente';
import { Link } from 'react-router-dom';

const Index = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [message, setMessage] = React.useState('');

  // const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // }

  // const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // }

  const handleSubmitAsync = async (event: React.FormEvent) => {
    event.preventDefault();

    setMessage("");

    console.log('event.target', new FormData(event.target as HTMLFormElement));
    const formData = new FormData(event.target as HTMLFormElement);
    const model = {} as any;
    formData.forEach((value, key) => {
      console.log('key, value', key, value);
      // const rule = rules.filter(w => w.key === key)[0];
      // const unmaskedValue = rule ? unmaskModelValue(value.toString(), rule.valueType) : value;
      model[key] = value;
    }
    );
    console.log('[Form.handleSubmit] model', model);

    // const { data, error } = await supabase.auth.signUp({
    //   email: email,
    //   password: password
    // });

    // if (error) {
    //   setMessage(error.message);
    //   return;
    // }

    // if (data) {
    //   setMessage("Usuário criado com sucesso");
    // }

    // setEmail('');
    // setPassword('');
  }

  return (
    <div>
      <h2> Register </h2>
      <br />
      {message && <span> {message} </span>}
      <form onSubmit={handleSubmitAsync}>
        <input name='email' type='email' placeholder='Email' required />
        <input name='password' type='password' placeholder='Password' required />
        <button type='submit'> Criar conta </button>
      </form>
      <span> Não possui conta?  </span>
      <Link to='/register'> Cadastre-se </Link>
    </div>
  )
}

export default Index;