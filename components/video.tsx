import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export default function VideoSection() {
  return (
    <section className="relative bg-rich-black flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/OuaJBKaCCyk"
          thumbnailSrc="https://img.youtube.com/vi/OuaJBKaCCyk/maxresdefault.jpg"
          thumbnailAlt="Focus Fitness Video"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 md:h-96 bg-gradient-to-t from-rich-black via-rich-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
