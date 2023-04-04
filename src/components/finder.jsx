import * as React from 'react';
import { Search } from '@mui/icons-material';
import { useState, useEffect } from 'react';
//import the action to do
import {SET_FOTO}  from './actions/fotoAction';
import {useSelector, useDispatch} from 'react-redux'; 

 function Finder() {
  const dispatch = useDispatch();
	const currentSearch = useSelector(store => store.fotos.images);
	console.log(currentSearch);

   //useSelector recibe un store como param y extrae images de fotoReducer

  const findResults = async(e)=>
  {e.preventDefault();
    const value = e.target.note.value;
    console.log(value);
    const API_KEY = '1nxf8Pj2KIofLQj84-Oz7wdUZdlRNJFV6bkBbZfpsVo';
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${value}`;
    fetch(URL)
		.then((response) => response.json())
		.then((data) => {dispatch(SET_FOTO(data.results));})
    //ME QUEDA HACER QUE CAMBIE A SHOWIMAGEFOUND Y CAMBIAR EL USESELECOTR PARA QUE EL MAP LO LEA
  }

   return (
     <div
       style={{
         position: "relative",
         width: "100%",
         height: "500px",
         background: "rgba(255, 194, 120, 1)",
       }}
     >
       <div
         style={{
           position: "absolute",
           marginLeft: "10%",
           marginRight: "10%",
           width: "80%",
           marginTop: "50px",
           marginBottom: "50px",
           justifyContent: "center",
           height: "400px",
           background:
             "linear-gradient(94deg, rgba(58,1,123,1) 13%, rgba(89,0,172,1) 46%, rgba(119,0,255,1) 79%)",
           borderRadius: "30px",
         }}
       >
         <div
           style={{
             marginLeft: "35%",
             marginRight: "30%",

             marginTop: "50px",
             justifyContent: "center",
             height: "180px",
           }}
         >
           <br />
           <h2 style={{}}>More than 4M of images in HD </h2>
           <h4>Find and save your favorite images</h4>
         </div>
         <div
           style={{
             display: "block",

             marginLeft: "35%",
             marginRight: "20%",
             marginTop: "2rem",
             justifyContent: "center",
           }}
         >
           <form onSubmit={findResults}
             className="search"
             style={{
               display: "flex",
             }}
           >
             <input name='note'
               type="text"
               className="search -input"
               placeholder="buscar imagen"
               /* onChange={e =>setSearch(e.target.value)} */
               /* onChange={(e) => dispatch(SET_FOTO(e.target.value))} */
               /* onChange={(e) => dispatch(SET_FOTO(e.target.value))} */
               style={{
                 height: "4rem",
                 border: "3px solid rgba(255, 194, 120, 1)",
                 borderRight: "0",
                 borderRadius: "1rem 0 0 1rem",
                 backgroundColor: "#ffffff",
                 width: "40%",
               }}
             />
             <button
               type="submit"
               /* onClick={e =>findResults(e)} */
               /* onClick={(e) => dispatch(SET_FOTO(e.target))} */
               style={{
                 cursor: "pointer",
                 display: "flex",
                 justifyContent: "center",
                 alignItems: "center",
                 width: "4rem",
                 border: "2px solid rgba(255, 194, 120, 1)",
                 borderLeft: "0",
                 borderRadius: "0 1rem 1rem 0",
                 backgroundColor: "#0a0a0a",
                 color: "#fff",
               }}
             >
               <Search sx={{}} />
             </button>
           </form>
         </div>
       </div>
     </div>
   );
 }

export default Finder;