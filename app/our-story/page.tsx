import Banner from "@/components/sections/our-story/banner";
import MoralCompass from "@/components/sections/our-story/moral-compass";
import StoryVideo from "@/components/sections/our-story/story-video";
// import Philosophy from "@/components/sections/our-story/philosophy";
import Presence from "@/components/sections/our-story/presence";
import Timeline from "@/components/sections/our-story/timeline";
import Directors from "@/components/sections/our-story/directors";

export default function OurStoryPage() {
  return (
    <main className="min-h-screen">
      <Banner />
      <MoralCompass />
      <StoryVideo />
      {/* <Philosophy /> */}
      <Presence />
      <Timeline />
      <Directors />
    </main>
  );
}
