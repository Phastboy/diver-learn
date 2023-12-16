import Nav from '@/app/ui/nav';

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};
