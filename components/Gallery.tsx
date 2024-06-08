import Image from "next/image";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const videos = [
  {
    name: "Domba",
    size: "Super Jumbo",
    imgUrl: "/videos/6000-2.jpeg",
  },
  {
    name: "Domba",
    size: "Super Jumbo",
    imgUrl: "/videos/6000-1.jpeg",
  },
  {
    name: "Domba",
    size: "Sedeng Full Putih",
    imgUrl: "/videos/3500.jpeg",
  },
  {
    name: "Domba",
    size: "Sedeng Hitam Putih",
    imgUrl: "/videos/3000.jpeg",
  },
  {
    name: "Domba",
    size: "Lumayan Besar",
    imgUrl: "/videos/4300.jpeg",
  },
];

export default function Gallery() {
  return (
    <div className="bg-cream" id="gallery">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Gallery
            </h2>
            <p className="text-xl text-gray-500">
              Berikut gambaran estimasi ukuran hewan qurban yang kami jual.
            </p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {videos.map((video: any) => (
              <li key={video.size}>
                <div className="space-y-4">
                  <div className="aspect-w-3 aspect-h-2">
                    {video.videoUrl ? (
                      <video
                        className="rounded-lg object-cover shadow-lg"
                        src={video.videoUrl}
                        controls={true}
                        preload="metadata"
                      />
                    ) : (
                      <Image
                        className="rounded-lg object-cover shadow-lg"
                        src={video.imgUrl}
                        width={800}
                        height={500}
                        alt={video.name}
                      />
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{video.name}</h3>
                      <p className="text-choco">{video.size}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
