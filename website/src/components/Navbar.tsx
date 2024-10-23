import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="p-5">
      <ul className="flex justify-end space-x-4">
        <li><Link href="/" className="hover:text-purple-300 transition-colors">Home</Link></li>
        <li><Link href="/about" className="hover:text-purple-300 transition-colors">About</Link></li>
        <li><Link href="/projects" className="hover:text-purple-300 transition-colors">Projects</Link></li>
        {/* <li><Link href="/eagle" className="hover:text-purple-300 transition-colors">Eagle</Link></li>
        <li><Link href="/travel" className="hover:text-purple-300 transition-colors">Travel</Link></li> */}
      </ul>
    </nav>
  )
}