"use client";

import Image from "next/image";
import yellowBlob from "../../public/svgs/sponsor-yellowblob.svg";
import { DownIcon } from "../../components/svgs/DownIcon2";
import { UpIcon } from "../../components/svgs/UpIcon2";
import { HeartIconWhite } from "../../components/svgs/HeartIconWhite";
import { useState } from "react";

export const FiveDrop = () => {
  const [isExpanded1, SetIsExpanded1] = useState(false);
  const [isExpanded2, SetIsExpanded2] = useState(false);
  const [isExpanded3, SetIsExpanded3] = useState(false);  
  const [isExpanded4, SetIsExpanded4] = useState(false);  
  const [isExpanded5, SetIsExpanded5] = useState(false);

  return (
    <>
      <div className="pt-32"></div>
      <div className="relative">
        <Image src={yellowBlob} alt="" width={442} height={417} className="absolute z-0 right-0 w-2/3 sm:w-1/2 lg:w-1/3 mb-10 -top-72" />
      </div>

      <div className="z-30 relative">
        <div className="bg-baby-blue mx-auto w-11/12 py-6 px-4 relative rounded-2xl">
          <button onClick={() => SetIsExpanded1(!isExpanded1)} className="group w-full text-xl font-semibold text-neutral-black inline-flex">
            How can I be a sponsor?
            <DownIcon />
            <UpIcon />
          </button>
          {isExpanded1 &&
          <nav tabIndex={0} className="w-full">
            <p className="mt-4 font-extralight text-lg leading-loose">
              To explore sponsorship opportunities and learn about the unique benefits, please contact us.
            </p>
          </nav>
          }
        </div>
      </div>

      <div className="z-30 relative mt-6">
        <div className="bg-baby-blue mx-auto w-11/12 py-6 px-4 relative rounded-2xl">
          <button onClick={() => SetIsExpanded2(!isExpanded2)} className="group w-full text-xl font-semibold text-neutral-black inline-flex">
            What are the benefits?
            <DownIcon />
            <UpIcon />
          </button>
          {isExpanded2 &&
          <nav tabIndex={0} className="w-full">
            <p className="mt-4 font-extralight text-lg leading-loose">
              As a sponsor, you will gain visibility and recognition among our audience.  You will also have the opportunity to support young artists to contribute to a meaningful cause. 
            </p>
          </nav>
          }
        </div>
      </div>

      <div className="z-30 relative mt-6">
        <div className="bg-baby-blue mx-auto w-11/12 py-6 px-4 relative rounded-2xl">
          <button onClick={() => SetIsExpanded3(!isExpanded3)} className="group w-full text-xl font-semibold text-neutral-black inline-flex">
            Can I partner with you?
            <DownIcon />
            <UpIcon />
          </button>
          {isExpanded3 &&
          <nav tabIndex={0} className="w-full">
            <p className="mt-4 font-extralight text-lg leading-loose">
              Please contact us to explore collaboration opportunities. 
            </p>
          </nav>
          }
        </div>
      </div>

      <div className="z-30 relative mt-6">
        <div className="bg-baby-blue mx-auto w-11/12 py-6 px-4 relative rounded-2xl">
          <button onClick={() => SetIsExpanded4(!isExpanded4)} className="group w-full text-xl font-semibold text-neutral-black inline-flex">
            How does sponsorship work?
            <DownIcon />
            <UpIcon />
          </button>
          {isExpanded4 &&
          <nav tabIndex={0} className="w-full">
            <p className="mt-4 font-extralight text-lg leading-loose">
              Sponsorship involves providing financial support to our charity and the at competition.  In return, sponsors receive various benefits such as brand exposure and recognition.
            </p>
          </nav>
          }
        </div>
      </div>

      <div className="z-40 relative mt-6">
        <div className="bg-baby-blue mx-auto w-11/12 py-6 px-4 relative rounded-2xl">
          <button onClick={() => SetIsExpanded5(!isExpanded5)} className="group w-full text-xl font-semibold text-neutral-black inline-flex">
            Can I donate instead?
            <DownIcon />
            <UpIcon />
          </button>
          {isExpanded5 &&
          <nav tabIndex={0} className="w-full">
            <p className="mt-4 mb-8 font-extralight text-lg leading-loose">
              Absolutely! If you prefer to make a donation instead of becoming a sponsor, we appreciate your support. Visit our donation page to contribute. 
            </p>
            <a href="https://icaf.org/donate" className="group w-fit h-fit border-neutral-white border rounded text-center py-3 px-4 text-sm tracking-wide bg-new-blue text-neutral-white">
              <HeartIconWhite />
              Donate
            </a>
          </nav>
          }
        </div>
      </div>


    </>
  );
};
