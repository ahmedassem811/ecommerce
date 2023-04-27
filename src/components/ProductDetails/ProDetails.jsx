import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import LoadingScr from '../LoadingScreen/LoadingScr'
import { useParams } from 'react-router-dom'
import { cartStoreContext } from '../../context/cartContext'
import $ from 'jquery'

export default function ProDetails() {

    const { addProductToCart } = useContext(cartStoreContext)
    const { id } = useParams()
    const [product, setproduct] = useState(null)

    async function getProDetails() {

        try {
            const { data } = await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
            setproduct(data.data)

        } catch (error) {
            console.log('Error is :', error)
        }
    }

    async function addMyProduct(id) {
        if (await addProductToCart(id) === true) {

            $('#addBtn').removeClass('btn-success')
            $('#addBtn').text('Remove Product From the Cart')
            $('#addBtn').addClass('btn-danger')

            $('.successMsg').fadeIn(100, function () {
                setTimeout(() => {
                    $('.successMsg').fadeOut(500)
                }, 1000);
            })
        }
    }

    useEffect(function () {
        getProDetails()
    }, [])


    return <>

        {product ? <div className="container py-5">
            <div className="row d-flex justify-content-between">

                <div className="col-md-3">
                    <div className="image">
                        <img className='w-100' src={product.imageCover} alt="title" />

                    </div>
                </div>

                <div className="col-md-8">
                    <div className="product">

                        <h2>{product.title}</h2>
                        <p className=' text-secondary'>{product.description}</p>
                        <h5>Price : {product.price}</h5>
                        <h5>Quantity : {product.quantity}</h5>
                        <h5>Id : {product.id}</h5>


                        <button id='addBtn' className='btn btn-success w-100' onClick={function () { addMyProduct(product.id) }}> Add To Cart + </button>

                        <div className='successMsg alert alert-success text-black text-center m-4' style={{ 'display': 'none' }}>
                            <p> Product Added Successfully </p>

                        </div>

                    </div>

                </div>
            </div>
        </div> : <LoadingScr />}



    </>
}
