import axios from "axios";
const URL='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesDetails = async (type,{ sw, ne }) => {
    try {
      const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${ type }/list-in-boundary`,
        {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': 'c6a280b6c2msh54621509ca15e79p1ac770jsn3881b131e06d',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
      return data;
    } catch (error) {
        console.log(error);
    }
}