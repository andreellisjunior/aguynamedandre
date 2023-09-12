import Link from "next/link"


const Button = ({href, linkText}: {href: string, linkText: string}) => {
  return (
    <Link href={href} className="button text-center uppercase">
            {linkText}
          </Link>
  )
}

export default Button