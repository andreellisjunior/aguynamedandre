import Link from "next/link";
import React from "react";

const ButtonGroup = ({
  links,
}: {
  links: { href: string; title: string }[];
}) => (
  <div className="flex flex-wrap">
    {links.map(({ title, href }, i) => (
      <Link
        href={href}
        key={i}
        target="_blank"
        className="button text-center lowercase btn-group m-1"
      >
        {title}
      </Link>
    ))}
  </div>
);

export default ButtonGroup;
