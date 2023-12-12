import Image from 'next/image'
import Button from '@/app/ui/button'
export default function Home() {
  return (
    <>
      <Image
        src="/landing.svg"
        alt={'Landing'}
        width={500}
        height={500}
      />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Button>Get started</Button>
      </div>
    </>
  )
}
