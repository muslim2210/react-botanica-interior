// local imports
import { referenceTitle, referenceSubtitle } from "../data";

import imageOne from "../assets/reference1-re.jpg";
import imageTwo from "../assets/reference2-re.jpg";
import imageThree from "../assets/reference3-re.jpg";

import FadeIn from "../components/FadeIn";

const Reference = () => {
  return (
    <div id="reference" className="mb-[160px] px-10 container mx-auto">
      <FadeIn delay={0.2} direction="down">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
          {referenceTitle}
        </h1>
      </FadeIn>
      <FadeIn delay={0.4} direction="down">
        <h5 className="text-[#4f4f4f] text-lg xs:text-xl mb-12 text-center">
          {referenceSubtitle}
        </h5>
      </FadeIn>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <FadeIn delay={0.2} direction="right">
          <div className="flex flex-col gap-8">
            <img
              src={imageOne}
              alt=""
              className="lg:w-[739px] lg:h-[549px] sm:w-[540px] sm:h-[290px] md:w-[560px] rounded-3xl"
            />
            <img
              src={imageTwo}
              alt=""
              className="lg:w-[734px] lg:h-[404px] sm:w-[540px] sm:h-[290px] md:w-[560px] rounded-3xl"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.2} direction="left">
          <img
            src={imageThree}
            alt=""
            className="lg:w-[717px] lg:h-[995px] rounded-3xl sm:w-[540px] md:w-[560px] sm:h-[610px]"
          />
        </FadeIn>
      </div>
    </div>
  );
};

export default Reference;
