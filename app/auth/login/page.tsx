'use client';
import Button from '@/app/ui/button';
import Link from 'next/link';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useEffect, useState, FormEvent, Suspense } from 'react';

export default function Login(){
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    setLoading(true);
    try{
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if(!res.ok) throw new Error(await res.text());
      setSuccess(true);
    } catch(err){
      console.error(err);
    } finally{
      setLoading(false);
    }
  }
  useEffect(() => {
    if(success){
      router.push('/dashboard');
    }
  }
  , [success]);
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    switch(e.currentTarget.id){
      case 'username':
        setUsername(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center max-h-screen p-2 space-y-5">
      <Image
        src='/loginBackground.svg'
        alt='Login Background'
        fill={true}
      />
      <Image
        src='/scholar.svg'
        alt='Scholar'
        width={100}
        height={100}
      />
      <h1 className='text-2xl font-bold'>Login</h1>
      <form className="flex flex-col space-y-3" onSubmit={onSubmit}>
        <input id='username' placeholder="Username" className="border-2 border-gray-300 rounded-md p-1" onChange={handleChange} />
        <input id='password' placeholder="Password" className="border-2 border-gray-300 rounded-md p-1" onChange={handleChange} />
        <Button className='mx-auto'>Login</Button>
      </form>
      <p>Don't have an account? <Link href="/auth/register">Register</Link></p>
      <Button className='mx-auto' onClick={() => router.push('/auth/google')}>
        Continue with Google</Button>
    </div>
  );
}