const Payment = () => {
  return (
    <>
      <section class="flex flex-col justify-center pb-12">
        <div class="h-full">
          <div class="max-w-[360px] mx-auto">
            <div class="bg-white shadow-lg rounded-lg mt-9">
              <header class="text-center px-5 pb-5">
                <h3 class="pt-4 text-xl font-bold text-gray-900 mb-1">
                  Invoice from MyCompute.
                </h3>
                <div class="text-sm font-medium text-gray-500">
                  Invoice #00224
                </div>
              </header>
              <div class="bg-gray-100 text-center px-5 py-6">
                <div class="text-sm mb-6">
                  <strong class="font-semibold">$2.700</strong> due{' '}
                  {new Date().toLocaleDateString()}
                </div>
                <form class="space-y-3">
                  <div class="flex shadow-sm rounded">
                    <div class="flex-grow">
                      <input
                        name="card-nr"
                        class="text-sm text-gray-800 bg-white rounded-l leading-5 py-2 px-3 placeholder-gray-400 w-full border border-transparent focus:border-indigo-300 focus:ring-0"
                        type="text"
                        placeholder="Card Number"
                        aria-label="Card Number"
                      />
                    </div>
                    <div class="flex-none w-[4.8rem]">
                      <input
                        name="card-expiry"
                        class="text-sm text-gray-800 bg-white leading-5 py-2 px-3 placeholder-gray-400 w-full border border-transparent focus:border-indigo-300 focus:ring-0"
                        type="text"
                        placeholder="MM/YY"
                        aria-label="Expiration"
                      />
                    </div>
                    <div class="flex-none w-[3.5rem]">
                      <input
                        name="card-cvc"
                        class="text-sm text-gray-800 bg-white rounded-r leading-5 py-2 px-3 placeholder-gray-400 w-full border border-transparent focus:border-indigo-300 focus:ring-0"
                        type="text"
                        placeholder="CVC"
                        aria-label="CVC"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2"
                  >
                    Pay Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Payment;
