export const Service = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-0 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              WHAT WE DO?
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
            <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                      width="52"
                      height="24"
                    />
                  </svg>

              <span className="relative text-white">Our Services</span>
            </span>{' '}
          </h2>
          <p className="text-base text-gray-200 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className=" w-full h-56 md:h-64 xl:h-80"
              src="/moneybag.png"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-4 py-2 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Personal Money Management
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className=" w-full h-56 md:h-64 xl:h-80"
              src="/document.png"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-4 py-2 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Financial Knowldege
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className=" w-full h-56 md:h-64 xl:h-80"
              src="/trend.png"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-4 py-2 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Stocks Overview
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className=" w-full h-56 md:h-64 xl:h-80"
              src="/newsreport.png"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-4 py-2 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Financial News
              </p>
            </div>
          </div>
        </a>
      </div>
      </div>
    );
  };