import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userLogSlice } from '../../../redux/User/userLogSlice'

export default function Logout(props) {
  const [cookies, setCookies, removeCookies] = useCookies('token')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    removeCookies('access_token')
    dispatch(userLogSlice.actions.logout())
    navigate('/qrlock')
  })

  return <></>
}
