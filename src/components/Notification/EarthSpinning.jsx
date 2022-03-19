import React from 'react'

export default function EarthSpinning(props) {
  return (
    <div className="loading" id="loadingComponent">
      <div className="loading-img text-center">
        <img
          width={'80%'}
          src={require('../../datas/images/spinningEarth.gif')}
        />
      </div>
      <div className="text-center">Đang tải nội dung...</div>
    </div>
  )
}
