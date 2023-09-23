import { useState } from "react";
import RegisterBox from "../Components/RegisterBox";
import image from '../assets/register.png';

const Register = () => {

    return (
        <main className="px-[8%] w-full flex md:flex-row flex-col gap-8 md:gap-0 justify-between my-12 md:my-20 items-center">
            <div className="w-full md:w-4/12">
                <img src={image} alt="" />
            </div>
            <RegisterBox />
        </main>
  )
}

export default Register