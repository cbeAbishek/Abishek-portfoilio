
import { SectionWrapper } from "../../hoc";
import { CVDuncan } from "../../constants";
import CVDoc from "../assets/CV_Ilya_Aleksin.pdf";


const CV = () => {
  return (
    <div className="bg-black-100 rounded-[20px]">
      <div className="flex min-[850px]:flex-row flex-col justify-around items-center">
      <img src={CVDuncan} alt="CVDuncan" className="w-[250px]" />

      <a href={CVDoc} download>
        <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[21px] flex items-center gap-2">
        <span>D CV</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        </button>
      </a>
      </div>
    </div>
    );
};

const WrappedCV = SectionWrapper(CV, "cv");
export default WrappedCV;
