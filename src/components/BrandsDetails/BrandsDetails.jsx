import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScr from '../LoadingScreen/LoadingScr'
import { Link, useParams } from 'react-router-dom'

export default function BrandsDetails() {

    const [allProducts, setAllProducts] = useState(null)
    const {id} = useParams()
    console.log(id);

    async function getBrandProducts() {
  
      try {
        const {data} = await axios.get('https://route-ecommerce.onrender.com/api/v1/products',{
            params : {'brand':id}
        })
        setAllProducts(data.data)

  
      } catch (error) {
        console.log("error is :", error)
  
      }
  
    }
  
  
    useEffect(function () {
        getBrandProducts();
    }, [])
  

  return <>

    {allProducts ? <div className="container my-5">
      <div className="row">


        {allProducts.map(function (item, idx) {
          return <div key={idx} className="col-md-2 g-4">


            <Link className='text-decoration-none' to={`/prodetails/${item.id}`}>

              <div className="item position-relative bg-info text-white rounded-2 p-1">

                <img src={item.imageCover} alt={item.title} className='w-100' />

                <h5 className='text-center'> {item.title.slice(0, item.title.indexOf(' ', 10))} </h5>
                <p className=' text-success ms-2' >{item.brand.name}</p>
                <h6 className='ms-2'> Price :
                  {item.priceAfterDiscount ? <><span className=' text-decoration-line-through text-danger'>{item.price}</span> {" => "} <span>{item.priceAfterDiscount}</span></>
                    : <><span>{item.price}</span></>}
                </h6>

                <h6>{item.id}</h6>

                <div className="rating position-absolute top-0 end-0 bg-info me-2">
                  <span className='px-1'><i class="fa-solid fa-star"></i> {item.ratingsAverage}</span>
                </div>

              </div>

            </Link>

          </div>

        })}

      </div>
    </div> : <LoadingScr/>}
  </>
}
