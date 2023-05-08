import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US`
  );
  const data = await res.json();
  console.log(data);
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <main className="relative">
      <div className="flex gap-4 overflow-x-scroll overflow-y-hidden scrollbar-hide p-[20px]">
        {data.results.map((movie) => (
          // <Link href={`movie-details/${movie.id}`}>
          <Image
            src={imagePath + movie.poster_path}
            width={500}
            height={500}
            alt={movie.title}
            priority
            className="w-auto max-h-40 object-contain border-solid border-2 border-white hover:scale-105 hover:ease-in delay-75 duration-200"
          />
          // </Link>
        ))}
      </div>
    </main>
  );
}
