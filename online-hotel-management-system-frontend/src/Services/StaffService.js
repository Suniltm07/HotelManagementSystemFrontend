import axios from "axios";
 
const Staff_URL= 'http://localhost:8091/staffcontroller/staff';

class StaffService{
    
    getAllStaff(){
        return axios.get(Staff_URL)
    }

    addStaff(staff){
        return axios.post(Staff_URL,staff)
    }

    getStaffById(code){
        return axios.get(Staff_URL+'/'+code)
    }
    updateStaff(code,staff){
        return axios.put(Staff_URL+'/'+code,staff);
    }
    deleteStaff(code){
        return axios.delete(Staff_URL+'/'+code);
    }
}

export default new StaffService();