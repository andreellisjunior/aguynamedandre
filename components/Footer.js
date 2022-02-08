import Image from 'next/image';
import Link from 'next/link'


let d = new Date()
let year = d.getFullYear()

function Footer() {
  return <div className='container footer'>
    <footer className="flex mobile-column">
        <Link href="mailto:andreellisjunior@gmail.com">email: andreellisjunior@gmail.com</Link>
        <div className='flex center mobile-column'>
            <p>Copyright &copy; {year} All Rights Reserved. </p>
            <Link href="#header" passHref><Image src="/assets/scroll-to-top.svg" alt="Scroll to Top" style={{padding: "0 5px"}} /></Link>
        </div>
    </footer>
  </div>;
  
}

export default Footer;
