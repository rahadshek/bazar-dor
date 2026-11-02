const GlobalsLoading = () => {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-5 px-4">
      {/* Animated Spinner */}
      <div className="relative flex size-20 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-green-100 border-t-green-600" />

        <div className="flex size-12 items-center justify-center rounded-full bg-green-50">
          <span className="loading loading-spinner loading-md text-green-600" />
        </div>
      </div>

      {/* Loading Text */}
      <div className="space-y-2 text-center">
        <h2 className="text-lg font-bold text-gray-800 sm:text-xl">
          একটু অপেক্ষা করুন...
        </h2>

        <p className="text-sm text-gray-500">আপনার প্রয়োজনীয় তথ্য লোড হচ্ছে</p>
      </div>

      {/* Loading Progress Animation */}
      <div className="h-1.5 w-40 overflow-hidden rounded-full bg-green-100">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-green-600" />
      </div>
    </div>
  );
};

export default GlobalsLoading;
