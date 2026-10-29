import { Suspense } from "react";
import ProductsCard from "@/app/products/productsCard";
import type { IProducts } from "@/types/types";

const CategoryContent = async ({ params }) => {
  const { slug } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`,
  );
  const data = await res.json();

  console.log(data);
  return (
    <div>
      <h2>{data.categoryNameBn}</h2>
    </div>
  );
};

export default CategoryContent;
