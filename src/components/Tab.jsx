import icons from '../assets/icons.svg';
import avatar from '../assets/avatar.png';

const Tab = () => {
  return (
    <div className="flex justify-between items-center w-[50%] h-[3rem] border border-[#a4aab4] mx-auto mt-12 rounded-md">
      <div className="flex justify-center items-center">
        <p className="pt-[0.3rem] px-[0.6rem] ml-2 rounded-md bg-[#d9f9e6] text-[#347659] text-lg font-medium text-center">
          P
        </p>
        <span className="text-[#a4aab4] text-[1rem] mx-2">|</span>
        <svg className="rotate-[-90deg] w-[1rem] h-[1.5rem] fill-[#a4aab4]">
          <use xlinkHref={`${icons}#icon-clock`} />
        </svg>
        <p className="text-[#a4aab4] ml-[0.2rem] text-[0.9rem]">0min</p>
        <span className="text-[#a4aab4] text-[1rem] mx-2">|</span>
        <img src={avatar} alt="avatar" className="w-[2rem]" />
        <span className="text-[#a4aab4] text-[1rem] mx-2">|</span>
        <svg className="w-[1rem] h-[1.5rem] fill-[#a4aab4]">
          <use xlinkHref={`${icons}#icon-arrow-down-left`} />
        </svg>
        <p className="text-[#a4aab4] ml-[0.2rem] text-[0.9rem]">0</p>
      </div>
      <div className="flex justify-center items-center pr-2">
        <svg className="w-[1rem] h-[1.5rem] fill-[#a4aab4] mr-2">
          <use xlinkHref={`${icons}#icon-check-circle`} />
        </svg>
        <svg className="w-[1rem] h-[1.5rem] fill-[#43946c] mr-2">
          <use xlinkHref={`${icons}#icon-cloud`} />
        </svg>
        <svg className="w-[1rem] h-[1.5rem] fill-[#121212]">
          <use xlinkHref={`${icons}#icon-dots-horizontal-triple`} />
        </svg>
      </div>
    </div>
  );
};

export default Tab;
