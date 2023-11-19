import './App.css'
function App() {
  return (
  <div>
     <div className="nav">
     <div className="logo">
      <img src="https://st.depositphotos.com/58736500/58219/v/450/depositphotos_582192280-stock-illustration-shopping-cart-trolley-and-bag.jpg"></img>
     </div>
     <div className="menu">
      <ul className='menu-list'>
        <li> <a href=''> Home</a></li>
        <li><a href=''> About</a></li>
        <li className='boutique'><a href=''> Shop</a>
        <ul className='sous-menu'>
          <li><a href=''>portable</a></li>
          <li><a href=''>pc</a></li>
          <li><a href=''>imprimente</a></li>
          <li><a href=''>tablette</a></li>
        </ul>
        </li>
        <li><a href=''> Contact</a></li>
      </ul>
     </div>

  

    </div>
    <div className='produits'>
      <div className='produit'>
        <div className='img-produit1'></div>
       <div className='details'>
       <div>
          iphone
        </div>
        <div >
          2400DT
        </div>
        <div>
          <button> Acheter</button>
        </div>
       </div>
      </div>
      <div className='produit'>
        <div className='img-produit2'></div>
       <div className='details'>
       <div>
          Redmi
        </div>
        <div >
          1000DT
        </div>
        <div>
          <button> Acheter</button>
        </div>
       </div>
      </div>
      <div className='produit'>
        <div className='img-produit3'></div>
       <div className='details'>
       <div>
          Samsung
        </div>
        <div >
          1500DT
        </div>
        <div>
          <button> Acheter</button>
        </div>
       </div>
      </div>
      

    </div>
    <div className='footer'>
      <div>
        <p className='style-txt'>
       
         Copyright © 2023 
        
        </p>
      </div>
      <div className='style-txt'>
        <p> ONLINE SHOP</p>
      </div>

    </div>
  </div>
   
  );
}

export default App;
