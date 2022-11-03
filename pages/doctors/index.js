import { useRef, useState } from "react";
import NavBar from "../../components/common/NavBar";
import DoctorList from "../../components/doctor/DoctorList";
import styles from "../../styles/Home.module.css";
import SearchIcon from "../../components/common/icons/Search";
const Index = (props) => {
  const [fees, setFees] = useState("any");
  const [type, setType] = useState("All");
  const [keyWord, setkeyWord] = useState("");
  const filterHandler = (event) => {
    setType(event.target.value);
  };

  const feesHandler = (e) => {
    setFees(e.target.value);
  };
  const handleSearch = () => {};
  const categories = [
    "All",
    "Heart",
    "Eyes",
    " Lungs",
    "Tooth",
    "Brain",
    "Skin",
  ];
  return (
    /*<div>
      <NavBar></NavBar>
      <div className="bg-blue-900 py-5 px-10 flex">
        <form className="flex justify-evenly w-[100%] mx-4 items-center">
          <label htmlFor="doctors" className="text-xl text-white font-semibold">
            Select doctor type
          </label>
          <select
            name="doctors"
            onChange={filterHandler}
            className="rounded-md w-[20%] border border-blue-900 bg-blue-100 px-2 py-1"
          >
            <option value="all">All</option>
            <option value="eyes">Eye</option>
            <option value="ent">ENT</option>
            <option value="teeth">Teeth</option>
            <option value="skin">Skin</option>
            <option value="stomach">Stomach</option>
          </select>
          <label></label>
          <label htmlFor="doctors" className="text-xl text-white font-semibold">
            Select consultation fees
          </label>
          <select
            name="doctors"
            onChange={feesHandler}
            className="rounded-md w-[20%] border border-blue-900 bg-blue-100 px-2 py-1"
          >
            <option value="any">Any</option>
            <option value="500">Below 500</option>
            <option value="1000">Below 1000</option>
            <option value="1500">Below 1500</option>
            <option value="2000">Below 2000</option>
          </select>
        </form>
      </div>
      <DoctorList fees={fees} type={type}></DoctorList>
    </div>*/
    <>
      <NavBar></NavBar>
      <div className={`h-[700px] flex ${styles.doc}`}>
        <div className="flex flex-col mt-[8%] ml-[10%] justify-center  ">
          <div className="font-Heading text-lg text-tertiaryblue-50 font-semibold">
            Our Doctors
          </div>
          <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5">
            <span>All the Expertise For Your Health</span>
          </div>
          <div className="flex w-[60%] flex-wrap mt-8 font-Heading text-lg text-tertiarywhite-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[100%] items-center my-4">
        <div className="font-Heading text-base text-tertiaryblue-50 font-semibold">
          Our Doctor's
        </div>
        <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5">
          <span>Our Expert Doctor's</span>
        </div>
        <div className="flex w-[60%] flex-wrap mt-8 font-Heading text-lg text-blackShade-50 text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
      </div>
      <div className="mx-[20%] my-10">
        <form className="flex items-center  ">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full  mt-8">
            <div className="flex absolute inset-y-0 left-0 items-center pl-6 cursor-pointer">
              <SearchIcon />
            </div>
            <input
              type="text"
              className="border   border-tertiarygrey-200  font-display focus:outline-none text-sm  block w-[60%] pl-14 p-3  rounded-full "
              placeholder="Search"
              value={keyWord}
              onChange={(event) => {
                setkeyWord(event.target.value);
              }}
              onKeyDown={handleSearch}
            />
          </div>
        </form>
        <div className="flex w-full justify-center my-5 bg-tertiarywhite-50 rounded-full px-2 cursor-pointer">
          {categories &&
            categories.map((cat) => (
              <div
                className={
                  type == cat
                    ? "font-Heading flex w-[20%] justify-center  py-3 px-2 rounded-full bg-tertiaryblue-50 text-tertiarywhite-50"
                    : "font-Heading flex w-[20%]  py-3 px-2 rounded-full justify-center"
                }
                onClick={() => setType(cat)}
              >
                {cat}
              </div>
            ))}
        </div>
      </div>
      <div>
        <DoctorList></DoctorList>
      </div>
    </>
  );
};
export default Index;
