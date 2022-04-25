import React,{useState} from 'react'
import "./style.css"
import Menu from './menuapi';
import MenuCard from './MenuCard';




const Restornt = () => {

    const [menuData, setMenuData] = useState(Menu);
   
     

    const filterIiem =(category) =>{

        // if(category === "All"){
        //     setMenuData(Menu);
        //     return;
        // }

        const updatedList = Menu.filter((curElem) =>
        {
            return curElem.category === category;
        });

        setMenuData(updatedList);
    };


    return(
        
                <React.Fragment>
        <nav className='navbar'>
            <div className='btn-group'>
                <button className='btn-group__item' 
                onClick={() =>filterIiem("breakfast")}>Breakfast</button>
                <button className='btn-group__item' 
                onClick={() =>filterIiem("lunch")}>lunch</button>
                <button className='btn-group__item'
                onClick={() =>filterIiem("evening")}>Evening</button>
                <button className='btn-group__item'
                onClick={() =>filterIiem("dinner")}>Dinner</button>
                <button className='btn-group__item'
                onClick={() =>setMenuData(Menu)}>All</button>
                
            </div>
        </nav>

          <MenuCard menuData={menuData} /> 
   
    </React.Fragment>
  
       
    );      
};

export default Restornt;