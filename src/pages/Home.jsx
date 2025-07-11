import PageLayout from "../components/Layout/PageLayout";
import Features from "../components/Sections/Features/Features";
import Reviews from "../components/Sections/Reviews/Reviews";
import DecorLines from "../components/UI/DecorLines";
import RaiseStatus from "../components/Sections/RaiseStatus/RaiseStatus";
import AboutUs from "../components/Sections/AboutUs/AboutUs";
import RociAnniversary from "../components/Sections/RociAnniversary/RociAnniversary";
import Ambassador from "../components/Sections/Ambassador/Ambassador";
import HomeNews from "../components/Sections/HomeNews/HomeNews";
import DownloadApp from "../components/Sections/DownloadApp/DownloadApp";

export default function Home() {
  return (
    <PageLayout>
      <Features />
      <DecorLines />
      <Reviews />
      <RaiseStatus />
      <AboutUs />
      <DecorLines />
      <RociAnniversary />
      <Ambassador />
      <HomeNews />
      <DownloadApp />
    </PageLayout>
  );
}
