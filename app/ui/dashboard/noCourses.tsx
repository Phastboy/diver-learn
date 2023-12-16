import Button from '@/app/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';

export default function NoCourses() {
    return (
        <div className='flex flex-col items-center justify-center py-2'>
            <Suspense fallback={<div>Loading...</div>}>
                <Image
                    src='/3d-rendering-cartoon-like-girl-reading 1.svg'
                    alt='No Courses'
                    width={500}
                    height={500}
                />
            </Suspense>
            <p className='text-xl'>You have no courses yet.</p>
            <Link href='/course'><Button>Add courses</Button></Link>
        </div>
    );
}
