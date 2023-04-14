import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { signIn, signOut } from 'next-auth/react';

const Header = ({ season, year }: { season: string; year: number }) => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    console.log(session, status);
  }

  return (
    <header className="flex justify-between items-center h-16 p-3 bg-zinc-800">
      <h1 className="capitalize hover:underline cursor-pointer text-xl mx-auto">
        {season + ' ' + year}
      </h1>
      {status === 'authenticated' && (
        <Image
          alt={session! && session!.user!.name!}
          src={session! && session!.user!.image!}
          width={40}
          height={10}
          className="rounded-3xl"
          onClick={() => signOut()}
        ></Image>
      )}
      {status === 'unauthenticated' && (
        <button
          className="bg-zinc-900 p-2 rounded-lg text-md"
          onClick={() => signIn('discord')}
        >
          Sign In
        </button>
      )}
    </header>
  );
};

export default Header;
