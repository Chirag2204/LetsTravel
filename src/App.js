import { Header } from "./components/Header/Header";
import {  CssBaseline, Grid } from "@material-ui/core";
import { List } from "./components/List/List";
import { PlaceDetails } from "./components/PlaceDetails/PlaceDetails";
import { Map } from "./components/Map/Map";
import { CropFree } from "@material-ui/icons";

function App() {
  return (
    <>
      <CssBaseline>
        <Header />
        <Grid container spacing='3' style={{ inline: '100%' }}>
       
          <Grid item xs={12} md={3}>
             <List/>
          </Grid>
           <Grid item xs={12} md={8}>
             <Map/>
          </Grid>
        </Grid>
     </CssBaseline>
    </>
  );
}

export default App;
