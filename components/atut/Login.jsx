import Image from "next/image";
import Lottie from 'react-lottie-player';
import ChurchAnimation from '../../public/Church.json';
import { useState } from "react";

const Login = () => {
  const [ isShow , setIsShow ] = useState(false);

  const PasswordShowBtn = () => {
    if(isShow){
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
      )
    }

    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21">
        </path>
      </svg>
    )
  }

  return(
    <div className="flex flex-col text-left justify-center items-center" style={{ height: '100%' }}>
      <div class="lg:flex items-center space-x-16">
        <div className="flex items-center justify-center">
          <Lottie
            loop
            animationData={ChurchAnimation}
            play
            style={{ width: 500, height: 500 }}
          />
        </div>
        <div class="w-5/6 md:w-3/4 lg:w-2/3 xl:w-[500px] 2xl:w-[550px] mt-8 mx-auto px-16 py-8 rounded-lg">
          <div className="flex justify-center gap-4 h-10">
            <Image src='/img/dongan.png' alt='dongan' width={40} height={40} />
            <h2 className="text-2xl font-bold text-gray-800 text-center leading-10">
              동안 청소년 2부 출석부
            </h2>
          </div>
          <form className="my-8 text-sm" >
            <div className="flex flex-col my-4">
              <label for="email" className="text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="userEmail"
                id="userEmail"

                placeholder="Please insert your email"
                className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:shadow-lg bg-white text-black"
              />
            </div>
            <div className="flex flex-col my-4">
              <label for="password" className="text-gray-700">
                비밀번호
              </label>
              <div className="relative flex items-center mt-2">
                <input
                  type={ isShow ? 'text': 'password'}
                  name="password"
                  id="password"
                  placeholder="Please insert your password"
                  className="flex-1 appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:shadow-lg bg-white text-black"
                />
                <button onClick={() => setIsShow(!isShow)} type="button" className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                  <PasswordShowBtn />
                </button>
              </div>
            </div> 
              <div id="button" className="flex flex-col w-full my-5">
                <button
                  type="button"
                  className="w-full py-4 bg-[#F8BD8D] rounded-lg text-whit"
                >
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-2">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        ></path>
                      </svg>
                    </div>
                    <div className="font-bold">Sigin</div>
                  </div>
                </button>
                <div className="flex justify-evenly mt-5">
                  <a
                    href="#"
                    className="w-full text-center font-medium text-gray-500"
                  >
                    Recover password!
                  </a>
                  <a
                    href="/auth/join"
                    className="w-full text-center font-medium text-gray-500"
                  >
                    Singup!
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    
  )
}

export default Login