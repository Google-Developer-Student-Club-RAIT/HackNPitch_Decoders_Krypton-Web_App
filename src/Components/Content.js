export const Content = () => {
    return (
    <div className="img-comp">
      <div className="relative flex flex-col-reverse px-10 py-16 lg:py-0 lg:flex-col bg-black">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
         
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none md:text-center">
              Meet The New Standard For 
              <br className="hidden md:block" />
              Personal Finance Management
            </h2>
            <p className="mb-5 text-base text-gray-500 md:text-lg md:text-center">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div className="mb-10 text-center md:mb-16 lg:mb-20">
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
         <div className="inset-y-0 top-0 right-20 px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/3 lg:absolute xl:px-0">
         <img  src="/rupee.png" alt=""/>
         </div>
      </div>
    </div>
    );
  };