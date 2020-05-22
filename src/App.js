import React, { useEffect, useState } from 'react';

function App() {
	const [ location, setLocation ] = useState({});

	useEffect(() => {
		navigator.geolocation.watchPosition(onLocationReceived);
	},[]);

	const onLocationReceived = location => {
		const { latitude, longitude } = location.coords;
		setLocation({
			latitude,
			longitude
		})
		console.log(location);
	} 

	return (
		<div>
			Latitude: {location.latitude} <br />
			Longitude: {location.longitude}
		</div>
	);
}

export default App;
