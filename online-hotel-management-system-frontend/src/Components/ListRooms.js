import React, { useEffect, useState } from 'react'
import RoomsService from '../Services/RoomsService'
import { Link } from 'react-router-dom'

const ListRooms = () => {
 
    const [rooms,setRooms] = useState([])

     useEffect(()=>{
        getAllRooms();
     },[])

      const getAllRooms=() =>{
        RoomsService.getAllRooms().then((Response)=>{
          setRooms(Response.data)
          console.log(Response.data);
        }).catch(error=>{
          console.log(error);
        })
      }
    
      const deleteRooms=(roomId)=>{
        RoomsService.deleteRooms(roomId).then((Response)=>{
          getAllRooms();
        }).catch(error=>{
          console.log(error);
        })
      }

    return (
    <div className="container">
      <h2 className="text-center"> List Rooms </h2>
      <Link to = "/add-room" className = "btn btn-primary mb-2" > Add Rooms </Link>
      <table className="table table-bordered table-striped">
        <thead>
            <th> Rooms Id </th>
            <th> Floor</th>
            <th> Type </th>
            <th> Price </th>
            <th> Booking Status </th>
            <th> Actions </th>
        </thead>
        <tbody>        
                {
                    rooms.map(
                        room=>
                        <tr key={room.roomId}>
                            <td>{room.roomId}</td>
                            <td>{room.floor}</td>
                            <td>{room.type}</td>
                            <td>{room.price}</td>
                            <td>{room.bookingStatus}</td>
                            <td>
                            <Link className="btn btn-info" to={`/edit-room/${room.roomId}`} > Update </Link>
                            <button className = "btn btn-danger" onClick = {()=> deleteRooms(room.roomId)}
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

export default ListRooms;