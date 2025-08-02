import dance from "../../assets/dance.gif";

const Spinner = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex mt-40 flex-col items-center">
        <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="instruction mt-10 justify-items-center">
          <img
            src={dance}
            alt="web-development"
            className="w-40 h-40 object-contain"
          />
          <div className="game_ins text-white font-semibold text-center text-[0.9rem]">
            Please be patient - Page can take 15 Seconds to load
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
