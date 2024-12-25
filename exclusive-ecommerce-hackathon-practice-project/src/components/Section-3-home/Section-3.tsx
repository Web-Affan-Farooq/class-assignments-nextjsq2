import React from "react";
import Image from "next/image";

const Section_3 = () => {
  return (
    <section className="border-2 border-solid border-black w-full p-5">
      {/*child-1 */}
      <div className="w-[150px] flex flex-row flex-nowrap gap-5 justify-center items-center">
        <div className="w-[20px] h-[50px] bg-red rounded-md"></div>
        <span className="text-red font-bold">Categories</span>
      </div>

      <br />
      {/*child-2 */}
      <div className="flex flex-row flex-wrap justify-between items-center px-[12px]">
        <div>
          <h1 className="text-3xl font-bold max-md:text-2xl">
            Browse By Category
          </h1>
        </div>
        <div className="flex flex-row flex-nowrap gap-7">
          <i className="text-2xl font-bold border-2 border-solid border-black text-gray-500 fa-solid fa-arrow-left max-sm:text-[15px]"></i>
          <i className="text-2xl font-bold border-2 border-solid border-black text-gray-500 fa-solid fa-arrow-right max-sm:text-[15px]"></i>
        </div>
      </div>

      {/*child-3 */}
      <br />

      <div className="scroll-container2 border-2 border-solid border-black p-2 overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-smooth">
        {/* scroll container */}

        <div className="flex justify-center items-center gap-2 flex-row w-max flex-nowrap">
          {/* child-1 */}
          <div className="group flex flex-col flex-nowrap justify-center items-center gap-0 w-[170px] h-[145px] border-2 border-solid border-black hover:bg-red transition-all rounded-lg">
            <div className="flex flex-col flex-nowrap gap-2 justify-center items-center">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                className="group-hover:stroke-white stroke-black transition-all"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_53762_6)">
                  <path
                    d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_53762_6">
                    <rect width="56" height="56" fill="black" />
                  </clipPath>
                </defs>
              </svg>

              <span className="group-hover:text-white transition-all">
                Phones
              </span>
            </div>
          </div>

          {/* child-2 */}
          <div className="group flex flex-col flex-nowrap justify-center items-center gap-0 w-[170px] h-[145px] border-2 border-solid border-black hover:bg-red transition-all m-auto rounded-lg">
            <div className="flex flex-col flex-nowrap gap-2 justify-center items-center">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                className="group-hover:stroke-white stroke-black transition-all"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_53762_613)">
                  <path
                    d="M46.6667 9.33337H9.33333C8.04467 9.33337 7 10.378 7 11.6667V35C7 36.2887 8.04467 37.3334 9.33333 37.3334H46.6667C47.9553 37.3334 49 36.2887 49 35V11.6667C49 10.378 47.9553 9.33337 46.6667 9.33337Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.3333 46.6666H39.6667"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 37.3334V46.6667"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 37.3334V46.6667"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M8 32H48" strokeWidth="2" strokeLinecap="round" />
                </g>
                <defs>
                  <clipPath id="clip0_53762_613">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="group-hover:text-white transition-all">
                Computer
              </span>
            </div>
          </div>

          {/* child-3 */}
          <div className="group flex flex-col flex-nowrap justify-center items-center gap-0 w-[170px] h-[145px] border-2 border-solid border-black hover:bg-red transition-all m-auto rounded-lg">
            <div className="flex flex-col flex-nowrap gap-2 justify-center items-center">
              <svg
                width="56"
                height="56"
                className="group-hover:stroke-white stroke-black transition-all"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_53762_629)">
                  <path
                    d="M35 14H21C17.134 14 14 17.134 14 21V35C14 38.866 17.134 42 21 42H35C38.866 42 42 38.866 42 35V21C42 17.134 38.866 14 35 14Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 42V49H35V42"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 14V7H35V14"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="24"
                    y1="23"
                    x2="24"
                    y2="34"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="28"
                    y1="28"
                    x2="28"
                    y2="34"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <line
                    x1="32"
                    y1="26"
                    x2="32"
                    y2="34"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_53762_629">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="group-hover:text-white transition-all">
                Smart watch
              </span>
            </div>
          </div>

          {/* child-4 */}
          <div className="group flex flex-col flex-nowrap justify-center items-center gap-0 w-[170px] h-[145px] border-2 border-solid border-black hover:bg-red transition-all m-auto rounded-lg">
            <div className="flex flex-col flex-nowrap gap-2 justify-center items-center">
              <svg
                width="56"
                height="56"
                className="group-hover:stroke-white stroke-black transition-all"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_53762_6)">
                  <path
                    d="M11.6667 16.3334H14C15.2377 16.3334 16.4247 15.8417 17.2998 14.9665C18.175 14.0914 18.6667 12.9044 18.6667 11.6667C18.6667 11.0479 18.9125 10.4544 19.3501 10.0168C19.7877 9.57921 20.3812 9.33337 21 9.33337H35C35.6188 9.33337 36.2123 9.57921 36.6499 10.0168C37.0875 10.4544 37.3333 11.0479 37.3333 11.6667C37.3333 12.9044 37.825 14.0914 38.7002 14.9665C39.5753 15.8417 40.7623 16.3334 42 16.3334H44.3333C45.571 16.3334 46.758 16.825 47.6332 17.7002C48.5083 18.5754 49 19.7624 49 21V42C49 43.2377 48.5083 44.4247 47.6332 45.2999C46.758 46.175 45.571 46.6667 44.3333 46.6667H11.6667C10.429 46.6667 9.242 46.175 8.36683 45.2999C7.49167 44.4247 7 43.2377 7 42V21C7 19.7624 7.49167 18.5754 8.36683 17.7002C9.242 16.825 10.429 16.3334 11.6667 16.3334"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M28 37.3334C31.866 37.3334 35 34.1994 35 30.3334C35 26.4674 31.866 23.3334 28 23.3334C24.134 23.3334 21 26.4674 21 30.3334C21 34.1994 24.134 37.3334 28 37.3334Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_53762_6">
                    <rect width="56" height="56" fill="black" />
                  </clipPath>
                </defs>
              </svg>

              <span className="group-hover:text-white transition-all">
                Camera
              </span>
            </div>
          </div>

          {/* child-5 */}
          <div className="group flex flex-col flex-nowrap justify-center items-center gap-0 w-[170px] h-[145px] border-2 border-solid border-black hover:bg-red transition-all m-auto rounded-lg">
            <div className="flex flex-col flex-nowrap gap-2 justify-center items-center">
              <svg
                width="56"
                height="56"
                className="group-hover:stroke-white stroke-black transition-all"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_53762_644)">
                  <path
                    d="M16.3333 30.3334H14C11.4227 30.3334 9.33331 32.4227 9.33331 35V42C9.33331 44.5774 11.4227 46.6667 14 46.6667H16.3333C18.9106 46.6667 21 44.5774 21 42V35C21 32.4227 18.9106 30.3334 16.3333 30.3334Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42 30.3334H39.6667C37.0893 30.3334 35 32.4227 35 35V42C35 44.5774 37.0893 46.6667 39.6667 46.6667H42C44.5773 46.6667 46.6667 44.5774 46.6667 42V35C46.6667 32.4227 44.5773 30.3334 42 30.3334Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.33331 35V28C9.33331 23.0493 11.3 18.3014 14.8007 14.8007C18.3013 11.3 23.0493 9.33337 28 9.33337C32.9507 9.33337 37.6986 11.3 41.1993 14.8007C44.7 18.3014 46.6666 23.0493 46.6666 28V35"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_53762_644">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="group-hover:text-white transition-all">
                Headphones
              </span>
            </div>
          </div>

          {/* child-6 */}
          <div className="group flex flex-col flex-nowrap justify-center items-center gap-0 w-[170px] h-[145px] border-2 border-solid border-black hover:bg-red transition-all m-auto rounded-lg">
            <div className="flex flex-col flex-nowrap gap-2 justify-center items-center">
              <svg
                width="56"
                height="56"
                className="group-hover:stroke-white stroke-black transition-all"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_53762_809)">
                  <path
                    d="M46.6666 14H9.33329C6.75596 14 4.66663 16.0893 4.66663 18.6667V37.3333C4.66663 39.9107 6.75596 42 9.33329 42H46.6666C49.244 42 51.3333 39.9107 51.3333 37.3333V18.6667C51.3333 16.0893 49.244 14 46.6666 14Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 28H23.3333M18.6667 23.3334V32.6667"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 25.6666V25.6908"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M42 30.3333V30.3574"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_53762_809">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="group-hover:text-white transition-all">
                Gaming
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_3;
