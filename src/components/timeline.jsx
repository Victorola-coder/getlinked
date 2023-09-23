/* eslint-disable react/prop-types */
export const TimelineLeft = ({ title, content, index, date, start }) => {
  return (
    <div className="grid grid-cols-[1fr_70px_1fr]">
      <div
        className={`pr-[40px] md:pr-[80px] pb-5 ${start ? "pt-24" : "pt-10"}`}
      >
        <h1 className="text-right text-[#D434FE] font-mon  text-[24px] font-bold mb-2">
          {title}
        </h1>
        <p className="text-[14px] font-mon mx-auto max-w-[436px] mr-0  text-white text-right">
          {content}
        </p>
      </div>
      <div className="relative flex justify-center">
        <div className="h-[58px] w-[58px] rounded-[50%] grid place-items-center text-white timeline-gradient-circle text-[24px] font-bold self-end mb-5 relative z-[1] border-[6px] border-[#150E28]">
          {index}
        </div>
        <div className="absolute w-[4px] h-full bg-[#D434FE]"></div>
      </div>
      <div className="pl-[40px] md:pl-[80px] flex">
        <h1 className="text-left self-end text-[#D434FE] font-mon  text-[24px] font-bold mb-[30px]">
          {date}
        </h1>
      </div>
    </div>
  );
};

export const TimelineRight = ({ title, content, index, date, end }) => {
  return (
    <div className="grid grid-cols-[1fr_70px_1fr]">
      <div className="pr-[40px] md:pr-[80px] flex">
        <h1 className="flex-1 text-right mb-[30px] self-end text-[#D434FE] font-mon  text-[24px] font-bold">
          {date}
        </h1>
      </div>
      <div className="relative flex justify-center">
        <div className="h-[65px] w-[65px] rounded-[50%] grid place-items-center text-white timeline-gradient-circle text-[24px] font-bold self-end mb-5 relative z-[1] border-[10px] border-[#150E28]">
          {index}
        </div>
        <div
          className={`absolute w-[4px] h-full bg-[#D434FE] ${
            end ? "bottom-5" : ""
          }`}
        ></div>
      </div>
      <div className="pl-[40px] md:pl-[80px] pb-5 pt-10 text-left">
        <h1 className="text-[#D434FE] font-mon  text-[24px] font-bold mb-2">
          {title}
        </h1>
        <p className="text-[14px] font-mon max-w-[488px] ml-0 mx-auto text-white">
          {content}
        </p>
      </div>
    </div>
  );
};

export const TimelineMobile = ({ title, content, index, date }) => {
  return (
    <div className="font-mon grid grid-cols-[36px_1fr] mb-5">
      <div className="relative flex justify-center">
        <div className="h-[30px] w-[30px] rounded-[50%] grid place-items-center text-white timeline-gradient-circle text-[12px] font-bold self-end relative z-[1] border-[6px] border-[#150E28]">
          {index}
        </div>
        <div className={`absolute w-[4px] h-full bg-[#D434FE]`}></div>
      </div>
      <div className="pb-[6px] text-left">
        <div className="min-h-[90px]">
          <h1 className="text-[#D434FE] font-bold mb-2 text-[12px]">{title}</h1>
          <p className="text-[12px] text-white">{content}</p>
        </div>
        <div className="flex pt-2">
          <h1 className="flex-1 self-end text-[#D434FE] font-mon  text-[12px] font-bold">
            {date}
          </h1>
        </div>
      </div>
    </div>
  );
};
