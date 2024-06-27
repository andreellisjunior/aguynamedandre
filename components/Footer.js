import Link from 'next/link'


let d = new Date()
let year = d.getFullYear()

function Footer() {
  return <div className='container footer'>
    <footer className="flex mobile-column">
      <div>
        <Link href="mailto:andreellisjunior@gmail.com">email: andreellisjunior@gmail.com</Link>
        <Link href="https://docs.google.com/document/d/109svT0Al1RnpBudBHZPlM0CD2kQdbtbyrVsHEW16q4U/edit?usp=sharing" download>
          <span style={{ display: `flex`, alignItems: `center`, gap: `0.25rem`, color: `#ccc`, fontWeight: `300` }}>
            Download Resumé
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="" style={{ width: `1rem`, height: `auto` }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </span>
        </Link>
      </div>
      <div className='flex center mobile-column'>
        <p>Copyright &copy; {year} All Rights Reserved. </p>
        <Link href="#header" passHref><img src="/assets/scroll-to-top.svg" alt="Scroll to Top" style={{ padding: "0 5px" }} /></Link>
      </div>
    </footer>
  </div>;

}

export default Footer;
