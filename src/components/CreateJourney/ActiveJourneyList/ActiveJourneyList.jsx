import React, { useEffect } from 'react'
import { ActivePlaceItem } from './ActivePlaceItem'
import { useDispatch, useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import journeyApi from '../../../api/journeyApi'
import { useCookies } from 'react-cookie'
import { detailTabActiveJourneySlice } from '../../../redux/CreateJourney/detailTabActiveJourneySlice'
export default function ActiveJourneyList(props) {
  const activePlacesWithInfo = useSelector((state) => state.activePlaces)
  const activeJourneyDetail = useSelector((state) => state.activeJourneyDetail)
  const dispatch = useDispatch()
  const [cookies, setCookies] = useCookies()

  useEffect(() => {
    setTimeout(() => {
      showJourneyDetailTab()
    }, 5000)
  }, [])

  const saveJourney = async () => {
    try {
      const response = await journeyApi.createNewJourney({
        name: activeJourneyDetail.name,
        places_with_detail: activePlacesWithInfo,
        token: cookies.token,
      })
    } catch (e) {
      console.log(e)
    }
  }

  const showJourneyDetailTab = () => {
    dispatch(
      detailTabActiveJourneySlice.actions.toggleOffcanvas({
        popup: true,
      }),
    )
  }

  const SavingBtn = () => {
    return (
      <Box
        sx={{
          textAlign: 'right',
          marginTop: '10px',
        }}
      >
        <Fab
          color="primary"
          onClick={saveJourney}
          size="small"
          aria-label="add"
          variant="extended"
        >
          Lưu chuyến đi
        </Fab>
      </Box>
    )
  }
  return (
    <div className="card mt-5 mt-sm-0">
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between">
          {activeJourneyDetail.name}
          <i
            className="fa-solid fa-ellipsis-vertical"
            onClick={showJourneyDetailTab}
          ></i>
        </h5>
        <ol className="list-group list-group-numbered">
          {activePlacesWithInfo.map((activePlaceWithInfo, index) => {
            return (
              <ActivePlaceItem
                placeWithInfo={activePlaceWithInfo}
                key={index}
                order={index}
              />
            )
          })}
        </ol>
        {activePlacesWithInfo.length ? <SavingBtn /> : ''}
      </div>
    </div>
  )
}
