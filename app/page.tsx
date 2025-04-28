import { artworks } from '@/data/artworks';
import Image from 'next/image';
import Link from 'next/link';


export default function HomePage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
      {artworks.map((artwork) => (
        <Link
          key={artwork.id}
          href={`/artwork/${artwork.id}`}
          className="block shadow-lg hover:shadow-2xl transition-all rounded-xl overflow-hidden p-4"
        >
          <Image
            src={artwork.image}
            alt={artwork.title}
            width={500}
            height={500}
            className="rounded-lg object-cover w-full h-80"
          />
          <div className="mt-4">
            <h2 className="text-2xl font-bold text-black text-center">{artwork.title}</h2>
            <p className="text-gray-600 text-center">{artwork.artist}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}

