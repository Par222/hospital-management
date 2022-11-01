import DepartmentCore from "./DepartmentCore";
import Pills from "../common/icons/Pills";
const Department = () => {
  return (
    <div className="">
      <div className="flex flex-col w-[100%] items-center">
        <div className="font-Heading text-base text-tertiaryblue-50 font-semibold">
        Our Services
        </div>
        <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5">
          <span>Our Healthcare <span className="text-tertiaryblue-50">Services</span></span>
         
        </div>
        <div className="flex w-[60%] flex-wrap mt-8 font-Heading text-lg text-blackShade-50 text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
      </div>
      <div className="flex w-[100%] flex-wrap">
        <DepartmentCore id="dep" title="Medicine"><Pills></Pills></DepartmentCore>
        <DepartmentCore id="dep" title="Medicine"><Pills></Pills></DepartmentCore>
        <DepartmentCore id="dep" title="Medicine"><Pills></Pills></DepartmentCore>
        <DepartmentCore id="dep" title="Medicine"><Pills></Pills></DepartmentCore>
        <DepartmentCore id="dep" title="Medicine"><Pills></Pills></DepartmentCore>
        <DepartmentCore id="dep" title="Medicine"><Pills></Pills></DepartmentCore>
      </div>
    </div>
  );
};
export default Department;
