import Link from 'next/link';
import React from 'react';

const ButtonGroup = ({
  links,
}: {
  links: { href: string; title: string }[];
}) => (
  <div className='flex flex-wrap'>
    {links.map(({ title, href }, i) => (
      <Link
        href={href}
        key={i}
        target='_blank'
        className='text-center lowercase btn-group m-1 italic text-sm border-[1px] border-gray-400 rounded-2xl px-4 py-1 bg-white bg-opacity-5 drop-shadow-md hover:bg-opacity-10 transition-all duration-300 ease-in-out'
      >
        {title}
      </Link>
    ))}
  </div>
);

export default ButtonGroup;
