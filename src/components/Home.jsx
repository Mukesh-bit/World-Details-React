import React, { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import SelectMenu from "./SelectMenu";
import CountriesContainer from "./CountriesContainer";
import { ThemeContext } from "../../Context/ThemeContext";

const Home = () => {
  const [query, setQuery] = useState("")

  const [isDark] = useContext(ThemeContext)
  return (
    <main className={`${isDark ? 'dark' : ''}`}>
        <div className="search-filter-container">
          <SearchBar setquery={setQuery}/>
          <SelectMenu setQuery={setQuery}/>
        </div>

        <CountriesContainer query={query}/>
      </main>
  )
}

export default Home