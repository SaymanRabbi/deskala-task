import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
const CandidateCreation = () => {
    const navigate = useNavigate()
    const [selectedDate, setSelectedDate] = useState(null);
    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        const name = data.name;
        const address = data.adress;
        const email = data.email
        const age = data.number
        const pin = data.pin
        const date =(selectedDate.toString()).slice(0,15)
        const candidatedata = {
            name,address,email,age,pin,date
        } 
        fetch('http://localhost:5000/candidate', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(candidatedata)
        }).then(res => res.json()).then(data => {
            if (data.messages === 'sucess') {
                navigate('/candidate')
            }
        })

    };
    return (
        <div className='from-indigo-500 via-purple-500 to-pink-500' style={{ minHeight: '100vh' }}>
            <form action="" className=' lg:w-2/4 mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-2xl my-5'>Create Candidate</h2>
                <div className='flex gap-5'>
                <div class="form-control w-full ">
         <label class="label">
        <span class="label-text">What is your name?</span>   
         </label>
                        <input type="text" placeholder="Type Your Name" class="input input-bordered w-full" required {...register("name")} />
                    </div>
                    <div class="form-control w-full ">
         <label class="label">
        <span class="label-text">Your Address</span>   
         </label>
          <input type="text" placeholder="Type Your Address" class="input input-bordered w-full" required {...register("adress")}/>
        </div>
                </div>
                  <div className='flex gap-5'>
                <div class="form-control w-full ">
         <label class="label">
        <span class="label-text">Date Of Birth</span>   
         </label>
         <DatePicker
                  name="date"
                  className="w-full max-w-lg input-bordered input"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText={"DD/MM/YYYY"}
                  showYearDropdown
                    required
                    withPortal
                            scrollableYearDropdown
                            
                />
                    </div>
                    <div class="form-control w-full ">
         <label class="label">
        <span class="label-text">Your Email</span>   
         </label>
          <input type="email" placeholder="Your Email" class="input input-bordered w-full"  required {...register("email")}/>
        </div>
                </div> 
                <div className='flex gap-5'>
                <div class="form-control w-full ">
         <label class="label">
        <span class="label-text">Your Age</span>   
         </label>
         <input type="number" placeholder="Your Age" class="input input-bordered w-full" required {...register("number")}/>
                    </div>
                    <div class="form-control w-full ">
         <label class="label">
        <span class="label-text">Pin Code</span>   
         </label>
          <input type="number" placeholder="6 Digit Pin Code" class="input input-bordered w-full" required {...register("pin")}/>
        </div>
                </div>
                <div className='flex gap-4 mt-5 justify-end'>
                <Link to='/candidate'><button className='btn btn-outline' type="button">Cancle</button></Link>
                <button type='submit' className='btn  btn-info text-white'>Create</button>
                </div>
            </form>
        </div>
    );
};

export default CandidateCreation;