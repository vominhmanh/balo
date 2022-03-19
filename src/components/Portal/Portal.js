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
import EndOfContent from '../Notification/EndOfContent'

export default function Portal(props) {
  const [journeys, setJourneys] = useState([])
  const [page, setPage] = useState(1)
  const [lastElement, setLastElement] = useState(null)
  const [loading, setLoading] = useState(true)
  const error = useRef(false)

  useEffect(() => {
    //componentDidMount
    const fetchJourneyList = async () => {
      try {
        setLoading(true)
        const response = await journeyApi.get({ page: page, limit: '10' })
        console.log(response)
        if (response.length !== 0) {
          setJourneys((prevState) => {
            return prevState.concat(response)
          })
        } else {
          console.log('error changing', error)
          error.current = true
        }

        setLoading(false)
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

  const targetRef = useCallback(
    (node) => {
      console.log(node)

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('Visible')
              setPage((prevState) => {
                console.log(prevState++)
                return prevState++
              })
            }
          })
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0,
        },
      )
      if (loading) {
        return observer.disconnect()
      }
      if (error.current) return
      if (node) observer.observe(node)
    },
    [loading],
  )

  return (
    <div>
      {journeys.map((journey, index) => {
        if (index == journeys.length - 1)
          return (
            <div key={uuidv4()}>
              <JourneyItem journey={journey} ref={targetRef} key={uuidv4()} />
            </div>
          )
        else return <JourneyItem journey={journey} key={uuidv4()} />
      })}
      {console.log('Appending data...')}
      {error.current && <EndOfContent />}
      <AddingBtn />
    </div>
  )
}

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
