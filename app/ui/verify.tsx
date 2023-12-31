'use client';
import Link from 'next/link';
import Button  from '@/app/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState, FormEvent } from 'react';

export default function Verify() {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp }),
      });
      if (!res.ok) throw new Error(await res.text());
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    if (success) {
      router.push('/dashboard');
    }
  }, [success]);

  return (
    <div className="flex flex-col items-center justify-center max-h-screen space-y-5">
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
      <h1 className='text-2xl font-bold'>Verification</h1>
      <p className='text-sm px-2 text-center'>Please enter the OTP sent to your email</p>
      <p className='text-red-500'>{error}</p>
      <p className='text-green-500'>{success ? 'Success' : ''}</p>
      <p>Didn't receive an email? <Link href="/somewhere" className='text-blue-500'>Resend</Link></p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input id='otp' placeholder="OTP" className="border-2 border-gray-300 rounded-md p-1" />
        <Button className='mx-auto'>Verify</Button>
      </form>
    </div>
  );
}