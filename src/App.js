import React ,{useState, useEffect} from 'react';
import Itemlist from './components/Itemlist';
import Navbar from './components/Navbar';

// import ImagenMove from './components/ImagenMove';

const App = () => {


  const [comprasUario, setComprasUario] = React.useState(0);
  return (
    <>
      {/* <ImagenMove /> */}
      <Navbar compra={comprasUario}/>

      <Itemlist itemcompra={setComprasUario} />
    </>
  );
};

export default App;
