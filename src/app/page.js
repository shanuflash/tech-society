export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-16">
      <nav className="flex flex-row justify-between my-5 items-center py-4 border-y mb-14 ">
        {/* <div className="text-6xl">SEC</div> */}
        <img src="logo.png" alt="logo" className="w-1/6" />
        <ul className="flex flex-row justify-evenly gap-8">
          <li className="px-4 text-[1rem] font-normal tracking-[3px] uppercase cursor-pointer">
            Home
          </li>
          <li className="px-4 text-[1rem] font-normal tracking-[3px] uppercase cursor-pointer">
            About
          </li>
          <li className="px-4 text-[1rem] font-normal tracking-[3px] uppercase cursor-pointer">
            Community
          </li>
          <li className="px-4 text-[1rem] font-normal tracking-[3px] uppercase cursor-pointer">
            Contact
          </li>
        </ul>
        <div className="rounded-[400px] bg-white text-[#02021E] pl-6 pr-2 py-1 uppercase text-base font-medium tracking-[1px] flex flex-row gap-4 items-center">
          Register Now
          <div className="rounded-full bg-[#3827C7] aspect-square w-10 flex items-center justify-center">
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M10.6663 0.915001C10.9977 0.915072 11.3156 1.04681 11.55 1.28125L14.8837 4.615C15.1181 4.84941 15.2497 5.1673 15.2497 5.49875C15.2497 5.83021 15.1181 6.14809 14.8837 6.3825L5.7175 15.5488C5.48313 15.7832 5.16524 15.9149 4.83375 15.915H1.5C1.16848 15.915 0.850537 15.7833 0.616116 15.5489C0.381696 15.3145 0.25 14.9965 0.25 14.665V11.3313C0.250071 10.9998 0.381813 10.6819 0.61625 10.4475L9.7825 1.28125C10.0169 1.04681 10.3348 0.915072 10.6663 0.915001ZM2.75 11.85V13.415H4.315L12.2325 5.49875L10.6663 3.9325L2.75 11.85ZM0.25 18.835C0.25 18.5035 0.381696 18.1855 0.616116 17.9511C0.850537 17.7167 1.16848 17.585 1.5 17.585H16.5C16.8315 17.585 17.1495 17.7167 17.3839 17.9511C17.6183 18.1855 17.75 18.5035 17.75 18.835C17.75 19.1665 17.6183 19.4845 17.3839 19.7189C17.1495 19.9533 16.8315 20.085 16.5 20.085H1.5C1.16848 20.085 0.850537 19.9533 0.616116 19.7189C0.381696 19.4845 0.25 19.1665 0.25 18.835Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-center">
        <div //master section
          className="flex flex-col relative  pb-4 px-10 bg-no-repeat w-full"
          style={{
            backgroundImage: "url('/bg.webp')",
            backgroundPosition: "0 0",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="flex flex-row justify-between">
            <div className="text-white leading-[126px] tracking-[-1.4px] font-medium uppercase text-[137px] pt-16">
              {/* rgb(0 202 255) */}
              <span className="text-[#00ccff]">S</span>AVEETHA <br /> T
              <span className="text-[#00ccff]">E</span>CH <br />
              SO<span className="text-[#00ccff]">C</span>IETY
            </div>
            <img src="test.svg" alt="logo" className="w-1/3" />
          </div>
          <div className="border-t border-slate-300 mt-8 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-16">
              <div className="flex flex-row items-center gap-6 mt-2">
                <div className="text-[68px] font-medium">350+</div>
                <div className="text text-2xl font-normal">
                  Club <br /> Members
                </div>
              </div>
              <div className="border-l border-slate-300 h-[60px]" />
              <div className="flex flex-row items-center gap-6 mt-2">
                <div className="text-[68px] font-medium">100+</div>
                <div className="text text-2xl font-normal">
                  Events <br /> Conducted
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="text-[#02021E] bg-[#FDF401] uppercase text-base font-medium tracking-[1px] px-8 py-4 rounded-full">
                Register
              </div>
              <div className="rounded-full bg-[#E02A2A] aspect-square w-14 flex items-center justify-center">
                <svg
                  width="26"
                  height="28"
                  viewBox="0 0 26 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5 1.75L2 16.75H13.25L12 26.75L24.5 11.75H13.25L14.5 1.75Z"
                    stroke="white"
                    fill="white"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div //about section
          className="flex flex-row justify-center mt-20 gap-6"
        >
          <div //about
            className="flex flex-col relative py-8 px-10 bg-no-repeat w-1/2 text-justify"
            style={{
              backgroundImage: "url('/about.webp')",
              backgroundPosition: "0 0",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="font-medium text-[69px]">About</div>
            <div className="w-full border-t border-slate-400" />
            <div className="text-xl mt-12">
              Welcome to our dynamic and innovative Tech Society! Your gateway
              to the exciting world of new technologies. A community created by
              the learners, of the learners, and for the learners. Through
              engaging workshops, thrilling hackathons, and collaborative
              project support, we are here to ignite your passion for technology
              and empower you to shape the future. Join us on this journey of
              exploration, creation, and endless possibilities!
            </div>
          </div>
          <div //vis
            className="flex flex-col relative pb-4 px-10 bg-no-repeat w-1/4 text-justify"
            style={{
              backgroundImage: "url('/vismis.webp')",
              backgroundPosition: "0 0",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="font-medium text-[33px]">Vision</div>
            Our vision is to create a vibrant college tech community where
            diverse learners unite to explore and advance technology. Together,
            we foster innovation, collaboration, and lifelong learning,
            empowering learners to leverage technology for a positive impact.
          </div>
          <div //mis
            className="flex flex-col relative  pb-4 px-10 bg-no-repeat w-1/4 text-justify"
            style={{
              backgroundImage: "url('/vismis.webp')",
              backgroundPosition: "0 0",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="font-medium text-[33px]">Mission</div>
            Our mission is to provide a platform that empowers learners to excel
            in the fields of Machine Learning, Web Development, Game
            Development, Intelligent Systems, and much more
          </div>
        </div>
      </section>
    </main>
  );
}
