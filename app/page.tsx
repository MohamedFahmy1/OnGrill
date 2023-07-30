import ChooseUs from "@/components/home/ChooseUs";
import Landing from "../components/home/Landing";
import SpecialDish from "@/components/home/SpecialDish";
import RecentUpdates from "@/components/home/RecentUpdates";

export default function Home() {
  return (
    <main>
      <Landing />
      <ChooseUs />
      <SpecialDish />
      <RecentUpdates />
    </main>
  );
}
