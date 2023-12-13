'use client';
import Link from 'next/link';
import Image from "next/image";
import Button from '@/app/ui/button';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp(){
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  async function onSubmit(e: FormEvent){
    e.preventDefault();
    setLoading(true);
    if(password !== confirmPassword){
      setLoading(false);
      alert('Passwords do not match');
      return;
    }
    try{
      const response = await fetch('/api/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      });
      if(response.ok){
        handleSuccess();
      } else {
        throw new Error('Sign up failed');
      }
    }
    catch(e){
      setSuccess(false);
      setLoading(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch(e.target.id){
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(e.target.value);
        break;
    }
  }

  const handleSuccess = () => {
    setLoading(false);
    setSuccess(true);
    router.push('/auth/verify');
  }
  const handleError = () => {
    setSuccess(false);
  }
  const handleLoading = () => {
    setLoading(true);
  }

  return(
    <div className='justify-center items-center flex flex-col space-y-5 h-screen'>
      <Image
        src='/loginBackground.svg'
        alt='backgroundCover'
        fill={true}
      />
      <Image
        src='/scholar.svg'
        alt='Scholar'
        width={100}
        height={100}
      />
      <h1>Sign Up</h1>
      <form className='flex flex-col mt-5 space-y-3' onSubmit={onSubmit}>
        <input id='username' type="text" placeholder="Username" className='border-2 border-gray-300 rounded-md p-1' onChange={handleChange}/>
        <input id='password' type="password" placeholder="Password" className='border-2 border-gray-300 rounded-md p-1' onChange={handleChange}/>
        <input id='confirmPassword' type="password" placeholder="Confirm Password" className='border-2 border-gray-300 rounded-md p-1' onChange={handleChange}/>  
        <Button type="submit" className='mx-auto'>Sign Up
        {
          loading && <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900'></div>
        }
        </Button>
      </form>
      <p>Already have an account? <Link href='/auth/login'>Login</Link></p>
    </div>
  )
}
