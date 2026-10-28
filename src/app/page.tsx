import Banner from "@/componantes/Banner";
import ProductsPage from "./products/page";
import TodayBazarPage from "@/componantes/todaybazar/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <TodayBazarPage />
      <ProductsPage />
    </div>
  );
}
