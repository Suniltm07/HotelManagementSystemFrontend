import React, { useEffect, useState } from 'react'
import StaffService from '../Services/StaffService'
import { Link } from 'react-router-dom'

const ListStaff = () => {
 
    const [staff,setStaff] = useState([])

     useEffect(()=>{
      getAllStaff();
     },[])

      const getAllStaff=() =>{
        StaffService.getAllStaff().then((Response)=>{
          setStaff(Response.data)
          console.log(Response.data);
        }).catch(error=>{
          console.log(error);
        })
      }
    
      const deleteStaff=(code)=>{
        if(window.confirm("delete the record")){ StaffService.deleteStaff(code).then((Response)=>{
          getAllStaff();
        }).catch(error=>{
          console.log(error);
        })}
       
      }

    return (
    <div className="container">
      <h2 className="text-center"> List Staffs</h2>
      <Link to = "/add-staff" className = "btn btn-primary mb-2" > Add Staffs</Link>
      <table className="table table-bordered table-striped">
        <thead>
            <th> Code </th>
            <th> Employee Name </th>
            <th> Employee Address </th>
            <th> Salary </th>
            <th> Age </th>
            <th> Occupation </th>
            <th> EmailId </th>
            <th> Actions </th>
        </thead>
        <tbody>        
                {
                    staff.map(
                        staffs=>
                        <tr key={staffs.code}>
                            <td>{staffs.code}</td>
                            <td>{staffs.employeeName}</td>
                            <td>{staffs.employeeAddress}</td>
                            <td>{staffs.salary}</td>
                            <td>{staffs.age}</td>
                            <td>{staffs.occupation}</td>
                            <td>{staffs.emailId}</td>
                            <td>
                            <Link className="btn btn-info" to={`/edit-staff/${staffs.code}`} >Update</Link>
                            <button className = "btn btn-danger" onClick = {()=> deleteStaff(staffs.code)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                            </td>
                        </tr>
                    )
                }
        </tbody>
      </table>

    </div>
  )
}

export default ListStaff;
