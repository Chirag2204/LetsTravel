import React,{useEffect, useState} from "react";
import { Header } from "./components/Header/Header";
import {  CssBaseline, Grid } from "@material-ui/core";
import { List } from "./components/List/List";
import { PlaceDetails } from "./components/PlaceDetails/PlaceDetails";
import { Map } from "./components/Map/Map";
import { CropFree } from "@material-ui/icons";
import { getPlacesDetails } from "./api/index";

function App() {
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setfilteredPlaces] = useState([])

  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })
  const [bounds,setBounds] = useState({})
//  const[coords,setCoords] =useState({coordinates: {lat : 0,lng:0},bounds:{}})
  
  const [childClick, setChildClick] = useState(null)
  const [isloading, setIsloading] = useState(false)

   const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState(0)
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({lat:latitude,lng:longitude})
    
    })
  }, [])
  
 
  useEffect(() => {
    // console.log(coordinates);
    // console.log(bounds);
    setIsloading(true)
    // console.log('log1');
    // console.log(bounds);
    getPlacesDetails(type,bounds)
      .then((data) => {
        // console.log(data);
        setPlaces(data)
        setfilteredPlaces([])
        setRating(0)
        setIsloading(false)
      })
    
  }, [coordinates, bounds,  type])
  
  useEffect(() => {
      setfilteredPlaces(places.filter((place)=> place.rating>rating))
    }
  , [rating])
  
  
  return (
    <>
      <CssBaseline>
        <Header setCoordinates={setCoordinates} />
        <Grid container spacing='3' style={{ inline: '100%' }}>
       
          <Grid item xs={12} md={4}>
            <List
              places={filteredPlaces.length? filteredPlaces :places}
              childClick={childClick}
              isloading={isloading}   
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </Grid>
           <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filteredPlaces.length ? filteredPlaces :places}
              setChildClick={setChildClick}
            />
          </Grid>
        </Grid>
     </CssBaseline>
    </>
  );
}

export default App;
