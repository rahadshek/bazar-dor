import { IProduct } from "@/types/types";
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Markquue = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
    { cache: "force-cache" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const heardline: IProduct[] = await res.json();
  const unitBangla: Record<string, string> = {
    kg: "প্রতি কেজি",
    litre: "প্রতি লিটার",
    dozen: "প্রতি ডজন",
    piece: "টি",
  };

  return (
    <div className="border-b-2 border-b-gray-200 my-2 p-3">
      <div className="container mx-auto overflow-hidden ">
        <MarqueeText direction="right" duration={12}>
          <div className="flex items-center gap-8  font-medium whitespace-nowrap ">
            {heardline.slice(0, 10).map((line) => (
              <Link
                href={`/products/${line.slug}`}
                key={line.id}
                className="transition-opacity hover:opacity-75  "
              >
                <span className="flex items-center gap-1">
                  <span>{line.categoryIcon}</span>

                  <span>{line.nameBn}</span>

                  <span>
                    {line.today.toLocaleString("bn-BD")} টাকা/
                    {unitBangla[line.unit] || line.unit}
                  </span>

                  <span
                    className={
                      line.change.dir === "up"
                        ? "text-red-500"
                        : line.change.dir === "down"
                          ? "text-green-500"
                          : "text-gray-500"
                    }
                  >
                    {line.change.dir === "up"
                      ? "▲"
                      : line.change.dir === "down"
                        ? "▼"
                        : "◆"}{" "}
                    {line.change.pct.toLocaleString("bn-BD")}%
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </MarqueeText>
      </div>
    </div>
  );
};

export default Markquue;
