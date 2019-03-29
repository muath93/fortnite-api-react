import React from 'react';
import Images from './Images'

// callFunctions = (item) => {
//     getCost(item);
// }


const showImg = (e) => {

    const imgClass = e.target.parentElement.querySelector('img');
    imgClass.classList.toggle('showImg');
    console.log(imgClass);

}
const Store = ({ items, getCost }) => {
    return (
        items.map(item => {
            return <div
                key={item.itemid}
                id={item.itemid}

                className="f6 ma3 center w-30 ba br4 pointer"
            >
                <div>
                    <h3
                        onClick={showImg}
                        className=''>{item.name}</h3>
                    <img className='removeImg' src={item.item.images.background} alt='none' />

                </div>
            </div>
        })
    );
}

export default Store;