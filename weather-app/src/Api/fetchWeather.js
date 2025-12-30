
const API_KEY = "f024287a4e4aec6b3f0587ca851c3561";


// export const fetchWeather = async (city) => {
//   const res = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
//   );
//   return res.json();
// };

const BASE = "https://api.openweathermap.org/data/2.5";

export const getCityWeather = async (city) => {
  const res = await fetch(
    `${BASE}/weather?q=${city}&units=imperial&appid=${API_KEY}`
  );
  return res.json();
};

export const getOneCall = async (lat, lon) => {
  const res = await fetch(
    `${BASE}/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  const data = await res.json();
  // console.log("ONE CALL:", data); // <- IMPORTANT
  return data;
};
