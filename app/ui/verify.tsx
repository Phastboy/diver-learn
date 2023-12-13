import Link from 'next/link';
import Button  from '@/app/ui/button';

export default function Verify() {
  return (
    <div>
      <h1>Verify your email</h1>
      <p>A verification code has been sent to your email</p>
      <p>Input the code to verify your email address</p>
      <form>
        <input placeholder="Verification code" />
        <Link href='/dashboard'><Button>Verify</Button></Link>
        </form>
    </div>
  );
}
