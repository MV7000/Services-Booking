import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex items-center justify-center flex-col gap-7 text-center my-[30vh]'>
      <h2 className='text-3xl font-bold underline'>
        UPS...Something went wrong...
      </h2>
      <p className='text-2xl italic font-black text-red-700'>
        Could not find requested resource!
      </p>
      <Link
        href='/'
        className='text-2xl italic font-black text-cyan-700 border-2 w-[calc(var(--index)*15)] mx-auto rounded-lg border-cyan p-3 '
      >
        <p> Return Home ♻ </p>
      </Link>
    </div>
  );
}
