import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScr from '../LoadingScreen/LoadingScr';
import { Link } from 'react-router-dom';

export default function Brands() {

    const [allBrands, setallBrands] = useState(null)

    async function getAllBrands() {

        try {
            const { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/brands')
            setallBrands(data.data)


        } catch (error) {
            console.log('Error is :', error)
        }
    }

    useEffect(function () {
        getAllBrands()
    }, [])

    return <>

        {allBrands ? <div className="container my-5">
            <div className="row">

                <div className="col-md-3 d-flex align-items-center">
                    <div className="title">
                        <h4>Our Brands</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos</p>
                    </div>
                </div>


                {allBrands.map(function (brand, idx) {
                    return <div key={idx} className="col-md-3 g-4">

                        <Link to={`/brandsProducts/${brand._id}`} className=' text-decoration-none'>

                            <div className="brand">
                                <img src={brand.image} alt={brand.slug} />
                                <h5 className='text-primary text-center'>{brand.name}</h5>
                            </div>

                        </Link>


                    </div>
                })}
            </div>
        </div> : <LoadingScr />}

    </>
}
