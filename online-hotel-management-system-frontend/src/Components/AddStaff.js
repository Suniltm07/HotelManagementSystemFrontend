import React, {useState,useEffect} from 'react'
import StaffService from '../Services/StaffService';
import { useNavigate ,Link,useParams} from 'react-router-dom';

const AddStaff = () => {

    const [employeeName, setEmployeeName] = useState('')
    const [employeeAddress, setEmployeeAddress] = useState('')
    const [salary, setSalary] = useState('')
    const [age, setAge] = useState('')
    const [occupation, setOccupation] = useState('')
    const [emailId, setEmailId] = useState('')
    const navigate = useNavigate();
    const {code} = useParams();

    const saveOrUpdateBooks = (e) => {
        e.preventDefault();

        const staffs = {employeeName,employeeAddress,salary,age,occupation,emailId}
         
        if(code){
            StaffService.updateStaff(code,staffs).then((response)=>{
                navigate('/staffs')
            }).catch(error=>{
                console.log(error)
            })
        }else{

         StaffService.addStaff(staffs).then((response)=>{
            console.log(response.data);
            navigate('/staffs');
            
         }).catch(error=>{
            console.log(error)
         })
        }
    }

    useEffect(() => {

        StaffService.getStaffById(code).then((response) =>{
            setEmployeeName(response.data.employeeName)
            setEmployeeAddress(response.data.employeeAddress)
            setSalary(response.data.salary)
            setAge(response.data.salary)
            setOccupation(response.data.occupation)
            setEmailId(response.data.emailId)
            
        }).catch(error => {
            console.log(error)
        })
    
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const title = () => {

        if(code){
            return <h2 className = "text-center">Update Staff</h2>
        }
        else{
            return <h2 className = "text-center"> Add Staff</h2>
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
                                    <label className = "form-label"> employee Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter employee name"
                                        name = "employeeName"
                                        className = "form-control"
                                        value = {employeeName}
                                        onChange = {(e) => setEmployeeName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Employee Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter employee address"
                                        name = "employeeAddress"
                                        className = "form-control"
                                        value = {employeeAddress}
                                        onChange = {(e) => setEmployeeAddress(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Salary :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter salary"
                                        name = "salary"
                                        className = "form-control"
                                        value = {salary}
                                        onChange = {(e) => setSalary(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Age :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter age"
                                        name = "age"
                                        className = "form-control"
                                        value = {age}
                                        onChange = {(e) => setAge(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Occupation :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter occupation"
                                        name = "occupation"
                                        className = "form-control"
                                        value = {occupation}
                                        onChange = {(e) => setOccupation(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter emailId"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateBooks(e)} >Submit </button>
                                <Link to="/staffs" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>
    </div>
  )
}
export default AddStaff;