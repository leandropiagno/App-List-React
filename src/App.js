import React from 'react';
import Image from './img/escrevendo.png'
import './App.css';




function App() {
  
  const [comment, setComentary] = React.useState()
  const [allComments, setAllComentary] = React.useState([])

  function typeInInput (event){
    setComentary(event.target.value)
  }

  function clickOnTheButton(){
    const previousComments = [...allComments, comment];

    setAllComentary(previousComments);

    clearArea()
  }

  function clearArea(){
    let area = document.querySelector('.area');
    area.value = ('');
  }


  return (
    
    <div className='container-bg'>
      <div className='container'>
        <img src={Image} width='150px' alt="imagem-escrevendo lista" />
        <input className='area'onChange={typeInInput} type="text" placeholder='Add to items to list...' />
        <button onClick={clickOnTheButton}>Click to add</button>

        <div className="container-content">
          <ul>
            {allComments.map((coment) => (
            <li key={coment} >{coment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
