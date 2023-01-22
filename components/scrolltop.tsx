import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const ScrollTop = () => {
  const [showButton, setShowButton] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    router.push('/');
    console.log('clicked');
  };

  if (!showButton) {
    return null;
  }

  return (
    <div className="fixed bottom-20 right-20 p-4 rounded-full text-center text-white bg-indigo-500 hover:bg-indigo-600" 
         onClick={handleClick}
    >
      <HiOutlineChevronDoubleUp/>
    </div>
  );
};

export default ScrollTop;