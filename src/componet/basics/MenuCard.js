import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);
    return (
        <React.Fragment>
            <section className='main-card--cointainer'>
                {menuData.map((curElem) => {
                    return (
                        /* eslint-disable */
                        <div className='card-conteinar' style={{order: "unset"}} key={curElem.id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <span className='card-number card-circle subtle'>{curElem.id}</span>
                                    <span className='card-author subtle'>{curElem.category}</span>
                                    <h1 className='card-title'>{curElem.name}</h1>
                                    <span className='card-description subtle'>
                                    {curElem.description}
                                    </span>
                                    <div className='card-read'>read </div>
                                </div>
                                <img src={curElem.image} alt="image" className='card-media'/>
                                <span className='card-tag subtle'>order now</span>

                            </div>
                            
                        </div>
                    )
                })}
            </section>
        </React.Fragment>
    )
}

export default MenuCard