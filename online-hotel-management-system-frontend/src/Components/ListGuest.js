import React, { useEffect, useState } from 'react'
import GuestService from '../Services/GuestService'
import { Link } from 'react-router-dom'

const ListGuest = () => {
 
    const [guest,setGuest] = useState([])

     useEffect(()=>{
      getAllGuest();
     },[])

      const getAllGuest=() =>{
        GuestService.getAllGuest().then((Response)=>{
          setGuest(Response.data)
          console.log(Response.data);
        }).catch(error=>{
          console.log(error);
        })
      }
    
      const deleteGuest=(memberCode)=>{
        GuestService.deleteGuest(memberCode).then((Response)=>{
          getAllGuest();
        }).catch(error=>{
          console.log(error);
        })
      }

    return (
    <div className="container">
      <h2 className="text-center"> List Guests</h2>
      <Link to = "/add-guest" className = "btn btn-primary mb-2" > Add Guests</Link>
      <table className="table table-bordered table-striped">
        <thead>
            <th> Member Code </th>
            <th> Phone Number </th>
            <th> Company </th>
            <th> Name </th>
            <th> Email </th>
            <th> Gender </th>
            <th> Address </th>
            <th> Actions </th>
        </thead>
        <tbody>        
                {
                    guest.map(
                        guests=>
                        <tr key={guests.memberCode}>
                            <td>{guests.memberCode}</td>
                            <td>{guests.phoneNumber}</td>
                            <td>{guests.company}</td>
                            <td>{guests.name}</td>
                            <td>{guests.email}</td>
                            <td>{guests.gender}</td>
                            <td>{guests.address}</td>
                            <td>
                            <Link className="btn btn-info" to={`/edit-guest/${guests.memberCode}`} > Update </Link>
                            <button className = "btn btn-danger" onClick = {()=> deleteGuest(guests.memberCode)}
                                    style = {{marginLeft:"10px"}}> Delete </button>
                            </td>
                        </tr>
                    )
                }
        </tbody>
      </table>

    </div>
  )
}

export default ListGuest;