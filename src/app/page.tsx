import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/96c40bae-86a4-411a-8220-0812e40a373c-na624w.webp",
  "https://utfs.io/f/bfee36ff-50f1-4441-b897-88160fcce5eb-zia6sm.webp",
  "https://utfs.io/f/4271b895-b48b-4a74-9e06-252466b22cb7-f7qkp4.webp",
  "https://utfs.io/f/dc42b682-c1b6-4941-a65e-c899e19f7358-6o35kv.jpg"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
      }</div>
      I am a work in progress
    </main>
  );
}
