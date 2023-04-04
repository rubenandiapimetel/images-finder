import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './styles/image.css'
import { useEffect } from 'react';
import { Modal, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import 'bootstrap/dist/css/bootstrap.css';
import { DELETE_IM, SAVE_IM } from './actions/fotoAction';

function Images(){
	const [saved, setSaved]= useState(false)
	const [clicked, setclicked] = useState(false);
	const dispatch = useDispatch();
	const currentSearch = useSelector(store => store.fotos.images);
  const added_fav = useSelector(store => store.saved.images);
	const [element, setElement] = useState('');
	console.log(currentSearch);
	const toggle = () => {
    setSaved(false);
    
    setclicked(!clicked);
    console.log(added_fav)}

  var store_saved = false;
	const click_save = ()=>{
		setSaved( saved?false:true);
    store_saved = (saved?false:true)
    console.log(store_saved);
    if((store_saved === true) && ((added_fav.find(elemento => elemento === element)) === undefined))
    dispatch(SAVE_IM(element))
    if (store_saved === false)
    dispatch(DELETE_IM(element))
	}
	
	

	const showModal = (element)=>{
		
		setclicked(true);
		setElement(element)
		console.log(element)
	}
	useEffect(()=> {const fetchdata  = async()=>{
		const API_KEY = '1nxf8Pj2KIofLQj84-Oz7wdUZdlRNJFV6bkBbZfpsVo';
		const URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;
	
		fetch(URL)
		.then((response) => response.json())
		.then((data) => {dispatch({
      type: "INIT",
      payload: data,
    });})
		}
	fetchdata();
	}
	  ,[dispatch])

	return (
    <>
      <div className="contain">
        <div className="content">
          <div className="content--grid">
            {currentSearch?.map((element, index) => {
              return (
                <>
                  <button
                    name="note"
                    key={index}
                    onClick={() => showModal(element.urls.regular)}
                  > 
                    <img
                      className="grid"
                      src={element.urls.regular}
                      alt="random"
                    />
                  </button>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        centered={true}
        toggle={toggle}
        className="fade1"
        isOpen={clicked} //mirar en otro momento el xl tamanio del proyecto de otro
        sx={{
          Height: "100%",
        }}
      >
        <img
          style={{
            padding: "3%",
            maxWidth: "auto",
            maxHeight: "100%",
            objectFit: "cover",
            aspectRatio: "1",
            objectPosition: "center center",
          }}
          src={element}
          alt=""
        />
        		<ModalFooter >
			<button onClick={click_save}
			style ={{
				margin:"0 auto"
			}}>{ saved ? <BookmarkIcon fontSize="large" />: <BookmarkBorderIcon fontSize="large"  />}
			</button>
		</ModalFooter>
      </Modal>
    </>
  );
}

export default Images;