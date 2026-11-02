import type { IProducts } from "@/types/types";
import ProductsClient from "./ProductsClient";
import { notFound } from "next/navigation";

interface ICategory {
  icon: string;
  nameBn: string;
  id: number;
}

interface ICategoryContentProps {
  params: Promise<{
    slug: string;
  }>;
}

const CategoryContent = async ({ params }: ICategoryContentProps) => {
  const { slug } = await params;

  const [res, res2] = await Promise.all([
    fetch(
      `https://openapi.programming-hero.com/api/bazardor/products?category=${encodeURIComponent(slug)}`,
      { cache: "force-cache" },
    ),
    fetch(
      `https://openapi.programming-hero.com/api/bazardor/categories/${encodeURIComponent(slug)}`,
      { cache: "force-cache" },
    ),
  ]);

  if (!res.ok || !res2.ok) {
    notFound();
  }

  const products: IProducts[] = await res.json();
  const category: ICategory = await res2.json();

  return <ProductsClient products={products} category={category} />;
};

export default CategoryContent;
