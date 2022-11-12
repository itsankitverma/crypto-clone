import React from "react";

interface BoxProps {
  image: string;
  name: string;
  amount: string;
  subimg1: string;
  subimg2: string;
  subimg3: string;
  style: React.CSSProperties | undefined;
  percent: string;
}

const Box = ({
  image,
  name,
  amount,
  subimg1,
  subimg2,
  subimg3,
  style,
  percent,
}: BoxProps) => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen w-96 relative bg-[#14172b] ">
        <div className="relative w-40 h-40 bg-[#14172b] rounded-full z-10 bottom-48">
          <div className="w-full flex items-center justify-center h-full">
            <div className="relative w-32 h-32 bg-[#20202c] rounded-full z-20 ">
              <div className="w-full flex items-center justify-center h-full">
                <img
                  src={image}
                  className="relative w-20 h-20 bg-red-500 rounded-full z-20 "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 h-96 bg-gradient-to-b from- bg-[#1a1e33] rounded-2xl absolute flex justify-center border border-[#272b40] flex-col gap-4">
          <div className="flex items-center justify-center flex-col gap-2 mt-16">
            <span className="text-[#535875]">{name}</span>
            <span className="flex items-center p-1 bg-[#14172b] rounded-full gap-2 w-64 justify-center">
              <p className=" text-white p-1 text-center">{amount}</p>
              <p className="text-green-500" style={style}>
                {percent}
              </p>
            </span>
          </div>
          <div className="flex items-center justify-center flex-col gap-2">
            <span className="text-[#535875]">Price</span>
            <span className="flex items-center p-1 bg-[#14172b] rounded-full gap-2 w-64 justify-center">
              <p className=" text-white p-1 text-center">$60,000</p>
            </span>
          </div>
          <div className="flex items-center justify-center flex-col gap-2">
            <span className="text-[#535875]">TVL</span>
            <span className="flex items-center rounded-lg gap-2 w-48 justify-center">
              <img
                src={subimg1}
                className="relative w-7 bg-red-500 rounded-full "
                alt=""
              />
              <img
                src={subimg2}
                className="relative w-7 bg-red-500 rounded-full "
                alt=""
              />
              <img
                src={subimg3}
                className="relative w-7 bg-red-500 rounded-full "
                alt=""
              />
            </span>
          </div>
          <span className="text-[#535875] w-full text-center">
            Popular pairs
          </span>
        </div>
      </div>
    </div>
  );
};

export default Box;
