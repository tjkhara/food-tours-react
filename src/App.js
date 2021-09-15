import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTours = async () => {
    setIsLoading(true)

    try {
      const response = await fetch(url);
      const receivedTours = await response.json();
      setIsLoading(false)  
      setTours(() => {
        return receivedTours
      })
    } catch (error) {
      setIsLoading(false)
      console.log(error)      
    }
  }
  
  useEffect(() => {
    getTours()
  }, [])

  const removeTourHandler = (id) => {
    setTours((prevState) => {
      return prevState.filter((tour) => {
        return tour.id !== id
      })
    })
  }

  if(isLoading) {
    return <main> <Loading /> </main>
  }

  if(tours.length === 0) {
    return <main> 
              <div className='title'>
                <h2>No tours left...</h2>
                <button className="btn" type="button" onClick={() => getTours()}>Get tours</button>
              </div>
            </main>
  }

  return (
    <main>
      <Tours tours={tours} onRemoveTour={removeTourHandler}  />  
    </main>
  )
}

export default App
