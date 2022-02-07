import Link from 'next/link'


let d = new Date()
let year = d.getFullYear()

function Footer() {
  return <div className='container footer'>
    <footer className="flex mobile-column">
        <Link href="mailto:andreellisjunior@gmail.com">email: andreellisjunior@gmail.com</Link>
        <div className='flex center mobile-column'>
            <p>Copyright &copy; {year} All Rights Reserved. </p>
            <Link href="#header"><img src="/assets/scroll-to-top.svg" alt="Scroll to Top" style={{padding: "0 5px"}} /></Link>
        </div>
    </footer>


      <script
            src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
            integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ=="
            crossOrigin="anonymous"
            ></script>
  </div>;
  
}

export default Footer;
