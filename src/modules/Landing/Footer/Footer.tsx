import InstagramIcon from '@components/Icons/InstagramIcon';
import LinkedInIcon from '@components/Icons/LinkedInIcon';
import TwitterIcon from '@components/Icons/TwitterIcon';
import Link from 'next/link';
import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const {} = props;

  return (
    <div className="bg-mainBlue text-white font-[Lato]">
      <div className="max-w-7xl mx-auto py-20 px-12 lg:px-4">
        <img alt="Logo" src="/assets/logo.svg" className="h-10 w-auto py-2 mr-14" />

        <div className="mt-6 flex flex-col lg:flex-row justify-between">
          <div>
            <h4 className="font-bold">Company</h4>
            <div className="flex flex-col md:flex-row flex-wrap md:items-center mt-6 md:space-y-0">
              <Link className="mr-4" href="/">
                Home
              </Link>
              <Link className="mr-4" href="https://legetty.com/about-us/">
                About
              </Link>
              <Link
                className="mr-4"
                href="https://meetings.hubspot.com/lancemorgan/college-cost-secrets">
                Contact
              </Link>
              <Link className="mr-4" href="/jobs">
                Jobs
              </Link>
              <Link className="mr-4" href="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="mr-4" href="/terms-of-service">
                Terms Of Service
              </Link>
            </div>
            <div className="flex mt-8 space-x-4">
              <Link target="_blank" href="https://www.instagram.com/collegefundingeducation/">
                <InstagramIcon />
              </Link>

              <Link target="_blank" href="https://www.linkedin.com/in/lance-morgan-legetty/">
                <LinkedInIcon />
              </Link>

              <Link target="_blank" href="https://twitter.com/Lance_Legetty">
                <TwitterIcon />
              </Link>

              <Link target="_blank" href="https://www.facebook.com/groups/collegefundingeducation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50">
                  <path
                    fill="#fff"
                    d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
                </svg>
              </Link>

              <Link
                target="_blank"
                href="https://youtube.com/playlist?list=PLkST5yF3SU_vYW8-6HJJT1tGj2rVhNQ8R&si=EYT0dJ_94wfzSC9m">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="24"
                  height="24"
                  viewBox="0 0 50 50">
                  <path
                    fill="#fff"
                    d="M 24.402344 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.402344 16.898438 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.902344 40.5 17.898438 41 24.5 41 C 31.101563 41 37.097656 40.5 40.597656 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.097656 35.5 C 45.5 33 46 29.402344 46.097656 24.902344 C 46.097656 20.402344 45.597656 16.800781 45.097656 14.300781 C 44.699219 12.101563 42.800781 10.5 40.597656 10 C 37.097656 9.5 31 9 24.402344 9 Z M 24.402344 11 C 31.601563 11 37.398438 11.597656 40.199219 12.097656 C 41.699219 12.5 42.898438 13.5 43.097656 14.800781 C 43.699219 18 44.097656 21.402344 44.097656 24.902344 C 44 29.199219 43.5 32.699219 43.097656 35.199219 C 42.800781 37.097656 40.800781 37.699219 40.199219 37.902344 C 36.597656 38.601563 30.597656 39.097656 24.597656 39.097656 C 18.597656 39.097656 12.5 38.699219 9 37.902344 C 7.5 37.5 6.300781 36.5 6.101563 35.199219 C 5.300781 32.398438 5 28.699219 5 25 C 5 20.398438 5.402344 17 5.800781 14.902344 C 6.101563 13 8.199219 12.398438 8.699219 12.199219 C 12 11.5 18.101563 11 24.402344 11 Z M 19 17 L 19 33 L 33 25 Z M 21 20.402344 L 29 25 L 21 29.597656 Z"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-8 lg:mt-0">
            <h4 className="font-bold">Product</h4>
            <div className="flex flex-col md:flex-row md:items-center mt-6 md:space-y-0">
              <Link className="mr-4" href="/federal-sai-calculator">
                Federal SAI Calculator
              </Link>
              <Link className="mr-4" href="/college-search">
                College Search
              </Link>
              <Link className="mr-4" href="/financial-planner">
                Financial Planner
              </Link>
              <Link className="mr-4" href="/agent/login">
                Agent
              </Link>
              <Link className="mr-4" href="/admission-professional/login">
                Admission Profession
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
