import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab'
import useStyles from './styles'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const Map = () => {
  const classes = useStyles();
  const isMobile=useMediaQuery('(min-width : 600px)')
  const coordinates={ lat: 59.95,
      lng: 30.33}
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCfQpCTOhWjaUDtU9xYPwyKH1j5H9XEQ9c' }}
        defaultCenter={{ ...coordinates }}
          defaultZoom={15}
      >
        <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
    </div>
  )
}
