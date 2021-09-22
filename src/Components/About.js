import bgImg from '../Assets/img/bgxl-removebg.png'

export const About = () => {
    return (
      <div className="mb-16 relative" id = "about">
        <img src={bgImg} alt="" className = "hidden lg:block lg:absolute lg:opacity-30 lg:w-3/4 "/>
        <div className="bg-black">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-0 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Who are we?
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
                  <span className="relative text-white">About Us</span>
                </span>{' '}
              </h2>
              <p className="text-base text-gray-200 md:text-lg">
                KRYPTON IS AN ONLINE MONEY MANAGEMENT SYSTEM WITH THE AIM OF MAKING INDIVIDUALS AWARE ABOUT THEIR EXPENDITURE
                AND TO SHOW INVESTMENT OPPURTUNITIES, FINANCIAL NEWS AND STOCK OVERVIEW TO MAKE THEM FINANCIALLY AWARE.
              </p> <br/>
              <p className="text-base text-gray-200 md:text-lg">
                AIMED TOWARDS STUDENTS AND YOUNG INDIVIDUALS, THE MISSION IS TO MAKE FINANCIAL KNOWLEDGE ACCESSIBLE AND A COMMON 
                PLACE FOR FINANCIALLY SOUND INDIVIDUALS.
              </p>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="relative grid mx-auto overflow-hidden  divide-y rounded  sm:divide-x sm:max-w-screen-sm bg-white bg-opacity-10 ">
            <h2 className="flex items-center justify-center md:text-lg mt-2 text-center z-40 text-white py-4" >GET WEEKLY INSIGHTS AND FACTS RIGHT IN YOUR INBOX</h2>
      <form className="gform pure-form pure-form-stacked flex flex-col items-center w-full mb-4 mt- md:flex-row md:px-10 border-opacity-0 pb-4" action = "https://script.google.com/macros/s/AKfycbxr5o2KSj72H9YEBrI2EcmR7ylzqXOTe9sMuORvZidB012q_F8hEGMDlYsSVoJqhaGu1g/exec"  method="POST" data-email="coutkunal@gmail.com">
        <input
          placeholder="Email"
          required=""
          type="text"
          id="email"
          name="email"
          className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-gray-200 border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0  focus:outline-none focus:shadow-outline "
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black bg-gray-200 transition duration-200 rounded shadow-md md:w-auto "
        >
          Subscribe
        </button>
        <div class="thankyou_message hidden">
          <h2><em>Thanks</em> for contacting us!
            We will get back to you soon!</h2>
        </div>
      </form>
          </div>
        </div>
      </div>
    );
  };
