import Link from "next/link";
const NavBar = (props) => {
  return (
    <div className="flex justify-around  bg-blue-500 items-center w-full">
      <div className="text-white font-bold px-10 py-5 text-4xl flex space-x-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="50"
          height="50"
        >
          <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zM112 144c0-8.8 7.2-16 16-16h48V80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240v48c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16V192H128c-8.8 0-16-7.2-16-16V144z" />
        </svg>
        <span>MediCare</span>
      </div>
      <div>
        <ul className="flex space-x-20 text-white text-lg my-0 h-full w-[100%]">
          <li className="list-none hover:border-b-4 border-white py-6 transition-all font-semibold">
            <Link href="/patient">
              <a>Home</a>
            </Link>
          </li>
          <li className="list-none hover:border-b-4 border-white py-6 transition-all font-semibold">
            <Link href="/doctors">
              <a>View Doctors</a>
            </Link>
          </li>
          <li className="list-none hover:border-b-4 border-white py-6 transition-all font-semibold">
            <Link href="/appointments">
              <a>Appointments</a>
            </Link>
          </li>
          <li className="list-none hover:border-b-4 border-white py-6 transition-all font-semibold">
            <Link href="/ambulance">
              <a>Ambulance</a>
            </Link>
          </li>
          <li className="list-none  py-3 transition-all ">
            <Link href="/profile">
              <a>
                {" "}
                <div className=" border-2 border-black rounded-full px-2 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="30"
                    height="30"
                  >
                    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                  </svg>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
