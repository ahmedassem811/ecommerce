import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScr from '../LoadingScreen/LoadingScr'
import { Link } from 'react-router-dom'
import MySlider from '../Slider/MySlider'





export default function Home() {

  const [allProducts, setAllProducts] = useState(null)


  async function getAllProducts() {

    try {
      const { data } = await axios.get('https://route-ecommerce.onrender.com/api/v1/products')

      setAllProducts(data.data)
      console.log(allProducts)

    } catch (error) {
      console.log("error is :", error)

    }

  }


  useEffect(function () {
    getAllProducts();
  }, [])




  return <>

    <MySlider />

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

                <div className="rating position-absolute top-0 end-0 bg-info me-2">
                  <span className='px-1'><i className="fa-solid fa-star"></i> {item.ratingsAverage}</span>
                </div>

              </div>

            </Link>

          </div>

        })}

      </div>
    </div> : <LoadingScr />}
    
  </>
}
