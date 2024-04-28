import Image from 'next/image';
import Arrow from '@/components/Arrow';
import Link from 'next/link';
import Button from '../Button/Button';

const Contact = () => {
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
      <p>
        Have a comment, question, request? Reach out! I’d love you here from
        you!
      </p>
      <Button
        href='mailto:andreellisjunior@gmail.com'
        linkText='Get In Touch'
      />
    </div>
  );
};

export default Contact;
