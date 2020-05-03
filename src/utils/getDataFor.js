const getDataFor = async (options) => {
  const fetchStateData = async (state) => {
    const res = await fetch(`https://api.covidfyi.in/v1/state/${state}`);
    const response = await res.json();
    return response;
  };

  const fetchStatsData = async (key) => {
    const res = await fetch(`https://api.covidfyi.in/v1/${key}`);
    const response = await res.json();
    return response;
  };

  const isExpired = (lastUpdated) => {
	const last = new Date(JSON.parse(lastUpdated));  
	const now = new Date();
	let diff = (Math.round(((now-last))/1000)/60)/60;
	let updateDurationHours = 12;
	return ( diff > updateDurationHours)
  };

  // If user asks for state Data
  if (options["state"]) {
    let state = options["state"];
    if (localStorage.getItem("states")) {
      let statesData = JSON.parse(localStorage.getItem("states"));

      for (let i = 0; i < statesData.length; i++) {
        // If stateExists and notExpired
        if (statesData[i][state] && !isExpired(statesData[i]["lastUpdated"])) {
          return statesData[i][state];
        }
        // If stateExists and Expired
        if (statesData[i][state] && isExpired(statesData[i]["lastUpdated"])) {
          let data = await fetchStateData(state);
          statesData[i][state] = data;
          const now = new Date();
          statesData[i]["lastUpdated"] = JSON.stringify(now);
          localStorage.setItem("states", JSON.stringify(statesData));
          return statesData[i][state];
        }
      }

      let data = await fetchStateData(state);
      if (statesData.length < 3) {
        const now = new Date();
        statesData.push({ [state]: data, lastUpdated: JSON.stringify(now) });
        localStorage.setItem("states", JSON.stringify(statesData));
        return data;
      } else {
        statesData.shift();
        const now = new Date();
		statesData.push({ [state]: data, lastUpdated: JSON.stringify(now) });
		localStorage.setItem("states", JSON.stringify(statesData));
        return data;
      }
    } else {
      let statesData = [];
      let data = await fetchStateData(state);
      const now = new Date();
	  statesData.push({ [state]: data, lastUpdated: JSON.stringify(now) });
	  localStorage.setItem("states", JSON.stringify(statesData));
      return data;
    }
  }

  if(options['stats']) {
      let key = options['stats'];
      if(localStorage.getItem(key)) {
          if(!isExpired(localStorage.getItem('lastUpdated'))) {
              return JSON.parse(localStorage.getItem(key));
          }
      } 

        let data = await fetchStatsData(key);
        const now = new Date();
        localStorage.setItem(key, JSON.stringify(data));
        localStorage.setItem('lastUpdated', JSON.stringify(now))
        return data;
  }

  if(options['geoLocation']) {
    let key = options['geoLocation'];
    if(localStorage.getItem(key))
        return JSON.parse(localStorage.getItem(key));

    let data = await fetchStatsData(key);
    localStorage.setItem(key, JSON.stringify(data));
    return data;
  }
};

export default getDataFor;
