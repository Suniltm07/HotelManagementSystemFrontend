import axios from "axios";
 
const ROOMS_URL= 'http://localhost:8092/roomscontroller/allrooms';
const ROOMS_ADD_URL='http://localhost:8092/roomscontroller/addrooms';
const ROOMS_GETBYID_URL='http://localhost:8092/roomscontroller/rooms';
const ROOMS_UPDATE_URL='http://localhost:8092/roomscontroller/updaterooms';
const ROOMS_DELETE_URL='http://localhost:8092/roomscontroller/deleterooms';

class RoomsService{
    
    getAllRooms(){
        return axios.get(ROOMS_URL)
    }

    addRooms(rooms){
        return axios.post(ROOMS_ADD_URL,rooms)
    }

    getRoomsById(roomId){
        return axios.get(ROOMS_GETBYID_URL+'/'+roomId)
    }
    updateRooms(roomId,rooms){
        return axios.put(ROOMS_UPDATE_URL+'/'+roomId,rooms);
    }
    deleteRooms(roomId){
        return axios.delete(ROOMS_DELETE_URL+'/'+roomId);
    }
}

export default new RoomsService();