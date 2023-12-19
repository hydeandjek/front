// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function EmergencyDataFetcher({ onDataFetch }) {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'http://openapi.seoul.go.kr:8088/xml/TvEmgcHospitalInfo/1/5/'
//         );

//         onDataFetch(response.data);
//       } catch (error) {
//         console.error('Error fetching emergency data:', error);
//         onDataFetch(null); // Handle error by passing null or an appropriate value
//       }
//     };

//     fetchData();
//   }, [onDataFetch]);

//   return null; // This component doesn't render anything
// }

// export default EmergencyDataFetcher;
