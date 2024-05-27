import React, { useState, useEffect } from "react";
import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";


function App() {
  // State to hold planeteers and the search term
  const [planeteers, setPlaneteers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

// Fetches the planeteers data from local API
  async function fetchData(){
    const response = await fetch("http://localhost:8003/planeteers");
    const planeteers = await response.json();
    setPlaneteers(planeteers);
    console.log(planeteers);

  }

  useEffect(() => {fetchData()}, [])


  const handleSearch = (term) => {
    setSearchTerm(term);
  };
  // Filters the planeteers based on what the user searches
  const filteredPlaneteers = planeteers.filter(planeteer =>
    planeteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    planeteer.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return(
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <RandomButton planeteers={planeteers} />
      <PlaneteersContainer planeteers={filteredPlaneteers} />
    </div>
  );
}

export default App;
