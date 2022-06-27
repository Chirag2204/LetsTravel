import React,{useState} from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'
import useStyles from './styles'
import { PlaceDetails } from '../PlaceDetails/PlaceDetails'
import { HotelSharp } from '@material-ui/icons';

export const List = () => {
  const classes = useStyles();
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')
  const places = [
    { name: 'place 1' },
    { name: 'place 2' },
    { name: 'place3' },
    { name: 'place 1' },
    { name: 'place 2' },
    { name: 'place3' },
    { name: 'place 1' },
    { name: 'place 2' },
    { name: 'place3' }
    
  ]
  return (
    <div className={classes.container}>
      <Typography variant='h5'>Restaurants,Hotels and Attractions around you</Typography>
      <FormControl>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e)=>setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3⭐</MenuItem>
          <MenuItem value={4}>Above 4⭐</MenuItem>
          <MenuItem value={4.5}>Above 4.5⭐</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} classNmae={classes.list}>
        {places?.map((place, key) => (
          <Grid item key={key} xs={12}>
              <PlaceDetails place={place}/>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
