import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Form from './Components/Form';
import GiphyDisplay from './Components/GiphyDisplay';

function App() {
  const API_KEY = "BAdJReQ6ctJrdVLVmZfSFCGe9987o0Vc";

  const [giphy, setGiphy] = useState(null)

  const getGiphy = async (searchTerm) => {

    console.log("Function being Called")

    // Make API call
    const response = await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)

    // Saving response data to a variable
    const responseData = response.data

    console.log(responseData)

    setGiphy(responseData)
  }

  // useEffect(() => {
  //   getGiphy()
  // }, [])

  return (
    <div className='App'>
      <Form getGiphy={getGiphy} />
      {giphy ? <GiphyDisplay giphyData={giphy} /> : ""}

    </div>
  );

}

export default App;
