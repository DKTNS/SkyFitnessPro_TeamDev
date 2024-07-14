import CallText from "../CallText/CallText";

export default function LowStartMan() {
  return (
    <div className="container relative mb-10 mt-20 flex w-auto rounded-blockRadius shadow-[0_4px_67px_-12px_rgba(0,0,0,0.13)]">
      <div className="flex flex-row-reverse rounded-blockRadius">
        <div className="flex h-80 justify-around pl-96">
          <div className="w-full] h-full">
            <div className="absolute z-20 pt-16">
              <svg className="h-12">
                <use xlinkHref="/icons/sprite.svg#icon-arc-small" />
              </svg>
            </div>
            <div className="absolute z-10">
              <img
                className=" "
                src="/images/images_full/low_start_man_hd.png"
              />
            </div>
            <div className="absolute z-0 pt-36">
              <svg className="h-[390px] w-[670px]">
                <use xlinkHref="/icons/sprite.svg#icon-arc-big " />
              </svg>
            </div>
          </div>
        </div>
        <CallText />
      </div>
    </div>
  );
}
