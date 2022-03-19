import React, { useCallback, useMemo, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { useEffect, useRef } from 'react'
import journeyApi from '../../api/journeyApi'
import JourneyItem from './JourneyItem'
import EarthSpinning from '../Notification/EarthSpinning'
import { v4 as uuidv4 } from 'uuid'
export default function Portal(props) {
  const [journeys, setJourneys] = useState([])
  const [page, setPage] = useState(1)
  const [lastElement, setLastElement] = useState(null)
  const AddingBtn = () => {
    return (
      <Box
        sx={{
          '& > :not(style)': { m: 1 },
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <Fab
          color="primary"
          to="/balo/newjourney"
          component={Link}
          size="small"
          aria-label="add"
          variant="extended"
        >
          <AddIcon sx={{ mr: 1 }} />
          Chuyến đi mới
        </Fab>
      </Box>
    )
  }

  useEffect(() => {
    //componentDidMount
    const fetchJourneyList = async () => {
      try {
        const response = await journeyApi.get({ page: page, limit: '10' })
        setJourneys((prevState) => {
          return prevState.concat(response)
        })
      } catch (e) {
        console.log('Failed to fetch jouney list. Error: ', e)
      }
    }

    console.log('Fetching data...')
    fetchJourneyList()
    return () => {
      //componentWillUnmount
    }
  }, [page]) //dependency // do once => empty array dependency

  const options = useMemo(
    () => ({
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }),
    [],
  )

  const targetRef = useRef()
  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry.isIntersecting) {
        console.log('Visible')
        setPage((prevState) => {
          console.log(prevState++)
          return prevState++
        })
      }
    }, options)
    //observer.observe(targetRef)
  }, [lastElement])

  return (
    <div>
      {journeys.map((journey, index) => {
        if (index == journeys.length - 1)
          return (
            <div key={uuidv4()}>
              <JourneyItem journey={journey} key={uuidv4()} />
              <div className="" ref={targetRef}></div>
            </div>
          )
        else return <JourneyItem journey={journey} key={uuidv4()} />
      })}

      {/* <EarthSpinning ref={targetRef} /> */}
      <div className="loading" id="loadingComponent">
        <div className="loading-img text-center">
          <img
            width={'80%'}
            src={require('../../datas/images/spinningEarth.gif')}
          />
        </div>
        <div className="text-center">Đang tải nội dung...</div>
      </div>
      {/* <JouneyItem />
      <ProfessionalJouneyItem />
      <JouneyItem />
      <JouneyItem />
      <JouneyItem />
      */}
      <AddingBtn />
    </div>
  )
}
