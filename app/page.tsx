import Hero from "@/components/Hero";
import Invitation from "@/components/Invitation";
import Moodboard from "@/components/Moodboard";
import Countdown from "@/components/Countdown";
import Details from "@/components/Details";
import Filmstrip from "@/components/Filmstrip";
import Access from "@/components/Access";
import Rsvp from "@/components/Rsvp";
import Gift from "@/components/Gift";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Invitation />
      <Moodboard />
      <Countdown />
      <Details />
      <Filmstrip />
      <Access />
      <Rsvp />
      <Gift />
      <Footer />
    </main>
  );
}