import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <Link to='register'> Register </Link>
      <br />
      <Link to='login'> Login </Link>
    </div>
  )
}

export default Index;