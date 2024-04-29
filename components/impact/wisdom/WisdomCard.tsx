import React, { forwardRef } from "react";
import { LazyImage } from "../../common/images/LazyImage";
import { IWisdom } from "../../../mock/wisdomItems";

interface IProps {
  wisdom: IWisdom;
  onClick: () => void;
}

export const WisdomCard = forwardRef<HTMLDivElement, IProps>(({ wisdom, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className="
        thumbnail
        overflow-hidden
        cursor-pointer
        absolute
        rounded-xl
        font-montserrat
        font-bold
      "
      onClick={onClick}
    >
      <div className="absolute inset-0 overflow-hidden w-full h-full">
        <LazyImage className="thumbnail-image w-full h-full lg:p-2 xl:p-4 object-cover select-none" width={50} height={50} imageUrl={wisdom.url} alt={wisdom.alt} /> object-top for redesign
        <div
          className="
            cardLabel
            thumbnail-textfield
            h-[20%]
            w-full
            absolute
            bottom-0
          "
        >
          {/* <div className="
            absolute
            w-full
            h-full
            bg-white bg-opacity-25
            rounded-b-xl
            backdrop-blur-[5px]
            "
          ></div> */}
          {/* <div
            className="
              cardLabel
              thumbnail-textfield
              absolute
              bottom-0
              w-full
              h-full
              text-[#FAFAFA]
              rounded-b-xl
              flex
              items-center
              justify-center
        
            "
          >
            <H3m className="absolute select-none font-montserrat font-semibold z-10">{wisdom.author}</H3m>
          </div> */}
        </div>
      </div>
    </div>
  );
});

WisdomCard.displayName = "WisdomCard";