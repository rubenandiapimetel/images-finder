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

function ImagesSav(){
	const [saved, setSaved]= useState(true)
	const [clicked, setclicked] = useState(false);
	const dispatch = useDispatch();
	const currentSaved = useSelector(store => store.saved.images);
  const added_fav = useSelector(store => store.saved.images);
	const [element, setElement] = useState('');
	console.log(currentSaved);
	const toggle = () => {
    setSaved(true);
    
    setclicked(!clicked);
    console.log(added_fav)}

  var store_saved = true;
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


	return (
    <>
      <div className="contain">
        <div className="content">
          <div className="content--grid">
            {currentSaved?.map((element, index) => {
              return (
                <>
                  <button
                    name="note"
                    key={index}
                    onClick={() => showModal(element)}
                  > 
                    <img
                      className="grid"
                      src={element}
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

export default ImagesSav;