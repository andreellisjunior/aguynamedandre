import Image from 'next/image';
import Arrow from '@/components/Arrow';
import Link from 'next/link';
import Button from '../Button/Button';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Dynamically load the Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true; // Ensure the script loads asynchronously
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='contact-section  border-[0.5px] border-gray-400 h-full rounded-2xl px-4 py-4 bg-white bg-opacity-5 drop-shadow-2xl'>
      <div className='title'>
        <h2 className='font-semibold mb-4'>
          <Link
            href={'mailto:andreellisjunior@gmail.com'}
            className='flex gap-3'
          >
            CONTACT <Arrow />
          </Link>
        </h2>
      </div>
      <p>Have a comment or question? Reach out! I’d love to here from you!</p>
      <Button
        href='mailto:andreellisjunior@gmail.com'
        linkText='Get In Touch'
      />
      <br />
      <p>Need a website or an app?</p>
      <div data-tf-live='01J1BRAWDY8GG1978NFEJNGEZK'></div>
    </div>
  );
};

export default Contact;
