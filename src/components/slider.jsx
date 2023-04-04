import * as React from 'react';
import './styles/slider.css'
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { useState } from "react";
import { useLayoutEffect } from 'react';

//done with class xD


function Slider(){

	const [imageSlider, setImageSlider] = useState([]);

	let current_value = 0;




	function showImage(current_value){
		let id = "#slider #slider__fade img";
		let all_slides = document.querySelectorAll(id); //recoje el div
		all_slides[current_value].style.display = "block";
		console.log(current_value);
	}
	function hideImage(current_value){
		let id = "#slider #slider__fade img";
		let all_slides = document.querySelectorAll(id);
		all_slides[current_value].style.display = "none";
		console.log(current_value);
	}

	

function back(){

	let id = "#slider #slider__fade img";
	let all_slides = document.querySelectorAll(id);
	console.log(id);
	hideImage(current_value);
	current_value--;
	if(current_value<0)
	current_value = (all_slides.length) - 1;
	showImage(current_value);
}

function next(){

	let id = "#slider #slider__fade img";
	let all_slides = document.querySelectorAll(id);
	hideImage(current_value);
	current_value++;
	console.log(all_slides);

	if(current_value > (all_slides.length) - 1)
	current_value = 0;
	showImage(current_value);
}


useLayoutEffect(()=> {const fetchdata  = async()=>{
	const API_KEY = '1nxf8Pj2KIofLQj84-Oz7wdUZdlRNJFV6bkBbZfpsVo';
	const URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;
	
	fetch(URL)
	.then((response) => response.json())
	.then((data) => setImageSlider(data))
	.then(()=>next())
	}
fetchdata();

},[])

	return (
    <div id="slider">
      <div id="slider__fade">
        {imageSlider?imageSlider.map((element, index) => {
          return <img key={index} src={element.urls.regular} alt="random" />;
        }): <h3>click to see</h3>}

        <div className="slider__arrows">
          <button className="back" onClick={back}>
            &#10094;
          </button>
          <button className="next" onClick={next}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );

};

export default Slider;