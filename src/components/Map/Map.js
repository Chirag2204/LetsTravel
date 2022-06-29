import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating'
import useStyles from './styles'


export const Map = ({coordinates,places,setCoordinates,setBounds,setChildClick}) => {
  const classes = useStyles();
  const isDesktop = useMediaQuery('(min-width : 600px)')
   console.log({coordinates});
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        resetBoundsOnResize={false}
        bootstrapURLKeys={{ key: 'AIzaSyCfQpCTOhWjaUDtU9xYPwyKH1j5H9XEQ9c' }}
        center={coordinates }
        defaultCenter={{ ...coordinates }}
        defaultZoom={14}
        margin={[50, 50,50,50]}
        options={''}
        onChange={(e) => {
          // console.log(e)
         
            setCoordinates({ lat: e.center.lat, lng: e.center.lng })
            setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }
          
        }
        onChildClick={(child) =>  setChildClick(child)}
      >
        {places?.map((place, i) => (
          <div
            className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            {!isDesktop ? (
              <LocationOnOutlinedIcon color='primary' size='large' />
            ) : (
              <Paper elevation={3} className={classes.paper}>
                  
                  <img size='small' className={classes.pointer} src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                  alt={place.name}
                  />
                  <Typography className={classes.typograph} variant='subtitle' gutterBottom>
                    {place.name}
                  </Typography>
                  <Rating size='small' value={Number( place.rating )} read-only></Rating>
                </Paper>
            )
          
            }
            </div>
        ))}
        
        </GoogleMapReact>
    </div>
  )
}
