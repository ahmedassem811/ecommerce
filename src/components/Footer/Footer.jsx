import React from 'react'

export default function Footer() {
  return <>

    <footer>
      <div className="container py-3">
        <div className="footerTitle">
          <h2>Fresh Cart Footer</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        <div className="shareLink d-flex justify-content-between">
          <input type="email" className="form-control w-75" id="exampleFormControlInput1" placeholder="name@example.com" />
          <button className='btn btn-success w-25 ms-4'>Share App Link</button>
        </div>

        <div className='my-3 py-3 border-top border-bottom border-3 border-dark d-flex justify-content-between align-items-center'>
          <div className="payment text-primary">
            <span>Payment Partenrs</span>
            <i className= "mx-2 fa-brands fa-paypal"></i>
            <i className= "mx-2 fa-brands fa-cc-amazon-pay"></i>
            <i className= "mx-2 fa-brands fa-cc-mastercard"></i>
          </div>

          <div className="appBtn">
            <div className='d-flex align-items-center'>
              <span>Get Deliviries With Fresh Cart</span>
              <button className='mx-2 btn btn-dark d-flex justify-content-center align-items-center'>
              <i className="mx-2 fs-2 fa-brands fa-app-store"></i>
              <span>Available on <br></br> App Store</span>
              </button>
              <button className='btn btn-dark d-flex justify-content-center align-items-center'>
              <i className="mx-2 fs-2 fa-brands fa-google-play"></i>
              <span>Available on <br></br> Google Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>


  </>
}
