import React, { useState} from 'react';



const Header = ({ toggleComponent }) => {
  const [isReverseTextVisible, setIsReverseTextVisible] = useState(true);
  let [moded, setModed] = useState(false);

  const handleToggle = () => {
    setIsReverseTextVisible(prevState => !prevState);
    toggleComponent(!isReverseTextVisible);
    if(moded===false){
      setModed(true);
    }else{
    setModed(false);}
  };

  return (
    <header className='header'>
      <nav>
        <div className="logo">ASFI</div>
       <label htmlFor="r"> <div className="switch" >
          <label htmlFor="r"><h1 className='hh'>{moded ? 'Decode' : 'Code'}</h1></label>
          <label className="switch-label" >
            <input type="checkbox" onChange={handleToggle} checked={!isReverseTextVisible} id='r'/>
            <span className="slider round"></span>
          </label>
        </div></label>
      </nav>
    </header>
  );
};

export default Header;
