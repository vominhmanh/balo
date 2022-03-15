import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import FavoriteIcon from '@mui/icons-material/Favorite'
import NavigationIcon from '@mui/icons-material/Navigation'
import CreateTour from '../Createtour/CreateTour'

export default function Portal(props) {
  const AddingBtn = () => {
    return (
      <Box
        sx={{
          '& > :not(style)': { m: 1 },
          position: 'absolute',
          bottom: 16,
          right: 16,
        }}
      >
        <Fab
          color="primary"
          to="/newjourney"
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

  return (
    <>
      <AddingBtn />
    </>
  )
}
