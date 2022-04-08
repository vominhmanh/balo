import React, { useState } from 'react'
import PlaceItem from './PlaceItem'
import { v4 as uuidv4 } from 'uuid'
import { touristAttractions } from '../../../datas/placelist.js'
import { useDispatch } from 'react-redux'

export default function FindPlace(props) {
  const { provincelist } = require('../../../datas/provincelist.js')
  let [isSearching, setIsSearching] = useState(false)
  let [placeQuery, setPlaceQuery] = useState(() => {
    ''
  })

  const onChangeHandler = (e) => {
    if (e.target.value.length >= 2) {
      setIsSearching(true)
      setPlaceQuery(e.target.value)
    } else setIsSearching(false)
  }

  return (
    <>
      <div className="card text-left">
        <div className="card-body">
          <h5 className="card-title">
            <form action="" className="row form-inline">
              <div className="col-8">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập địa điểm cần tìm kiếm"
                  onChange={onChangeHandler}
                />
              </div>
              <div className="col-4">
                <select
                  name=""
                  className="form-control"
                  id=""
                  defaultValue="HN"
                >
                  {Object.values(provincelist).map((province) => {
                    return (
                      <option key={province.code} slug={province.slug}>
                        {province.name}
                      </option>
                    )
                  })}
                </select>
              </div>
            </form>
          </h5>
          {!isSearching ? <RecommendedPlace /> : null}
          {!isSearching ? <RecommendedHotel /> : null}
          {isSearching ? <PlaceList query={placeQuery} /> : null}
        </div>
      </div>
    </>
  )
}

const RecommendedPlace = () => {
  return (
    <>
      <p className="card-text text-primary mb-0 mt-4">Địa điểm được gợi ý</p>
      <div className="list-group list-group-flush">
        {[
          touristAttractions[0],
          touristAttractions[1],
          touristAttractions[2],
          touristAttractions[3],
          touristAttractions[4],
        ].map((place) => {
          return <PlaceItem place={place} key={uuidv4()} />
        })}
      </div>
    </>
  )
}

const RecommendedHotel = () => {
  return (
    <>
      <p className="card-text text-primary mb-0 mt-4">
        Khách sạn, nhà nghỉ được gợi ý
      </p>
      <div className="list-group list-group-flush">
        {[
          touristAttractions[5],
          touristAttractions[6],
          touristAttractions[7],
        ].map((place) => {
          return <PlaceItem place={place} key={uuidv4()} />
        })}
      </div>
    </>
  )
}

const PlaceList = (props) => {
  return (
    <div className="list-group list-group-flush">
      {touristAttractions
        .filter((province) => {
          return (
            province.name.toLowerCase().indexOf(props.query.toLowerCase()) >= 0
          )
        })
        .map((place) => {
          return <PlaceItem place={place} key={uuidv4()} />
        })}
    </div>
  )
}
