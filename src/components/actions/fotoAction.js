export const SHOW_IMAGE_FOUND = "SHOW_IMAGE_FOUND"
export const SAVE_IMAGE = "SAVE_IMAGE"
export const DELETE_IMAGE = "DELETE_IMAGE"

export const SET_FOTO = (state)=>{
	return{
		type:SHOW_IMAGE_FOUND,
		payload:state,
	}
} 

export const SAVE_IM = (state)=>{
	return{
		type:SAVE_IMAGE,
		payload:state,
	}
} 

export const DELETE_IM = (state)=>{
	return{
		type:DELETE_IMAGE,
		payload:state,
	}
} 


//esta vale para los dos reducers