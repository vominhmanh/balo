import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import loginApi from '../../../api/loginApi'
import ErrorMessage from '../../Notification/ErrorMessage'
import PasswordInput from './PasswordInput'
export default function Register(props) {
  const [fullname, setFullname] = useState()
  const [errorBag, setErrorBag] = useState()
  const [email, setEmail] = useState()
  const [phonenumber, setPhonenumber] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()
  const [cookies, setCookie, removeCookie] = useCookies(['access_token'])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userLog.user)

  useEffect(() => {
    if (user) {
      navigate('/qrlock')
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await loginApi.register({
        name: fullname,
        email: email,
        phonenumber: phonenumber,
        password: password,
        password_confirmation: passwordConfirmation,
      })
      navigate('/login')
    } catch (error) {
      let errorBag = ''
      Object.keys(error.response.data.error.message).forEach(function (title) {
        console.log(title)
        errorBag += `${title}:`
        for (let errorname of error.response.data.error.message[title]) {
          console.log(errorname)
          errorBag += `${errorname}`
        }
      })
      setErrorBag(errorBag)
    }
  }

  const handleFullnameChange = (event) => {
    setFullname(event.target.value)
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePhonenumberChange = (event) => {
    setPhonenumber(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handlePasswordConfirmationChange = (event) => {
    setPasswordConfirmation(event.target.value)
  }

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="wrap">
                <div className="login-wrap p-4 p-md-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Đăng ký tài khoản OnKey</h3>
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
                        htmlFor="username"
                      >
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        name="fullname"
                        onChange={handleFullnameChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="username"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={handleEmailChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="username"
                      >
                        Số điện thoại
                      </label>
                      <input
                        type="text"
                        name="phonenumber"
                        onChange={handlePhonenumberChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="password"
                      >
                        Mật khẩu
                      </label>
                      <PasswordInput
                        sendPasswordToParent={(password) => {
                          setPassword(password)
                        }}
                      />
                    </div>
                    <div className="form-group mt-3">
                      <label
                        className="form-control-placeholder"
                        htmlFor="password"
                      >
                        Nhập lại mật khẩu
                      </label>

                      <PasswordInput
                        sendPasswordToParent={(password) => {
                          setPasswordConfirmation(password)
                        }}
                      />
                    </div>
                    {errorBag && <ErrorMessage error={errorBag} />}
                    <div className="form-group mt-5">
                      <button
                        type="submit"
                        className="form-control btn btn-primary rounded submit px-3"
                      >
                        Đăng ký
                      </button>
                    </div>
                  </form>

                  <p className="text-center mt-5">
                    Đã có tài khoản?{' '}
                    <Link data-toggle="tab" to="/login">
                      Đăng nhập
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
