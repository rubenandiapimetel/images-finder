import { SHOW_IMAGE_FOUND, SAVE_IMAGE, DELETE_IMAGE } from "../actions/fotoAction.js"; 
	


export default function savedReducer(state =  {images: []}, action) {  //state siempre es un OBJETO`, dentro de images esta el array de urls
	switch(action.type){


		case "SAVE_IMAGE":
			return{
				images:[...state.images, action.payload],
				};
		case "DELETE_IMAGE":
			return{
			images:state.images.filter(image=>{
				return image != action.payload
			})
				};
		default:
			return state;
	}
}
const fil = ()=>{

}