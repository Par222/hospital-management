import Card from "../../components/common/Card";
import LoginForm from "../../components/login/LoginForm";
import styles from "../../styles/Login.module.css";

const Index = () => {
  return (
    <div className="w-full h-[100vh]  bg-gradient-to-r from-tertiaryblue-60 to-tertiaryblue-50 flex justify-center items-center">
      <div className="w-[70%] h-[80%] ">
        <Card className = "h-[625px] bg-white" >
          <div className="flex w-[60%] h-full rounded-lg">
            <img
              src="https://images.pexels.com/photos/5452196/pexels-photo-5452196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="rounded-lg rounded-tr-3xl rounded-br-[3xl]"
            ></img>
          </div>
          <div className=" h-full w-[40%] flex flex-col justify-center items-center">
            <div className="flex  space-x-4 items-center">
              <h1
                className="text-3xl font-bold mb-5 text-slate-800"
                id={styles.title}
              >
                MediCare
              </h1>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                width="50px"
                height="40px"
              >
                <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zM112 144c0-8.8 7.2-16 16-16h48V80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240v48c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16V192H128c-8.8 0-16-7.2-16-16V144z" />
              </svg>
             
            </div>
            <LoginForm></LoginForm>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default Index;
