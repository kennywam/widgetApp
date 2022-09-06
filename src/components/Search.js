import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  //states
  const [term, setTerm] = useState("ReactJs");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  /*Fixing muliple requests from api by creating 2 useEffect hooks*/

  useEffect(() => {
    //first hook
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]); //Whenever term changes, the timer is cancelled and new timer set.
  //deBouncedTerm updates if the time elapses without term changing

  useEffect(() => {
    //second hook
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm, //when user changes term, it means the debouncedTerm has
          //to be updated for this request to be made
        },
      });

      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]); // this hook is initially render whenever the component runs
  //When term changes...this waits until debounced time is updated

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="ui field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
      <div className="ui called list">{renderedResults}</div>
    </div>
  );
};

export default Search;
