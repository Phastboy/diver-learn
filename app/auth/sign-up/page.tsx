import Link from 'next/link';
import Button from '@/app/ui/button';

export default function SignUp(){
  return(
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <Link href='/verify'><Button type="submit">Sign Up</Button></Link>
      </form>
      <p>Already have an account? <Link href='/auth/login'>Login</Link></p>
    </div>
  )
}
