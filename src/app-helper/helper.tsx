import {Platform} from 'react-native';

export const GOOGLE_PLACES_API_KEY =
  Platform.OS === 'ios'
    ? 'AIzaSyAvTE72kH79LxrvlRKvpNaax_eH5d_rB1o'
    : 'AIzaSyDUMGuaD-q6OWG1ElCYM64fAZrzAk7jrKw';

export const getPlaceName = async (latitude: number, longitude: number) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_PLACES_API_KEY}`,
    );

    if (!response.ok) {
      console.error('Error fetching place name:', response.statusText);
      return null;
    }

    const data = await response.json();
    if (data.results.length > 0) {
      const address = data.results[0].formatted_address;
      console.log('Place Name:', address);
      return address;
    } else {
      console.error('No results found');
      return null;
    }
  } catch (error) {
    console.error('Error fetching place name:', error);
    return null;
  }
};
