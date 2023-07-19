import React from 'react'
import feature_bg_img from '../assets/feature_bg_img.png'
import feature_img from '../assets/feature_img.png'
const FeaturedCard = () => {
    return (
        <div className='flex flex-col justify-center items-center '>
            <div className='mb-[-50px]'>
                <img src={feature_bg_img} alt="img" />
            </div>
            <img src={feature_img} width={100} />
            <p>Emoly Mie</p>
            <p>@emolymie99</p>
            <p>$12/Month</p>


        </div>
    )
}

export default FeaturedCard