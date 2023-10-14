import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen">


    <Sidebar />

    <div className='md:ml-64  flex flex-col w-full'>
      
        
      <main className="">
        {children}
      </main>
    
    <Footer />

    </div>
   
    </div>
  );
}
