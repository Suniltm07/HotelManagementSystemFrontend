/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from 'react'
import RoomsService from '../Services/RoomsService';
import { useNavigate ,Link,useParams} from 'react-router-dom';

const AddRooms = () => {

    const [floor, setFloor] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState('')
    const [bookingStatus, setBookingStatus] = useState('')
    const navigate = useNavigate();
    const {roomId} = useParams();

    const saveOrUpdateBooks = (e) => {
        e.preventDefault();

        const room = {floor,type,price,bookingStatus}
         
        if(roomId){
            RoomsService.updateRooms(roomId,room).then((response)=>{
                navigate('/rooms')
            }).catch(error=>{
                console.log(error)
            })
        }else{

         RoomsService.addRooms(room).then((response)=>{
            console.log(response.data);
            navigate('/rooms');
            
         }).catch(error=>{
            console.log(error)
         })
        }
    }

    useEffect(() => {

        RoomsService.getRoomsById(roomId).then((response) =>{
            setFloor(response.data.floor)
            setType(response.data.type)
            setPrice(response.data.price)
            setBookingStatus(response.data.bookingStatus)
        }).catch(error => {
            console.log(error)
        })
    
    
    }, [])

    const title = () => {

        if(roomId){
            return <h2 className = "text-center">Update Rooms</h2>
        }
        else{
            return <h2 className = "text-center"> Add Rooms</h2>
        }
    }

  return (
    <div>
         <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                     {
                        title()
                     }
                       
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Floor :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter Floor"
                                        name = "floor"
                                        className = "form-control"
                                        value = {floor}
                                        onChange = {(e) => setFloor(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Type :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Type"
                                        name = "type"
                                        className = "form-control"
                                        value = {type}
                                        onChange = {(e) => setType(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Price :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter price"
                                        name = "price"
                                        className = "form-control"
                                        value = {price}
                                        onChange = {(e) => setPrice(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Booking Status :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Booking Status"
                                        name = "type"
                                        className = "form-control"
                                        value = {bookingStatus}
                                        onChange = {(e) => setBookingStatus(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateBooks(e)} >Submit </button>
                                <Link to="/rooms" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>
    </div>
  )
}
export default AddRooms;