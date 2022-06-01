import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import lockApi from '../../../api/lockApi'
import { useCookies } from 'react-cookie'
import AddMemberOrGuessModal from './AddMemberOrGuessModal'
export default function LockAdmin(props) {
  const { lockQrCode } = useParams()
  const [cookies] = useCookies(['access_token'])
  const [lock, setLock] = useState({})
  const [
    isAddMemberOrGuessModalOpen,
    setIsAddMemberOrGuessModalOpen,
  ] = useState(false)

  useEffect(async () => {
    try {
      const response = await lockApi.getLockInfomation(
        cookies.access_token,
        lockQrCode,
      )
      setLock(response.data)
      console.log(lockQrCode)
    } catch (e) {}
  }, [])

  return (
    <>
      <div className="container">
        <div className="my-3">
          <small>Bạn là quản trị viên của thiết bị này</small>
        </div>
      </div>
      <div
        className="card mx-2 mt-4 mt-sm-0 shadow"
        style={{ backgroundColor: '#f0fff0' }}
      >
        <div className="card-body">
          <div className="card-title d-flex justify-content-between">
            <span className="fs-6 text-nowrap fw-bold text-success">
              <a
                className="badge bg-light text-dark"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <i className="fas fa-caret-down"></i>
              </a>
              &nbsp; Trạng thái
            </span>
            {lock.lock_status == 1 && (
              <span>
                Đang hoạt động &nbsp;
                <span className="badge bg-success">ON</span>
              </span>
            )}
            {lock.lock_status == 0 && (
              <span>
                Tạm ngưng &nbsp;
                <span className="badge bg-danger">OFF</span>
              </span>
            )}
          </div>

          <div className="collapse shadow-sm mt-2" id="collapseExample">
            <div className="card card-body py-1">
              <div className="row">
                <span className="badge bg-danger">
                  <i className="fa-solid fa-power-off"></i>
                  &nbsp;
                  <small>Chuyển trạng thái</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card mx-2 mt-4 mt-sm-0 shadow"
        style={{ backgroundColor: '#f0fff0' }}
      >
        <div className="card-body">
          <div className="card-title d-flex justify-content-between">
            <span className="fs-6 text-nowrap fw-bold text-success">
              <a
                className="badge bg-light text-dark"
                data-bs-toggle="collapse"
                href="#collapseAdminHistory"
                role="button"
                aria-expanded="false"
                aria-controls="collapseAdminHistory"
              >
                <i className="fas fa-caret-down"></i>
              </a>
              &nbsp; Lịch sử mở khoá
            </span>
            <span></span>
          </div>

          <div className="collapse shadow-sm mt-2" id="collapseAdminHistory">
            <div className="card card-body py-1">
              <div className="row">
                <div className="col-9">
                  <span className="badge bg-warning text-dark">
                    <i className="fa-solid fa-lock-open"></i>
                    &nbsp;
                    <small>Mở</small>
                  </span>
                  &emsp;
                  <span className="badge bg-primary">
                    <i className="fas fa-user-friends"></i>
                    &nbsp;
                    <small>Khách</small>
                  </span>
                  &emsp;
                  <span className="badge bg-danger">
                    <i className="fa-solid fa-power-off"></i>
                    &nbsp;
                    <small>OFF</small>
                  </span>
                </div>

                <div className="col-3 text-right">
                  <span className="badge bg-light text-dark">
                    <i className="fa-solid fa-gear"></i>
                    &nbsp;
                    <small>Cài đặt</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card mx-2 mt-4 mt-sm-0 shadow"
        style={{ backgroundColor: '#f0fff0' }}
      >
        <div className="card-body">
          <div className="card-title d-flex justify-content-between">
            <span className="fs-6 text-nowrap fw-bold text-success">
              <a
                className="badge bg-light text-dark"
                data-bs-toggle="collapse"
                href="#collapseAdminMember"
                role="button"
                aria-expanded="false"
                aria-controls="collapseAdminMember"
              >
                <i className="fas fa-caret-down"></i>
              </a>
              &nbsp; Thành viên và Khách
            </span>
            <span>
              <span
                className="badge bg-secondary"
                onClick={() => {
                  setIsAddMemberOrGuessModalOpen((old) => !old)
                }}
              >
                <i className="fa-solid fa-plus"></i>
                &nbsp;
                <small>Thêm</small>
              </span>
            </span>
          </div>

          <div className="collapse shadow-sm mt-2" id="collapseAdminMember">
            <div className="card card-body py-1">
              <div className="row">
                <div className="col-9">
                  <span className="badge bg-warning text-dark">
                    <i className="fa-solid fa-lock-open"></i>
                    &nbsp;
                    <small>Mở</small>
                  </span>
                  &emsp;
                  <span className="badge bg-primary">
                    <i className="fas fa-user-friends"></i>
                    &nbsp;
                    <small>Khách</small>
                  </span>
                  &emsp;
                  <span className="badge bg-danger">
                    <i className="fa-solid fa-power-off"></i>
                    &nbsp;
                    <small>OFF</small>
                  </span>
                </div>

                <div className="col-3 text-right">
                  <span className="badge bg-light text-dark">
                    <i className="fa-solid fa-gear"></i>
                    &nbsp;
                    <small>Cài đặt</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="card mx-2 mt-4 mt-sm-0 shadow"
        style={{ backgroundColor: '#f0fff0' }}
      >
        <div className="card-body">
          <div className="card-title d-flex justify-content-between">
            <span
              className="fs-6 text-nowrap fw-bold text-success"
              data-bs-toggle="collapse"
              href="#collapseAdminSpecifications"
              role="button"
              aria-expanded="false"
              aria-controls="collapseAdminSpecifications"
            >
              <a className="badge bg-light text-dark">
                <i className="fas fa-caret-down"></i>
              </a>
              &nbsp; Thông số kỹ thuật
            </span>
            <span></span>
          </div>

          <div
            className="collapse shadow-sm mt-2"
            id="collapseAdminSpecifications"
          >
            <div className="card card-body py-1">
              <div className="row">
                <div className="col-9">
                  <span className="badge bg-warning text-dark">
                    <i className="fa-solid fa-lock-open"></i>
                    &nbsp;
                    <small>Mở</small>
                  </span>
                  &emsp;
                  <span className="badge bg-primary">
                    <i className="fas fa-user-friends"></i>
                    &nbsp;
                    <small>Khách</small>
                  </span>
                  &emsp;
                  <span className="badge bg-danger">
                    <i className="fa-solid fa-power-off"></i>
                    &nbsp;
                    <small>OFF</small>
                  </span>
                </div>

                <div className="col-3 text-right">
                  <span className="badge bg-light text-dark">
                    <i className="fa-solid fa-gear"></i>
                    &nbsp;
                    <small>Cài đặt</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div height="30px">.</div>
      <AddMemberOrGuessModal
        isOpen={isAddMemberOrGuessModalOpen}
        toggleOpen={() => {
          setIsAddMemberOrGuessModalOpen((old) => !old)
        }}
        lockQrCode={props.lockQrCode}
      />
    </>
  )
}
