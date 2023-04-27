import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import $ from 'jquery'



export default function Register() {

  
  let navigate = useNavigate()

  let user = {
    name: '',
    email: '',
    phone: '',
    password: '',
    rePassword: ''
  }


  async function signUp(obj) {

    try {

      let resp = await axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', obj)
      console.log(resp)

      $('.successMsg').fadeIn(2000, function(){
        navigate('/login')
      })

    } catch (error) {

      console.log('Error is :', error.response.data.message)

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
      signUp(values)
    },

    validate: function (values) {
      const errors = {}

      if (values.name.length < 3 || values.name.length > 10) {
        errors.name = 'Name must be more than 3 char and less than 10'
      }

      if (!values.email.includes('@') || !values.email.includes('.com')) {
        errors.email = 'Email not valid'
      }

      if (!values.phone.match(/^01[0125][0-9]{8}$/)) {
        errors.phone = 'Accept only valid egyption mobile number'
      }

      if (values.password.length < 6 || values.password.length > 12) {
        errors.password = 'Password must be more than 6 char and less than 12'
      }

      if (values.password !== values.rePassword) {
        errors.rePassword = 'Repassword not match the password'
      }
      return errors;

    }


  })

  return <>

    <div className="container py-5">
      <form onSubmit={formik.handleSubmit} >

        <h2 className='py-3 text-primary'>Register Now ...</h2>

        <div style={{"display":"none"}} className="errorMsg alert alert-danger text-center">
          Account Already Exists
        </div> 

        <div style={{"display":"none"}} className="successMsg alert alert-success text-center">
          Registerd Successfully....
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" className="form-control" id="name" placeholder="name" />
          {formik.errors.name && formik.touched.name ? <div className="alert alert-danger">{formik.errors.name}</div> : ''}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} type="email" className="form-control" id="email" placeholder="name@mail.com" />
          {formik.errors.email && formik.touched.email ? <div className="alert alert-danger">{formik.errors.email}</div> : ''}
        </div>


        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} type="text" className="form-control" id="phone" placeholder="0123456..." />
          {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger">{formik.errors.phone}</div> : ''}

        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} type="password" className="form-control" id="password" placeholder="password" />
          {formik.errors.password && formik.touched.password ? <div className="alert alert-danger">{formik.errors.password}</div> : ''}

        </div>

        <div className="mb-3">
          <label htmlFor="rePassword" className="form-label">Repassword</label>
          <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} type="password" className="form-control" id="rePassword" placeholder="Repassword" />
          {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger">{formik.errors.rePassword}</div> : ''}
        </div>

        <button className='btn btn-outline-primary' type='submit'>Register</button>

      </form>
    </div>



  </>
}
