import bgImg from '../Assets/img/bg-removebg.png'


export const Contact = () => {
    return (
      <div className="overflow-hidden bg-black relative" id = "contact">
        <img src={bgImg} alt="" srcset="" className = "hidden lg:block lg:absolute lg:right-0 lg:top-5 lg:opacity-30 lg:w-1/4 "/>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
              <p className="max-w-xl mb-6 text-base text-gray-200 md:text-4xl">
              GOT ANY QUESTIONS<br/>OR SUGGESTIONS?<br/>
              </p>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-4xl">
              GET IN TOUCH WITH<br/> 
              US AND WE'LL GET <br/>
              BACK TO YOU
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="relative">
                <div className="relative bg-white bg-opacity-10 rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl text-white font-semibold sm:text-center sm:mb-6 sm:text-2xl ">
                    Contact Us 
                  </h3>
                  <form action = "https://script.google.com/macros/s/AKfycbzcR_zU8myUAOx6lXWpjrlrdb-Ns-8tMod1SG_z0QR4wlg49Y7J1biR3AttBGPz_MIz/exec" class="gform pure-form pure-form-stacked" method="POST" data-email="coutkunal@gmail.com">
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium text-white"
                      >
                        Name
                      </label>
                      <input id="name" name="name" placeholder="name" className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-200 border border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline" type="text" required/>
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium text-white"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="xyz@mail.com"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-200 border border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium text-white"
                      >
                        Message
                      </label>
                      <input
                        placeholder=""
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-gray-200 border border-gray-300 rounded shadow-sm appearance-none focus:outline-none focus:shadow-outline"
                        id="name"
                        name="message"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-white text-black hover:bg-yellow-300 rounded-lg "
                      >
                        Send
                      </button>
                    </div>
                    <div className="thankyou_message hidden">
                      <h2 className = "text-white font-bold"><em>Thanks</em> for contacting us!
                        We will get back to you soon!</h2>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };