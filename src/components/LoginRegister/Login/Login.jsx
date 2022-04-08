import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import loginApi from '../../../api/loginApi'

export default function Login(props) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [cookies, setCookie] = useCookies(['token'])
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await loginApi.login({
        email: email,
        password: password,
      })
      console.log(response)
      setCookie('token', response.data.token)
      navigate('/balo')
    } catch (error) {
      console.log('Error:', error)
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
              <div className="wrap">
                <img
                  width="100%"
                  src={require('../../../datas/images/xach-balo-len-va-di-du-lich-2.jpeg')}
                />
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
                        htmlFor="username"
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        onChange={handleEmailChange}
                        className="form-control"
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
                      <input
                        id="password-field"
                        type="password"
                        onChange={handlePasswordChange}
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="form-group mt-3">
                      <button
                        type="submit"
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
                    <a data-toggle="tab" href="#signup">
                      Đăng ký ngay
                    </a>
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
