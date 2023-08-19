import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col ">
      <nav className="flex flex-row justify-between my-5 items-center py-4 border-y mb-14 sticky top-0 z-50 bg-[#02021c] px-16">
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
          <div className="rounded-full bg-[#3528c0] aspect-square w-10 flex items-center justify-center">
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
      <section //hero section
        className="flex flex-col items-center justify-center px-16 rounded-b-[2.5rem] pb-16"
        style={{
          backgroundImage: "url('/bg-1.webp')",
        }}
      >
        <div //master section
          className="flex flex-col relative pb-4 px-10 bg-no-repeat w-full"
          style={{
            backgroundImage: "url('/bg.webp')",
            backgroundPosition: "0 0",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="flex flex-row justify-between">
            <div className="text-white leading-[126px] tracking-[-1.4px] font-medium uppercase text-[137px] pt-24">
              <span className="text-[#00ccff]">S</span>AVEETHA <br /> T
              <span className="text-[#00ccff]">E</span>CH <br />
              SO<span className="text-[#00ccff]">C</span>IETY
            </div>
            <img src="test.svg" alt="logo" className="w-1/3" />
          </div>
          <div className="border-t border-slate-300 mt-8 flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-16">
              <div className="flex flex-row items-center gap-6 mt-4">
                <div className="text-[68px] font-medium">350+</div>
                <div className="text text-2xl font-normal">
                  Club <br /> Members
                </div>
              </div>
              <div className="border-l border-slate-300 h-[60px]" />
              <div className="flex flex-row items-center gap-6 mt-4">
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
        <div className="flex flex-col items-center p-12 textmx-16">
          Scroll Down
          <span className="text-2xl -translate-y-[16px]">⌄</span>
        </div>
        <div>
          <div className="flex flex-row text-5xl">
            "The advance of technology is based on making it fit in so that you
            don't really even notice it, so it's part of everyday life."
          </div>
          <div className="w-full flex justify-end text-4xl">— Bill Gates</div>
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
            <div className="flex flex-row items-center py-9 gap-4">
              <div className="font-medium text-[33px]">Vision</div>
              <div className="rounded-full bg-[#3528c0] aspect-square w-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 256 256"
                  fill="none"
                >
                  <path
                    d="M247.31 124.76C246.96 123.97 238.49 105.18 219.66 86.35C194.57 61.26 162.88 48 128 48C93.1199 48 61.4299 61.26 36.3399 86.35C17.5099 105.18 8.9999 124 8.6899 124.76C8.23504 125.783 8 126.89 8 128.01C8 129.13 8.23504 130.237 8.6899 131.26C9.0399 132.05 17.5099 150.83 36.3399 169.66C61.4299 194.74 93.1199 208 128 208C162.88 208 194.57 194.74 219.66 169.66C238.49 150.83 246.96 132.05 247.31 131.26C247.765 130.237 248 129.13 248 128.01C248 126.89 247.765 125.783 247.31 124.76ZM128 168C120.089 168 112.355 165.654 105.777 161.259C99.1991 156.864 94.0722 150.616 91.0447 143.307C88.0172 135.998 87.2251 127.956 88.7685 120.196C90.3119 112.437 94.1215 105.31 99.7156 99.7157C105.31 94.1216 112.437 90.312 120.196 88.7686C127.956 87.2252 135.998 88.0173 143.307 91.0448C150.616 94.0723 156.863 99.1992 161.259 105.777C165.654 112.355 168 120.089 168 128C168 138.609 163.786 148.783 156.284 156.284C148.783 163.786 138.609 168 128 168Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="w-full border-t border-slate-400 pb-4" />
            <div className="flex flex-col">
              <div className="text-slate-400">
                Our vision is to create a vibrant college tech community where
                diverse learners unite to explore and advance technology.
                Together, we foster innovation, collaboration, and lifelong
                learning, empowering learners to leverage technology for a
                positive impact.
              </div>
            </div>
          </div>
          <div //mis
            className="flex flex-col relative pb-4 px-10 bg-no-repeat w-1/4 text-justify"
            style={{
              backgroundImage: "url('/vismis.webp')",
              backgroundPosition: "0 0",
              backgroundSize: "100% 100%",
            }}
          >
            <div className="flex flex-row items-center py-9 gap-4">
              <div className="font-medium text-[33px]">Mission</div>
              <div className="rounded-full bg-[#3528c0] aspect-square w-16 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 250 250"
                  fill="none"
                >
                  <g clip-path="url(#clip0_47_83)">
                    <path
                      d="M125 20.8334C134.333 20.8334 143.375 22.0625 151.979 24.3646L129.833 46.5C128.153 48.1868 126.672 50.0601 125.417 52.0834H125C110.579 52.0834 96.4809 56.3599 84.4898 64.372C72.4987 72.3842 63.1528 83.7723 57.6339 97.096C52.1151 110.42 50.6711 125.081 53.4846 139.225C56.2981 153.37 63.2427 166.362 73.4403 176.56C83.6379 186.757 96.6304 193.702 110.775 196.516C124.919 199.329 139.58 197.885 152.904 192.366C166.228 186.847 177.616 177.501 185.628 165.51C193.64 153.519 197.917 139.422 197.917 125V124.583C199.917 123.333 201.792 121.865 203.49 120.156L225.636 98.0209C227.938 106.625 229.167 115.667 229.167 125C229.167 182.531 182.531 229.167 125 229.167C67.4689 229.167 20.8335 182.531 20.8335 125C20.8335 67.4688 67.4689 20.8334 125 20.8334ZM120.688 73.0938C120.688 81.9584 120.25 90.948 120.729 99.8021L115.104 105.427C113.169 107.362 111.634 109.659 110.587 112.187C109.54 114.715 109.001 117.425 109.001 120.161C109.001 122.898 109.54 125.608 110.587 128.136C111.634 130.664 113.169 132.961 115.104 134.896C117.039 136.831 119.336 138.366 121.865 139.413C124.393 140.46 127.102 140.999 129.839 140.999C132.575 140.999 135.285 140.46 137.813 139.413C140.341 138.366 142.638 136.831 144.573 134.896L150.198 129.271C159.052 129.75 168.031 129.313 176.906 129.313C176.084 139.212 172.447 148.67 166.425 156.57C160.404 164.47 152.249 170.484 142.922 173.902C133.595 177.319 123.485 177.999 113.784 175.859C104.084 173.72 95.1977 168.851 88.1736 161.827C81.1495 154.803 76.2806 145.916 74.1411 136.216C72.0016 126.516 72.6808 116.406 76.0985 107.079C79.5162 97.7515 85.5298 89.5963 93.4303 83.5748C101.331 77.5533 110.788 73.9167 120.688 73.0938ZM192.75 22.1563C194.651 22.9446 196.277 24.2786 197.421 25.9897C198.564 27.7009 199.176 29.7126 199.177 31.7709V50.8334H218.229C220.289 50.8338 222.303 51.445 224.015 52.5896C225.728 53.7342 227.063 55.3609 227.851 57.2641C228.639 59.1672 228.845 61.2613 228.444 63.2816C228.042 65.302 227.05 67.1578 225.594 68.6146L188.75 105.417C186.797 107.37 184.148 108.468 181.386 108.469H156.25L137.198 127.521C135.243 129.474 132.593 130.571 129.83 130.57C127.067 130.569 124.417 129.47 122.464 127.516C120.51 125.561 119.414 122.911 119.415 120.147C119.416 117.384 120.514 114.734 122.469 112.781L141.521 93.75V68.6042C141.52 67.2346 141.789 65.8783 142.313 64.6128C142.836 63.3473 143.604 62.1975 144.573 61.2292L181.396 24.4063C182.853 22.9487 184.709 21.9559 186.73 21.5535C188.751 21.1511 190.846 21.3573 192.75 22.1459V22.1563Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_47_83">
                      <rect width="250" height="250" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="w-full border-t border-slate-400 pb-4" />
            <div className="flex flex-col">
              <div className="text-slate-400">
                Our mission is to provide a platform that empowers learners to
                excel in the fields of Machine Learning, Web Development, Game
                Development, Intelligent Systems, and much more
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section // community section
        className="flex flex-col items-center justify-center px-16 rounded-b-[2.5rem] pb-16"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minima
        iure quisquam inventore praesentium delectus corrupti. Dolore vel
        dolores consectetur similique assumenda ea fugiat quis debitis
        necessitatibus sunt provident fugit, adipisci maiores beatae natus non
        voluptatum ratione eos quam. Minus dolore molestias odio suscipit quidem
        perspiciatis temporibus quisquam ipsam nihil.
      </section> */}
      <Footer />
    </main>
  );
}
