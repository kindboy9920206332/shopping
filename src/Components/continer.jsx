export default function Container({ children }) {
  return (
    <>
      <div className="lg:w-[921px] xl:w-[1100px] 2xl:w-[1280px]  md:w-[750px] sm:w-[620px] w-[90%]  mx-auto">
        {children}
      </div>
    </>
  );
}
