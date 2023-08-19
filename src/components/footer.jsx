import Link from "next/link";
const footer = () => {
  return (
    <div className="footer">
      <div className="flex flex-row px-16 mt-20">
        <div className="w-1/3">
          <h3>Comunity Head</h3>
          <ol className="list-disc">
            <li className="translate-x-4">Obed Otto</li>
          </ol>
          <h3>CO-ORDINATORS</h3>
          <ol className="list-disc">
            {["sagul", "sagul", "sagul", "sagul", "sagul"].map((item) => {
              return (
                <li className="translate-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="white"
                      d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z"
                    />
                  </svg>
                  {item}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="w-1/3">
          <h4 className="heading">USEFUL LINKS</h4>
          <a href="#" className="links">
            Home
          </a>
          <a href="#Departments" className="links">
            Departments
          </a>
          <Link href="/form" className="links">
            Register
          </Link>
          <Link href="/form" className="links">
            Events
          </Link>
          <h4
            className="heading"
            style={{ marginTop: "2rem", marginBottom: "1rem" }}
          >
            SOCIALS
          </h4>
          <div class="social-links">
            <a
              target="_blank"
              href="https://www.facebook.com/pg/SaveethaEngineeringCollegeSEC/posts/?ref=page_internal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
                />
              </svg>
            </a>
            <a target="_blank" href="https://twitter.com/SaveethaSEC/">
              𝕏
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M389.2 48h70.6L305.6 224.2L487 464H345L233.7 318.6L106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z"
                />
              </svg> */}
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/saveethaengineeringcollege/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.98248 0.24707H17.0175C20.8587 0.24707 24 3.30582 24 7.04332V17.4508C24 21.1883 20.8587 24.2471 17.0175 24.2471H6.98248C3.14373 24.2471 -1.52588e-05 21.1883 -1.52588e-05 17.4508V7.04332C-1.52588e-05 3.30582 3.14373 0.24707 6.98248 0.24707ZM3.35748 20.9846C4.32718 21.9296 5.62844 22.4573 6.98248 22.4546H17.02C18.3745 22.4578 19.6763 21.93 20.6462 20.9846C21.1229 20.528 21.5024 19.9799 21.7621 19.3731C22.0218 18.7663 22.1563 18.1133 22.1575 17.4533V7.04457C22.1575 5.71832 21.62 4.46457 20.6462 3.51582C19.6762 2.56936 18.374 2.04073 17.0187 2.04332H6.98373C5.61873 2.04332 4.33373 2.56832 3.35748 3.51582C2.88098 3.97203 2.50143 4.51969 2.24154 5.12602C1.98165 5.73236 1.84678 6.38489 1.84498 7.04457V17.4533C1.84623 18.7808 2.38373 20.0371 3.35748 20.9846ZM17.1862 5.62457C17.1862 4.78207 17.8875 4.09957 18.7512 4.09957C19.6162 4.09957 20.3162 4.78207 20.3162 5.62457C20.3162 6.46582 19.6162 7.14457 18.7512 7.14457C17.8887 7.14457 17.1862 6.46582 17.1862 5.62457ZM5.42498 12.1558C5.42498 8.60332 8.38373 5.72332 12.0325 5.72332C15.6825 5.72332 18.6412 8.60332 18.6412 12.1558C18.6412 15.7083 15.6812 18.5883 12.0325 18.5883C8.38373 18.5883 5.42498 15.7083 5.42498 12.1558ZM7.67498 12.1596C7.67498 14.4858 9.61249 16.3733 12.0037 16.3733C14.3912 16.3733 16.3287 14.4858 16.3287 12.1596C16.3287 9.83457 14.3912 7.94957 12.0037 7.94957C9.61249 7.94957 7.67498 9.83457 7.67498 12.1596Z"
                  fill="#F5F5F7"
                />
              </svg>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/saveetha-engineering-college/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
              >
                <path
                  d="M4.19372 18.2523H0.193718V6.25234H4.19372V18.2523ZM2.19372 4.65234C1.66328 4.65234 1.15458 4.44163 0.779505 4.06656C0.404432 3.69148 0.193718 3.18278 0.193718 2.65234C0.193718 2.12191 0.404432 1.6132 0.779505 1.23813C1.15458 0.863058 1.66328 0.652344 2.19372 0.652344C2.72415 0.652344 3.23286 0.863058 3.60793 1.23813C3.983 1.6132 4.19372 2.12191 4.19372 2.65234C4.19372 3.18278 3.983 3.69148 3.60793 4.06656C3.23286 4.44163 2.72415 4.65234 2.19372 4.65234ZM18.5937 18.2523H14.75V12.4123C14.75 11.0198 14.7237 9.22859 12.75 9.22859C10.7475 9.22859 10.44 10.7448 10.44 12.3123V18.2523H6.59497V6.24359H10.2862V7.88484H10.3387C10.8512 6.94109 12.1075 5.94609 13.9787 5.94609C17.875 5.94609 18.595 8.43359 18.595 11.6661V18.2536L18.5937 18.2523Z"
                  fill="#F5F5F7"
                />
              </svg>
            </a>
            <a target="_blank" href="https://youtube.com/saveethaengineering/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="white"
                    d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.802 3.802 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954c0 .983-.052 2.011-.122 2.954l-.075.91c-.013.146-.026.287-.04.425a3.802 3.802 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A61.59 61.59 0 0 1 12 20a61.59 61.59 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.802 3.802 0 0 1-3.494-3.423l-.04-.425l-.075-.91A40.662 40.662 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91c.013-.146.026-.287.04-.425A3.802 3.802 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A61.676 61.676 0 0 1 12 4Zm-2 5.575v4.85c0 .462.5.75.9.52l4.2-2.425a.6.6 0 0 0 0-1.04l-4.2-2.424a.6.6 0 0 0-.9.52Z"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-1/3">
          <h4 className="heading">LOCATION</h4>
          <p className="address">
            Saveetha Nagar, Sriperumbadur Taluk, Kanchipuram - Chennai Rd,
            Chennai, Tamil Nadu 602105
          </p>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                style={{
                  borderRadius: "10px",
                }}
                class="gmap_iframe"
                width="100%"
                src="https://maps.google.com/maps?width=250&amp;height=250&amp;hl=en&amp;q=Saveetha engineering college&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        Copyright © Saveetha Engineering College, Powered by Drestein.
      </div>
    </div>
  );
};

export default footer;
