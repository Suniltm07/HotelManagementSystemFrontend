import React, {useState,useEffect} from 'react'
import GuestService from '../Services/GuestService';
import { useNavigate ,Link,useParams} from 'react-router-dom';

const AddGuest = () => {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [company, setCompany] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')
    const navigate = useNavigate();
    const {memberCode} = useParams();

    const saveOrUpdateBooks = (e) => {
        e.preventDefault();

        const guests = {phoneNumber,company,name,email,gender,address}
         
        if(memberCode){
            GuestService.updateGuest(memberCode,guests).then((response)=>{
                navigate('/guests')
            }).catch(error=>{
                console.log(error)
            })
        }else{

         GuestService.addGuest(guests).then((response)=>{
            console.log(response.data);
            navigate('/guests');
            
         }).catch(error=>{
            console.log(error)
         })
        }
    }

    useEffect(() => {

        GuestService.getGuestById(memberCode).then((response) =>{
            setPhoneNumber(response.data.phoneNumber)
            setCompany(response.data.company)
            setName(response.data.name)
            setEmail(response.data.email)
            setGender(response.data.gender)
            setAddress(response.data.address)
            
        }).catch(error => {
            console.log(error)
        })
    
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const title = () => {

        if(memberCode){
            return <h2 className = "text-center">Update Guest </h2>
        }
        else{
            return <h2 className = "text-center"> Add Guest </h2>
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
                                    <label className = "form-label"> Phone Number : </label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter Phone Number "
                                        name = "phoneNumber"
                                        className = "form-control"
                                        value = {phoneNumber}
                                        onChange = {(e) => setPhoneNumber(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Company :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Company"
                                        name = "company"
                                        className = "form-control"
                                        value = {company}
                                        onChange = {(e) => setCompany(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Name"
                                        name = "name"
                                        className = "form-control"
                                        value = {name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter Email"
                                        name = "email"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Gender :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Gender"
                                        name = "gender"
                                        className = "form-control"
                                        value = {gender}
                                        onChange = {(e) => setGender(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Address"
                                        name = "address"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateBooks(e)} > Submit </button>
                                <Link to="/guests" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>
    </div>
  )
}
export default AddGuest;