import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const removeRecord = (id) => {
    console.log(id);

    const newTours = tours.filter((tour) => tour.id !== id);
    console.log(newTours);
    setTours(newTours);
  };

  const fetchTourData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const tour = await response.json();

      if (tour) {
        setLoading(false);
        setTours(tour);
      }
    } catch (error) {
      setLoading(false);
      setTours([]);
    }
  };

  useEffect(() => {
    fetchTourData();
  }, []);

  if (tours.length === 0) {
    return (
      <main>
        <p className="title">No Tour Data Found</p>
        <button className="btn" onClick={fetchTourData}>
          Refresh
        </button>
      </main>
    );
  }
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <main>
      <Tours tours={tours} removeRecord={removeRecord}></Tours>
    </main>
  );
}

export default App;
