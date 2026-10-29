import DetailsCard from "@/componantes/DetailsCard";
import { IProducts } from "@/types/types";
import { notFound } from "next/navigation";


interface IPramasProps {
  params: Promise<{ slug: string }>;
}

const getProducts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { cache: "force-cache" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

const page = async ({ params }: IPramasProps) => {
  const { slug } = await params;
  const productData = await getProducts(slug);
  //   const products = productData;
  const product = productData.find((pro: IProducts) => pro.id === Number(slug));

  if (!product){
    notFound();
  }
  return (
    <div>
      <div>{productData[0]?.categoryNameBn}</div>
      <div>
        <DetailsCard product={product} />
      </div>
    </div>
  );
};

export default page;
