import React, { useEffect, useState } from 'react';

const Candidate = () => {
  const [candidate, setCandidate] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/candidate').then(res=>res.json()).then(data=>setCandidate(data))
  },[])
    return (
        <div>
            <h2 className='text-2xl font-bold'>Candidate List</h2>
            <div class="overflow-x-auto">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Name</th> 
        <th>Date Of Birth </th> 
        <th>Email</th> 
        <th>Result</th> 
      </tr>
    </thead> 
    <tbody>
              {
                candidate.map((candi,index)=> <tr key={index}>
                  <th>{index}</th> 
                  <td>{candi.name}</td> 
                  <td>{candi.state}</td> 
                  <td>{candi.Address}</td> 
                  <td>
                  <select class="select select-bordered select-sm lg:w-2/4 md:3/4 w-full max-w-xs">
  
                  {
                        candi.result.map(select => <option>{select}</option>)   

                  }
                </select>
                   
                  </td> 
                </tr>)
     }
    </tbody> 
  </table>
</div>
        </div>
    );
};

export default Candidate;