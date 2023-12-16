import Button from '@/app/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function NoCourses() {
    return (
        <div className='flex flex-col items-center justify-center py-2'>
            <Image
                src='/3d-rendering-cartoon-like-girl-reading 1.svg'
                alt='No Courses'
                width={500}
                height={500}
            />
            <p className='text-xl'>You have no courses yet.</p>
            <Link href='/course'><Button>Add courses</Button></Link>
        </div>
    );
}