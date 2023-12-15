'use client';
import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import Image from 'next/image';
import { Suspense } from 'react';
import { fetchUser } from '../lib/userData';

const UserIcon = () => {
    const [user, setUser] = useState({ name: '', picture: ''});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetchUser().then((user) => {
            setUser(user);
            setLoading(false);
        }).catch((e) => {
            setError(true);
            setLoading(false);
        });
    }, []);

    const fallback = (
        <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
            <User size={16} />
        </div>
    );

    if (loading) {
        return fallback;
    }

    if (error) {
        return fallback;
    }

    return (
        <div className="relative">
            <Suspense fallback={fallback}>
                <Image
                    src={user.picture}
                    alt={user.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                />
            </Suspense>
        </div>
    );
}
    
export default UserIcon;