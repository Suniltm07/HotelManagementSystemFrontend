import axios from "axios";
 
const GUEST_URL= 'http://localhost:8092/guest/allguests';
const GUEST_ADD_URL='http://localhost:8092/guest/addguest';
const GUEST_GETBYID_URL='http://localhost:8092/guest/guestbyid';
const GUEST_UPDATE_URL='http://localhost:8092/guest/updateguest';
const GUEST_DELETE_URL='http://localhost:8092/guest/deleteguest';

class GuestService{
    
    getAllGuest(){
        return axios.get(GUEST_URL)
    }

    addGuest(guest){
        return axios.post(GUEST_ADD_URL,guest)
    }

    getGuestById(memberCode){
        return axios.get(GUEST_GETBYID_URL+'/'+memberCode)
    }
    updateGuest(memberCode,guest){
        return axios.put(GUEST_UPDATE_URL+'/'+memberCode,guest);
    }
    deleteGuest(memberCode){
        return axios.delete( GUEST_DELETE_URL+'/'+memberCode);
    }
}

export default new GuestService();