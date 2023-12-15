'use client';
import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import Image from 'next/image';
import { Suspense } from 'react';

const UserIcon = () => {
  const [user, setUser] = useState({ name: '', picture: ''});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchUser() {
    try {
        const res= await fetch('/api/user');
        const data= await res.json();
        if (res.status === 200) {
            setUser(data);
        }else{
            setError(data);
        }
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
        //my dummy data
        setUser({
            name: 'Hammed Anuoluwapo',
            picture: 'https://github.com/Phastboy.png',
        }); 
    }
  }
    useEffect(() => {
        fetchUser();
    }, []);
    const fallback = (
        <div className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-200'>
            <User/>
        </div>
    );
    if (loading) return <Suspense fallback={fallback}/>;
    if (error) return <Suspense fallback={fallback}/>;
    return (
        <Suspense fallback={fallback}>
            <div className='flex items-center justify-center w-8 h-8 rounded-full bg-gray-200'>
                <Image
                    src={user.picture}
                    alt={user.name}
                    width={32}
                    height={32}
                    className='rounded-full'
                />
            </div>
        </Suspense>
    );
}
export default UserIcon;