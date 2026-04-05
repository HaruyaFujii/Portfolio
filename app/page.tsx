import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Profile from "@/components/sections/Profile";
import Activities from "@/components/sections/Activities";
import Works from "@/components/sections/Works";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Profile />
        <Activities />
        <Works />
      </main>
      <Footer />
    </div>
  );
}
