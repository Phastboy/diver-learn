import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image
        src="@/public/landing.svg"
        alt={'Landing'}
        width={500}
        height={500}
      />
    </>
  )
}
