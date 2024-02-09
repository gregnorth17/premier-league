/* eslint-disable no-undef */
import axios from 'axios';


// const handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: 'Ahoy there'})
//   }
// }

// export { handler }

// exports.handler = async (event, context) => {

// }

// export default async (req, context) => {
//   // const apiKey = Netlify.env
//   // return new Response("Hello, world!");
  
// }

// eslint-disable-next-line no-undef
exports.handler = async (event, context) => {
  const apiKey = process.env.API_KEY
  const url = "https://v3.football.api-sports.io/standings?league=39&season=2023"
  const {data} = await axios.get(url, {
    headers: {
			"x-apisports-key" : apiKey
    }
  })
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    console.error(error)
  }
}


// export const handler = async (event, context) => {
//   // const apiKey = process.env.API_KEY;
//   const apiKey = Netlify.env.get('API_KEY')
//   const url = "https://v3.football.api-sports.io/standings?league=39&season=2023";
  
//   const {data} = await axios.get(url, {
//     headers: {
//       "x-apisports-key" : apiKey
//     }
//   })
//   // .then(res => res.data)
//   try {
//     return {
//       statusCode: 200,
//       body: JSON.stringify(data)
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// export const getLeagueData = async () => (
//   await axios.get(`https://v3.football.api-sports.io/standings?league=39&season=2023`, {headers}).then(res => res.data)
// )

// exports.handler = async function (event, context) {
//   const value = process.env.MY_IMPORTANT_VARIABLE;

//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: `Value of MY_IMPORTANT_VARIABLE is ${value}.` }),
//   };  
// };

