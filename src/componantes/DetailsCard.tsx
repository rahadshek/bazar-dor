import type { IProducts } from "@/types/types";
import Image from "next/image";

const DetailsCard = ({ product }: { product: IProducts }) => {
  const unitBangla: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "টি",
  };

  const formatPrice = (price: number) =>
    price.toLocaleString("bn-BD", {
      maximumFractionDigits: 2,
    });

  const markets = product.markets ?? [];
  const hasMarkets = markets.length > 0;

  const lowestMarket = hasMarkets
    ? markets.reduce((min, market) => (market.min < min.min ? market : min))
    : null;

  const highestMarket = hasMarkets
    ? markets.reduce((max, market) => (market.max > max.max ? market : max))
    : null;

  // This is an estimated average based on market price midpoints.
  const averagePrice = hasMarkets
    ? markets.reduce(
        (total, market) => total + (market.min + market.max) / 2,
        0,
      ) / markets.length
    : null;

  const changeStyle =
    product.change.dir === "up"
      ? {
          hover: "hover:border-red-200 hover:shadow-red-900/10",
          hoverText: "group-hover:text-red-700",
          text: "text-red-700",
          background: "bg-red-50",
          badge: "bg-red-50 text-red-600",
          arrow: "▲",
        }
      : product.change.dir === "down"
        ? {
            hover: "hover:border-green-200 hover:shadow-green-900/10",
            hoverText: "group-hover:text-green-700",
            text: "text-green-700",
            background: "bg-green-50",
            badge: "bg-green-100 text-green-700",
            arrow: "▼",
          }
        : {
            hover: "hover:border-gray-200 hover:shadow-gray-900/10",
            hoverText: "group-hover:text-gray-800",
            text: "text-gray-800",
            background: "bg-gray-50",
            badge: "bg-gray-200 text-gray-600",
            arrow: "◆",
          };

  const summaryCards = [
    {
      title: "সর্বনিম্ন দাম",
      price: lowestMarket?.min ?? null,
      description: lowestMarket?.market ?? "তথ্য পাওয়া যায়নি",
      icon: "↓",
      color: "border-green-200 bg-green-50 text-green-700",
    },
    {
      title: "সর্বাধিক দাম",
      price: highestMarket?.max ?? null,
      description: highestMarket?.market ?? "তথ্য পাওয়া যায়নি",
      icon: "↑",
      color: "border-red-200 bg-red-50 text-red-700",
    },
    {
      title: "আনুমানিক গড় দাম",
      price: averagePrice,
      description: `প্রতি ${unitBangla[product.unit] || product.unit}`,
      icon: "≈",
      color: "border-blue-200 bg-blue-50 text-blue-700",
    },
  ];

  const unit = unitBangla[product.unit] || product.unit;

  const priceDifference =
    product.change.dir === "up"
      ? product.today - product.yesterday
      : product.change.dir === "down"
        ? product.yesterday - product.today
        : 0;

  const changeDescription =
    product.change.dir === "up"
      ? `গতকালের তুলনায় দাম বেড়েছে ${formatPrice(Math.abs(priceDifference))} টাকা`
      : product.change.dir === "down"
        ? `গতকালের তুলনায় দাম কমেছে ${formatPrice(Math.abs(priceDifference))} টাকা`
        : "গতকালের তুলনায় দাম অপরিবর্তিত";

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 px-3 py-5 sm:space-y-8 sm:px-5 sm:py-8 lg:px-6">
      {/* Product Details */}
      <section
        className={`group flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6 lg:flex-row lg:items-center lg:justify-between ${changeStyle.hover}`}
      >
        <div className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-4">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl text-2xl ring-1 ring-gray-200 sm:h-16 sm:w-16 ${changeStyle.background}`}
          >
            {product.image?.startsWith("http") ? (
              <Image
                src={product.image}
                alt={product.nameBn}
                width={64}
                height={64}
                unoptimized
                className="h-full w-full object-cover"
              />
            ) : (
              product.image
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h2
              className={`break-words text-lg font-bold leading-7 text-gray-900 transition-colors sm:text-xl ${changeStyle.hoverText}`}
            >
              {product.nameBn}
            </h2>

            <span className="mt-1 inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 sm:text-sm">
              {unit}
            </span>

            <p className={`mt-2 text-sm font-medium ${changeStyle.text}`}>
              {changeDescription}
            </p>
          </div>
        </div>

        {/* Today's Price */}
        <div className="w-full rounded-xl bg-gray-50 p-4 transition-colors group-hover:bg-gray-100/80 sm:p-5 lg:w-auto lg:min-w-52">
          <p className="text-sm font-medium text-gray-500">আজকের দাম</p>

          <p className="mt-2 break-words text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {formatPrice(product.today)}
          </p>

          <p className="mt-1 text-sm font-medium text-gray-500">
            টাকা / {unit}
          </p>

          <span
            className={`mt-3 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold sm:text-sm ${changeStyle.badge}`}
          >
            {changeStyle.arrow} {formatPrice(Math.abs(product.change.pct))}%
          </span>
        </div>
      </section>

      {/* Price Summary */}
      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-4 py-4 sm:px-6">
          <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
            দামের সারসংক্ষেপ
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            বিভিন্ন বাজারের দামের সংক্ষিপ্ত বিবরণ
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-5 lg:grid-cols-3">
          {summaryCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-gray-100 bg-gray-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md sm:p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-gray-500">
                  {card.title}
                </p>

                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-xl font-bold ${card.color}`}
                >
                  {card.icon}
                </span>
              </div>

              <p className="mt-3 break-words text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {card.price !== null ? formatPrice(card.price) : "—"}

                {card.price !== null && (
                  <span className="ml-1 text-sm font-semibold text-gray-500">
                    টাকা
                  </span>
                )}
              </p>

              <p className="mt-2 break-words text-sm text-gray-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Market-wise Prices */}
      <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 px-4 py-4 sm:px-6">
          <div>
            <h2 className="text-lg font-bold text-gray-900 sm:text-xl">
              বাজারভিত্তিক আজকের দাম
            </h2>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              বিভিন্ন বাজারের সর্বনিম্ন, সর্বাধিক ও আনুমানিক গড় দাম
            </p>
          </div>

          <span className="shrink-0 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 sm:text-sm">
            {markets.length.toLocaleString("bn-BD")} টি বাজার
          </span>
        </div>

        {hasMarkets ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-xs font-semibold text-gray-500">
                    <th scope="col" className="px-4 py-4 sm:px-6">
                      বাজার
                    </th>
                    <th scope="col" className="px-4 py-4 sm:px-6">
                      বিভাগ
                    </th>
                    <th scope="col" className="px-4 py-4 sm:px-6">
                      সর্বনিম্ন দাম
                    </th>
                    <th scope="col" className="px-4 py-4 sm:px-6">
                      সর্বাধিক দাম
                    </th>
                    <th scope="col" className="px-4 py-4 sm:px-6">
                      আনুমানিক গড়
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {markets.map((market, index) => {
                    const average = (market.min + market.max) / 2;

                    return (
                      <tr
                        key={`${market.market}-${market.division}-${index}`}
                        className="transition-colors duration-200 hover:bg-green-50/60"
                      >
                        <td className="whitespace-nowrap px-4 py-4 font-semibold text-gray-900 sm:px-6">
                          {market.market}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 text-gray-600 sm:px-6">
                          {market.division}
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                          <span className="rounded-lg bg-green-50 px-2.5 py-1.5 font-semibold text-green-700">
                            {formatPrice(market.min)} টাকা
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 sm:px-6">
                          <span className="rounded-lg bg-red-50 px-2.5 py-1.5 font-semibold text-red-600">
                            {formatPrice(market.max)} টাকা
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-4 py-4 font-bold text-gray-900 sm:px-6">
                          {formatPrice(average)} টাকা
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="border-t border-gray-100 bg-gray-50/70 px-4 py-3 sm:px-6">
              <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
                * আনুমানিক গড় দাম প্রতিটি বাজারের সর্বনিম্ন ও সর্বাধিক দামের
                মধ্যবিন্দু থেকে হিসাব করা হয়েছে। মোবাইলে সম্পূর্ণ তালিকা দেখতে
                টেবিলটি পাশে স্ক্রল করুন।
              </p>
            </div>
          </>
        ) : (
          <div className="px-4 py-12 text-center sm:px-6">
            <p className="font-semibold text-gray-700">
              কোনো বাজারের তথ্য পাওয়া যায়নি
            </p>
            <p className="mt-1 text-sm text-gray-500">
              এই পণ্যের জন্য বর্তমানে বাজারের তথ্য নেই।
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default DetailsCard;
