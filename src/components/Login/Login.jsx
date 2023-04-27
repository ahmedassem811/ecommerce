import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


import $ from 'jquery'



export default function Login({getUserData}) {

  
  const navigate = useNavigate()

  let user = {
    email: '',
    password: '',
  }


  async function signIn(obj) {

    try {
      const {data}  = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', obj)

      localStorage.setItem('tkn' , data.token)
      getUserData()

      $('.successMsg').fadeIn(2000, function(){
        navigate('/home')
      })


    } catch (error) {

      console.log('Error is :', error)

      $('.errorMsg').fadeIn(1000, function(){
        setTimeout(() => {
          $('.errorMsg').fadeOut(500)
        }, 3000);
      })
    }
  }


  const formik = useFormik({
    initialValues: user,

    onSubmit: function (values) {
      signIn(values)
    },

    validate: function (values) {
      const errors = {}



      if ( values.email.includes('@') === false || values.email.includes('.com') === false) {
        errors.email = 'Email not valid'
      }


      if (values.password.length < 6 || values.password.length > 12) {
        errors.password = 'Password must be more than 6 char and less than 12'
      }

      return errors;

    }


  })

  return <>

    <div className="container py-5">
      <form onSubmit={formik.handleSubmit} >

        <h2 className='py-3 text-primary'>Sign-In</h2>

        <div style={{"display":"none"}} className="errorMsg alert alert-danger text-center">
          Wrong Email or Password !
        </div> 

        <div style={{"display":"none"}} className="successMsg alert alert-success text-center">
          Welcome back
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control" id="email" placeholder="name@mail.com" />
          {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div> : ''}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" className="form-control" id="password" placeholder="password" />
          {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> : ''}

        </div>



        <button className='btn btn-outline-primary' type='submit'>Sign-in</button>

      </form>
    </div>



  </>
}
