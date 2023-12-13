import Button from '@/app/ui/button';
import Link from 'next/link';

export default function Login(){
  return(
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link href='/auth/auth/verify'><Button type="submit">Login</Button></Link>
      </form>
      <p>Don't have an account? <Link href='/auth/sign-up'>Sign up</Link></p>
    </div>
  )
}
