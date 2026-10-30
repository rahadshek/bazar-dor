async function getBanglaDate() {
  "use cache";

  return new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
}

const BanglaDate = async () => {
  const banglaDate = await getBanglaDate();

  return (
    <span className="whitespace-nowrap text-[8px] sm:text-xs md:text-sm">
      {banglaDate}
    </span>
  );
};

export default BanglaDate;
