import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { MouseEvent } from 'react';
import { signIn, signOut } from 'next-auth/react';

const Header = ({ season, year }: { season: string; year: number }) => {
  const { data: session, status } = useSession();

  const heading = (season + ' ' + year).toUpperCase();
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const mouseEventHandler =
    (text: string) => (event: MouseEvent<HTMLHeadingElement>) => {
      let iteration = 0;

      const interval = setInterval(() => {
        const target = event.target as HTMLElement;
        target.innerText = target.innerText
          .split('')
          .map((letter, index) => {
            if (index === text.indexOf(' ')) {
              return ' ';
            }
            if (index < iteration) {
              return text[index];
            }
            if (/\d/.test(text) && index > text.indexOf(' ')) {
              return Math.floor(Math.random() * 10);
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join('');
        if (iteration >= text.length) clearInterval(interval);

        iteration += 1 / 3;
      }, 30);
    };

  return (
    <header className="bg-zinc-800 flex justify-between items-center h-16 p-3 text-xl fixed top-0 left-0 right-0 z-10">
      <h1
        className="capitalize cursor-pointer hover:bg-white hover:text-black px-2 py-1 rounded-lg"
        onMouseOver={mouseEventHandler(heading)}
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
          className="bg-zinc-900 px-3 py-1 rounded-lg"
          onClick={() => signIn('discord')}
        >
          Sign In
        </button>
      )}
    </header>
  );
};

export default Header;
