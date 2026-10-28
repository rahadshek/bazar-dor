async function getBanglaDate() {
  "use cache";

  return new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });
}

const BanglaDate = async () => {
  const banglaDate = await getBanglaDate();
  return (
    <span >{banglaDate}</span>
  );
};

export default BanglaDate;
