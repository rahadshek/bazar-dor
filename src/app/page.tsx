import Banner from "@/app/componantes/Banner";
import ProductsPage from "./products/page";
import TodayBazarPage from "@/app/componantes/todaybazar/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <TodayBazarPage />
      <ProductsPage />
    </div>
  );
}
