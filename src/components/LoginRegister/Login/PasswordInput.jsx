import React, { useRef, useState, useEffect } from 'react'

const PasswordInput = (props, passwordStartRef) => {
  const pwRef = []
  pwRef[1] = passwordStartRef
  pwRef[2] = useRef()
  pwRef[3] = useRef()
  pwRef[4] = useRef()
  pwRef[5] = useRef()
  pwRef[6] = useRef()
  const [password, setPassword] = useState([])

  const handleOnKeyUp = (event) => {
    setPassword((password) => {
      const pw = password
      pw[parseInt(event.target.id)] = event.target.value
      return pw
    })
    if (event.keyCode == 8) {
      if (parseInt(event.target.id) - 1 >= 1) {
        pwRef[parseInt(event.target.id) - 1].current.focus()
      }
    } else {
      if (event.target.value.length == 1) {
        if (parseInt(event.target.id) + 1 <= 6) {
          pwRef[parseInt(event.target.id) + 1].current.focus()
          pwRef[parseInt(event.target.id) + 1].current.select()
        }
      }
    }
    props.sendPasswordToParent(password.join('').trim())
  }

  return (
    <>
      <div className="row">
        <div className="col-2">
          <input
            id="001"
            order="1"
            type="password"
            onKeyUp={handleOnKeyUp}
            ref={pwRef[1]}
            className="form-control"
            pattern="[0-9]*"
            inputMode="numeric"
            autoComplete="false"
            onFocus={(event) => event.target.select()}
            maxLength="1"
            required
          />
        </div>
        <div className="col-2">
          <input
            id="002"
            order="2"
            type="password"
            onKeyUp={handleOnKeyUp}
            ref={pwRef[2]}
            className="form-control"
            pattern="[0-9]*"
            inputMode="numeric"
            autoComplete="off"
            maxLength="1"
            required
          />
        </div>
        <div className="col-2">
          <input
            id="003"
            order="3"
            type="password"
            ref={pwRef[3]}
            onKeyUp={handleOnKeyUp}
            onFocus={(event) => event.target.select()}
            className="form-control"
            pattern="[0-9]*"
            inputMode="numeric"
            autoComplete="off"
            maxLength="1"
            required
          />
        </div>
        <div className="col-2">
          <input
            id="004"
            order="4"
            type="password"
            onKeyUp={handleOnKeyUp}
            className="form-control"
            ref={pwRef[4]}
            pattern="[0-9]*"
            inputMode="numeric"
            autoComplete="off"
            maxLength="1"
            required
          />
        </div>
        <div className="col-2">
          <input
            id="005"
            order="5"
            type="password"
            ref={pwRef[5]}
            onKeyUp={handleOnKeyUp}
            className="form-control"
            pattern="[0-9]*"
            inputMode="numeric"
            autoComplete="off"
            maxLength="1"
            required
          />
        </div>
        <div className="col-2">
          <input
            id="006"
            order="6"
            type="password"
            onKeyUp={handleOnKeyUp}
            ref={pwRef[6]}
            className="form-control"
            pattern="[0-9]*"
            inputMode="numeric"
            autoComplete="off"
            maxLength="1"
            required
          />
        </div>
      </div>
    </>
  )
}

export default React.forwardRef(PasswordInput)
