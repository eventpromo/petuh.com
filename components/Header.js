import Link from 'next/link';
import Image from 'next/image';
import logo from '/images/logo.jpeg'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="block mx-auto mb-4">
        <Image src={logo} alt="logo" width={300} height={300} />
      </div>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
