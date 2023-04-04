
import Slider  from './slider';
import ImagesSav from  './imagesSav';
import ResponsiveAppBar from './headernavi';
function Home() {


  return (
		<div>
        <ResponsiveAppBar/>
        <Slider />
        <ImagesSav/>  
      </div>
    
  );
}

export default Home