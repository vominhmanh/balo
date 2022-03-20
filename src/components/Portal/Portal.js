// import React, { useCallback, useMemo, useState } from 'react'
// import { Routes, Route, Link } from 'react-router-dom'
// import Box from '@mui/material/Box'
// import Fab from '@mui/material/Fab'
// import AddIcon from '@mui/icons-material/Add'
// import { useEffect, useRef } from 'react'
// import journeyApi from '../../api/journeyApi'
// import JourneyItem from './JourneyItem'
// import EarthSpinning from '../Notification/EarthSpinning'
// import { v4 as uuidv4 } from 'uuid'
// import EndOfContent from '../Notification/EndOfContent'
// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0,
// }

// export default function Portal(props) {
//   const targetRef = useRef()
//   const [journeys, setJourneys] = useState([])
//   const [page, setPage] = useState(1)
//   const error = useRef(false)
//   const [isVisible, setIsVisible] = useState(false)

//   const fetchJourneyList = async () => {
//     try {
//       //setLoading(true)
//       const response = await journeyApi.get({ page: page, limit: '10' })
//       console.log(response)
//       if (response.length !== 0) {
//         setJourneys((prevState) => {
//           return prevState.concat(response)
//         })
//       } else {
//         console.log('error changing', error)
//         //error.current = true
//       }
//       // setLoading(false)
//     } catch (e) {
//       console.log('Failed to fetch jouney list. Error: ', e)
//     }
//   }

//   useEffect(() => {
//     const callback = (entries) => {
//       const [entry] = entries
//       console.log('entry', entry)
//       setIsVisible(entry.isIntersecting)
//     }
//     const observer = new IntersectionObserver(callback, options)
//     observer.observe(targetRef.current)
//     console.log('journeys', journeys)
//   }, [journeys])

//   useEffect(() => {
//     if (isVisible) {
//       fetchJourneyList()
//     }
//   }, [isVisible])

//   // const targetRef = useCallback(
//   //   (node) => {
//   //     console.log(node)

//   //     const observer = new IntersectionObserver(
//   //       (entries) => {
//   //         entries.forEach((entry) => {
//   //           if (entry.isIntersecting) {
//   //             console.log('Visible')
//   //             setPage((prevState) => {
//   //               console.log(prevState++)
//   //               return prevState++
//   //             })
//   //           }
//   //         })
//   //       },
//   //       {
//   //         root: null,
//   //         rootMargin: '0px',
//   //         threshold: 0,
//   //       },
//   //     )
//   //     if (loading) {
//   //       return observer.disconnect()
//   //     }
//   //     if (error.current) return
//   //     if (node) observer.observe(node)
//   //   },
//   //   [loading],
//   // )

//   return (
//     <div>
//       {journeys.map((journey, index) => {
//         if (index == journeys.length - 1)
//           return (
//             <div key={uuidv4()}>
//               <div className="test-class" ref={targetRef}></div>

//               <JourneyItem journey={journey} key={uuidv4()} />
//             </div>
//           )
//         else return <JourneyItem journey={journey} key={uuidv4()} />
//       })}
//       {console.log('Appending data...')}
//       {error.current && <EndOfContent />}
//       <AddingBtn />
//     </div>
//   )
// }

// const AddingBtn = () => {
//   return (
//     <Box
//       sx={{
//         '& > :not(style)': { m: 1 },
//         position: 'fixed',
//         bottom: 16,
//         right: 16,
//       }}
//     >
//       <Fab
//         color="primary"
//         to="/balo/newjourney"
//         component={Link}
//         size="small"
//         aria-label="add"
//         variant="extended"
//       >
//         <AddIcon sx={{ mr: 1 }} />
//         Chuyến đi mới
//       </Fab>
//     </Box>
//   )
// }

import React, { useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import { useEffect, useRef } from 'react'
import journeyApi from '../../api/journeyApi'
import JourneyItem from './JourneyItem'
import { v4 as uuidv4 } from 'uuid'
import EndOfContent from '../Notification/EndOfContent'

export default function Portal(props) {
  const [journeys, setJourneys] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const error = useRef(false)

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
  useEffect(() => {
    //componentDidMount
    console.log('Fetching data...')
    fetchJourneyList()
    return () => {
      //componentWillUnmount
    }
  }, [page]) //dependency // do once => empty array dependency

  const targetRef = useCallback(
    (node) => {
      console.log(node)

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
        if (index == journeys.length - 2)
          return (
            <JourneyItem journey={journey} ref={targetRef} key={uuidv4()} />
          )
        else return <JourneyItem journey={journey} key={uuidv4()} />
      })}
      {console.log('Appending data...')}
      {loading && (
        <div className="text-center mt-3">Đang tải thêm nội dung...</div>
      )}
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
