import Button from '@/app/ui/button';
import Link from 'next/link';
import Image from "next/image";

export default function Login(){
  return(
    <div>
      <Image
        src='/loginBackground.svg'
        alt='backgroundCover'
        fill={true}
      />
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Link href='/auth/verify'><Button type="submit">Login</Button></Link>
      </form>
      <p>Don't have an account? <Link href='/auth/sign-up'>Sign up</Link></p>
    </div>
  )
}
