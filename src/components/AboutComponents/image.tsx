import { Heart } from "lucide-react";

export default function Image() {
  // const img: string = 'https://lablab.ai/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FK11gkZF3xaVyYzFESMdWIQ%2F6c56e928-3848-4367-5d6b-3006afe68300%2Ffull&w=3840&q=75'

  return (
    <div className="absolute top-16 h-48 w-48 rounded-full bg-[url('https://lablab.ai/_next/image?url=https%3A%2F%2Fimagedelivery.net%2FK11gkZF3xaVyYzFESMdWIQ%2F6c56e928-3848-4367-5d6b-3006afe68300%2Ffull&w=3840&q=75')] bg-cover shadow-2xl duration-200 group-hover:top-4">
      <div className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-red-500 p-2 text-white">
        <Heart />
      </div>
    </div>
  );
}
