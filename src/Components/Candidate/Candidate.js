import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan,faPen } from '@fortawesome/free-solid-svg-icons'
import { useQuery, } from 'react-query'
import {Link} from "react-router-dom";
const Candidate = () => {

  const { data, isLoading,refetch} = useQuery('cadidatedata', () => fetch('https://deskala-server.herokuapp.com/candidate').then(res => res.json()))
  if (isLoading) {
    return
  }
  const deletecandidate =(id) => {
    fetch(`https://deskala-server.herokuapp.com/candidate?id=${id}`, {
      method: "DELETE"
    }).then(res => res.json()).then(data => {
      console.log(data)
      refetch()
     })
  }
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
                data.map((candi,index)=> <tr key={index}>
                  <th>{index}</th> 
                  <td>{candi?.name}</td> 
                  <td>{candi?.date}</td> 
                  <td>{candi?.email}</td> 
                  <td>
                  <select class="select select-bordered select-sm lg:w-2/4 md:3/4 w-full max-w-xs">
                   <option>Shortlist</option>
                   <option>Rejected</option>
                      
                  </select>
                    <FontAwesomeIcon className=' text-cyan-400 text-xl ml-5 cursor-pointer' icon={faTrashCan} onClick={()=>deletecandidate(candi._id)} />
                    <FontAwesomeIcon className=' text-cyan-400 text-xl ml-5 cursor-pointer' icon={faPen}/>
                  </td> 
                </tr>)
     }
    </tbody> 
          </table>
          <Link to='/candidateform'><h2 className='text-xl text-cyan-500 cursor-pointer'>+ add new candidate</h2></Link>
</div>
        </div>
    );
};

export default Candidate;