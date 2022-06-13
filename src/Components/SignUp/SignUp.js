import React from 'react';
import { useForm } from "react-hook-form";
import {Link } from "react-router-dom";

const SignUp = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (   
<div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div class="bg-white px-6 py-8 rounded text-black w-full shadow-2xl">
                    <h1 class="mb-8 text-3xl text-center">Sign Up</h1>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>

                        {/* Email Filed============== */}
                        <div>
                        <label htmlFor="" className='mb-2'>Email Id</label>
                        <input 
                        type="email"
                        class="block outline-none border border-grey-light w-full p-3 rounded mb-2"
                        name="email"
                                placeholder="Your Email" {...register("email", {
                                    pattern:
                                        {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                            message:'Input Valid Email'
                                     }
                                    , required: {
                                        value: true,
                                        message:"Email Field Is Required"
                                        }
                                })} />
                            {errors.email?.type === 'pattern' && <span className='text-red-400'>{errors.email.message}</span>}
                            {errors.email?.type === 'required' && <span className='text-red-400'>{errors.email.message}</span>}
                        </div>

                        {/* Phone Number Field============= */}
                        <div>
                        <label htmlFor="" className='mb-2'>Phone Number</label>
                    <input 
                        type="number"
                        class="block border outline-none border-grey-light w-full p-3 rounded mb-2"
                        name="number"
                                placeholder="Phone Number" {...register("phone", {
                                    pattern:/^\d{10}$/, required: {
                                        value: true,
                                        message:"Number Field Required"
                                } })} />
                            {errors.phone?.type === 'pattern' && <span className='text-red-400'>Number Should Be 10 Digit</span>}
                            {errors.phone?.type === 'required' && <span className='text-red-400'>{errors.phone.message}</span>}
                       </div>
                        
                        {/* PassWord Filed ====================*/}
                        <div>
                        <label htmlFor="" className='mb-2'>Password</label>
                        <input 
                        type="password"
                        class="block border outline-none border-grey-light w-full p-3 rounded mb-2"
                        name="password"
                                placeholder="Password" {...register("password", {
                                    pattern: {
                                        value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
                                        message:"One Uppercase , One lowercase, One Numeric, One Special Character"
                                    }, required: {
                                        value: true,
                                        message:"Password Field Is Required"
                            } })} />
                            
                            {errors.password?.type === 'pattern' && <span className='text-red-400'>{errors.password.message}</span>}
                            {errors.password?.type === 'required' && <span className='text-red-400'>{errors.password.message}</span>}
                    </div>
                      
                    <button
                        type="submit"
                        class="w-full text-center py-3 rounded bg-green text-white bg-gradient-to-r from-cyan-500 to-blue-500"
                    >Create Account</button>
                    </form>
                    <div className='mt-2 text-end text-cyan-400 font-bold'>
                        <p>Alredy Have A Account! <Link className='to-blue-500' to='/'>Login</Link> ?</p>
                    </div>
                </div>
            </div>
</div>
    );
};

export default SignUp;