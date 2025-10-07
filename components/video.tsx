import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";

export default function VideoSection() {
  return (
    <section className="relative bg-rich-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/*<iframe width="560" height="315" src="https://www.youtube.com/embed/Nj4mHphRXIA?si=MXZDljv2U5yy-64W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>*/}
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/Nj4mHphRXIA?si=MXZDljv2U5yy-64W"
          thumbnailSrc="https://img.youtube.com/vi/Nj4mHphRXIA/maxresdefault.jpg"
          thumbnailAlt="Focus Fitness Video"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-96 bg-gradient-to-t from-rich-black via-rich-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
