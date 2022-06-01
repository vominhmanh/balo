import React, { useState, useEffect, useRef } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import loginApi from '../../../api/loginApi'
import { userLogSlice } from '../../../redux/User/userLogSlice'
import ErrorMessage from '../../Notification/ErrorMessage'
import PasswordInput from './PasswordInput'

export default function Login(props) {
  const [phonenumber, setPhonenumber] = useState('')
  const [password, setPassword] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies(['access_token'])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const passwordStartRef = useRef()
  const loginRef = useRef()
  const user = useSelector((state) => state.userLog.user)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (user) {
      navigate('/qrlock')
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await loginApi.login({
        phonenumber: phonenumber,
        password: password,
      })
      console.log(response.data.access_token)
      removeCookie('access_token')
      setCookie('access_token', response.data.access_token)
      dispatch(
        userLogSlice.actions.login({
          access_token: response.data.access_token,
          user: response.data.user,
        }),
      )
      navigate('/qrlock')
    } catch (error) {
      setSubmitError(error.response.data.error)
    }
  }

  const handlePhonenumberChange = (event) => {
    setPhonenumber(event.target.value)
    if (event.target.value.length == 10) {
      passwordStartRef.current.focus()
    }
  }

  useEffect(() => {
    if (password.length == 6) {
      loginRef.current.click()
    }
  }, [password])

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="wrap">
                <h3 className="text-center my-3">
                  <img
                    src={require('../../../datas/images/onkey_logo.png')}
                    width="40"
                    height="40"
                    className="d-inline-block"
                  />
                  <span style={{ color: '#7ed957' }}>
                    {' '}
                    Chìa khoá của tương lai
                  </span>
                </h3>
                <div className="login-wrap p-4 p-md-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Đăng nhập</h3>
                    </div>
                    <div className="w-100">
                      <h1 className="social-media d-flex justify-content-end">
                        <span
                          href="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <i className="fa-brands fa-google-plus"></i>
                        </span>
                        &nbsp;
                        <span
                          href="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <i className="fa-brands fa-facebook"></i>
                        </span>
                      </h1>
                    </div>
                  </div>
                  <form
                    action="#"
                    onSubmit={handleSubmit}
                    className="signin-form"
                  >
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="phonenumber"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="number"
                        name="phonenumber"
                        onChange={handlePhonenumberChange}
                        className="form-control"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-control-placeholder"
                        htmlFor="password"
                      >
                        Mật khẩu
                      </label>
                      <PasswordInput
                        ref={passwordStartRef}
                        sendPasswordToParent={(password) => {
                          setPassword(password)
                        }}
                      />
                    </div>
                    {submitError && <ErrorMessage error={submitError} />}
                    <div className="form-group mt-3">
                      <button
                        type="submit"
                        ref={loginRef}
                        className="form-control btn btn-primary rounded submit px-3"
                      >
                        Đăng nhập
                      </button>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-50 text-md-right">
                        <a href="#">Quên mật khẩu ?</a>
                      </div>
                    </div>
                  </form>
                  <p className="text-center mt-5">
                    Chưa có tài khoản?{' '}
                    <Link data-toggle="tab" to="/register">
                      Đăng ký ngay
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
