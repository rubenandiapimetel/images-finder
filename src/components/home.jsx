import Finder from './finder';
import Slider  from './slider';
import Images from  './images';
import ResponsiveAppBar from './headernavi';

function Home() {


  return (
		<div>
      <ResponsiveAppBar/>
        <Finder />
        <Slider />
        <Images/>  
      </div>
    
  );
}

export default Home