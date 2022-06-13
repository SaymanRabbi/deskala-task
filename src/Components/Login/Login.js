import React from 'react';
import { useForm } from "react-hook-form";
const Login = () => {





    
    return (
       
<div class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded text-black w-full shadow-2xl">
                    <h1 class="mb-8 text-3xl text-center">Sign Up</h1>
                    <form action="">
                    <label htmlFor="" className='mb-2'>Email Id</label>
                    <input 
                        type="email"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Your Email" required/>
                   <label htmlFor="" className='mb-2'>Phone Number</label>
                    <input 
                        type="number"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="number"
                        placeholder="Phone Number" required/>
                     <label htmlFor="" className='mb-2'>Password</label>
                    <div>
                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-2"
                        name="password"
                            placeholder="Password" required />
                        <span className='text-end block text-cyan-400 mb-2'>Password Minumum 10 Digit</span>
                    </div>
                      
                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                    >Create Account</button>
                    </form>
                    <div className='mt-2 text-end text-cyan-400 font-bold'>
                        <p>Alredy Have A Account! login?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;