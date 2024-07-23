type FitttingType = {
  fittings: string[];
};

export default function FittingText({ fittings }: FitttingType) {
  return (
    <div className="container mx-auto mt-10  md:my-14.5">
      <p className="pb-3.5 text-2xl font-bold md:pb-10 md:text-5xl">
        Подойдет для вас, если:
      </p>
      <div className="align-items-center container mx-auto flex flex-col  md:flex-row md:gap-4">
        {fittings.map((fitting) => (
          <div className="my-2.5 w-full border-spacing-2 md:w-4/12">
            <div className="items-centr rounded-blockRadius box-border flex h-36 bg-black">
              <div className="flex items-center p-5">
                <h2 className="pr-5 text-7xl font-medium text-mainColor">
                  {fittings.indexOf(fitting) + 1}
                </h2>
                <h2 className="text-lg/5 font-normal text-white md:text-2xl">
                  {fitting}{" "}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
