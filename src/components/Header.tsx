import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { MouseEvent } from 'react';
import { signIn, signOut } from 'next-auth/react';

const Header = ({ season, year }: { season: string; year: number }) => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    console.log(session, status);
  }

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const heading = season.toUpperCase() + ' ' + year.toString().toUpperCase();

  const mouseEventHandler = (event: MouseEvent<HTMLHeadElement>) => {
    let iteration = 0;
    
    const interval = setInterval(() => {
      const target = event.target as HTMLElement;
      target.innerText = target.innerText
        .split('')
        .map((letter, index) => {
          if (index === 6) {
            return " ";
          }
          if (index < iteration) {
            return heading[index];
          }
          if (index >= 7) {
            return Math.floor(Math.random() * 10)
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join('');
        console.log(target.innerText);
      if (iteration >= heading.length) clearInterval(interval);

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <header className="flex justify-between items-center h-16 p-3 bg-zinc-800">
      <h1
        className="capitalize cursor-pointer text-xl mx-auto hover:bg-white hover:text-black p-1 rounded-lg"
        onMouseOver={mouseEventHandler}
      >
        {heading}
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
