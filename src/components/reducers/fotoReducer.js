import { SHOW_IMAGE_FOUND } from "../actions/fotoAction.js"; 



export default function fotoReducer(state = [], action) {
	switch(action.type){
		case "INIT":
			return{
				images: action.payload,
			};
		case "SHOW_IMAGE_FOUND":
			return{
				images:action.payload,
			};
		default:
			return state;
	}
}


