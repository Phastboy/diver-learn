import Link from 'next/link';
import Image from "next/image";
import Button from '@/app/ui/button';

export default function SignUp(){
  return(
    <div className='justify-center items-center flex flex-col'>
      <Image
        src='/loginBackground.svg'
        alt='backgroundCover'
        fill={true}
      />
      <h1>Sign Up</h1>
      <form className='flex flex-col mt-5 space-y-3'>
        <input type="text" placeholder="Username" className='rounded-md'/>
        <input type="password" placeholder="Password" className='rounded-md'/>
        <input type="password" placeholder="Confirm Password" className='rounded-md' />
        <Link href='/verify'><Button type="submit">Sign Up</Button></Link>
      </form>
      <p>Already have an account? <Link href='/auth/login'>Login</Link></p>
    </div>
  )
}
