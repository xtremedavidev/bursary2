import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex w-screen bg-gray-100 min-h-screen">


    <Sidebar className="" />

    <div className='flex flex-col w-full'>
        
      <main className="">
        {children}
      </main>
    
    <Footer />

    </div>
   
    </div>
  );
}
