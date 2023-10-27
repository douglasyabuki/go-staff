import Navbar from '../components/navbar/Navbar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-grey-5">
      <Navbar />
      {children}
    </div>
  );
}
