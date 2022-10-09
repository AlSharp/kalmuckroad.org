import Link from 'next/link';
import { forwardRef } from 'react';

const CustomLink = forwardRef(({ className, text, onClick, href }, ref) => {
  return (
    <a className={className} href={href} onClick={onClick} ref={ref}>
      { text }
    </a>
  )
})

export default function LinkWithCallback({ className, href, text, onClick }) {
  return (
    <Link href={href} passHref>
      <CustomLink className={className} text={text} onClick={onClick} />
    </Link>
  )
}