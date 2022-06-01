import React, { useEffect, useState } from 'react'
import KeyItem from './KeyItem'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'
import lockApi from '../../api/lockApi'
import { useCookies } from 'react-cookie'

export default function KeyListIndex(props) {
  const user = useSelector((state) => state.userLog.user)
  const navigate = useNavigate()
  const [myLockList, setMyLockList] = useState([])
  const [memberLockList, setMemberLockList] = useState([])
  const [guessLockList, setGuessLockList] = useState([])
  const [cookies] = useCookies(['access_token'])

  useEffect(() => {
    if (!user) {
      navigate('/login?next=/keylist')
    }
  }, [])

  useEffect(async (_lockCode) => {
    try {
      const response1 = await lockApi.getMyLockList(cookies.access_token)
      const response2 = await lockApi.getMemberLockList(cookies.access_token)
      const response3 = await lockApi.getGuessLockList(cookies.access_token)
      setMyLockList(response1.data)
      setMemberLockList(response2.data)
      setGuessLockList(response3.data)
    } catch (e) {
      console.log('Mã lỗi', e.response.error)
      if (e.response.status === 401) {
      }
    }
  }, [])

  return (
    <>
      <div className="container">
        <div className="row mb-3 align-items-center">
          <div className="col-6">
            <h5 className="">Chìa khoá của tôi</h5>
          </div>
          <div className="col-6">
            <AddingBtn />
          </div>
        </div>
      </div>

      {myLockList.map((key) => {
        return (
          <KeyItem
            key={key.lock_qrcode}
            lock_name={key.lock_name}
            lock_address={key.lock_address}
            lock_qrcode={key.lock_qrcode}
            lock_status={key.lock_status}
          />
        )
      })}

      <div className="container">
        <h5 className="my-4">Chìa khoá được uỷ quyền</h5>
      </div>
      {memberLockList.map((key) => {
        return (
          <KeyItem
            key={key.lock_qrcode}
            lock_name={key.lock_name}
            lock_address={key.lock_address}
            lock_qrcode={key.lock_qrcode}
            lock_status={key.lock_status}
          />
        )
      })}

      <div className="container">
        <h5 className="my-4">Chìa khoá mà tôi là khách</h5>
      </div>
    </>
  )
}

const AddingBtn = () => {
  return (
    <Box
      sx={{
        '& > :not(style)': { m: 1 },
      }}
    >
      <Fab
        color="success"
        to="/keylist/addnewlock"
        component={Link}
        size="small"
        aria-label="add"
        variant="extended"
      >
        <AddIcon sx={{ mr: 1 }} />
        Thiết bị mới
      </Fab>
    </Box>
  )
}
