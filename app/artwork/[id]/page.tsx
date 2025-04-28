import { artworks } from '@/data/artworks';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return artworks.map((artwork) => ({
    id: artwork.id,
  }));
}

export default async function ArtworkDetailPage({ params }: Props) {
  // Await params to resolve the promise
  const { id } = await params;

  const artwork = artworks.find((a) => a.id === id);

  if (!artwork) return notFound();

  return (
    <div>
      <Link href={`/`}>
        <Image
          src={artwork.image}
          alt={artwork.title}
          width={800}
          height={600}
          className="rounded-md"
        />
        <h1 className="text-4xl font-bold mt-8 text-black">{artwork.title}</h1>
        <p className="text-2xl text-black">{artwork.artist}</p>
        <p className="mt-4 text-black">{artwork.description}</p>
      </Link>
    </div>
  );
}
