import Image from 'next/image';
import Button from '@/app/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='max-h-screen'>
        <Image
          src="/landing.svg"
          alt={'Landing'}
          width={500}
          height={500}
        />
        <div className="flex flex-col items-center justify-center py-2">
          <Link href='/auth/sign-up'><Button>Get started</Button></Link>
        </div>
      </div>
    </>
  )
}
