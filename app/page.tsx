import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Moodboard from "@/components/Moodboard";
import Countdown from "@/components/Countdown";
import Details from "@/components/Details";
import Filmstrip from "@/components/Filmstrip";
import Access from "@/components/Access";
import Rsvp from "@/components/Rsvp";
import Gift from "@/components/Gift";
import Wishes from "@/components/Wishes";
import Footer from "@/components/Footer";
import TwoJubilees from "@/components/TwoJubilees";

export default function Home() {
  return (
    <main>
      <Hero />
      <Invitation />
      <TwoJubilees />
      <Moodboard />
      <Countdown />
      <Details />
      <Filmstrip />
      <Access />
      <Rsvp />
      <Gift />
      <Wishes />
      <Footer />
    </main>
  );
}