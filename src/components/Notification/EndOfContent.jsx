import React from 'react'

export default function EndOfContent(props) {
  return (
    <div className="loading mt-3 mb-5" id="loadingComponent">
      <div className="loading-img text-center">
        <img width={'100%'} src={require('../../datas/images/emty_1.gif')} />
      </div>
      <div className="text-center mb-5">
        Đã hết nội dung. Tải lại trang để cập nhật thêm
      </div>
    </div>
  )
}
