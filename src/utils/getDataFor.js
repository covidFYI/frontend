const getDataFor = async (options) => {
  console.log("Hello");
  const fetchStateData = async (state) => {
    const res = await fetch(`https://api.covidfyi.in/v1/state/${state}`);
    const response = await res.json();
    return response;
  };

  const isExpired = (lastUpdated) => {
	const last = lastUpdated;  
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
          statesData[i]["lastUpdated"] = now;
          localStorage.setItem("states", JSON.stringify(statesData));
          return statesData[i][state];
        }
      }

      let data = await fetchStateData(state);
      if (statesData.length < 3) {
        const now = new Date();
        statesData.push({ [state]: data, lastUpdated: now });
        localStorage.setItem("states", JSON.stringify(statesData));
        return data;
      } else {
        statesData.shift();
        const now = new Date();
		statesData.push({ [state]: data, lastUpdated: now });
		localStorage.setItem("states", JSON.stringify(statesData));
        return data;
      }
    } else {
      let statesData = [];
      let data = await fetchStateData(state);
      const now = new Date();
	  statesData.push({ [state]: data, lastUpdated: now });
	  localStorage.setItem("states", JSON.stringify(statesData));
      return data;
    }
  }
};

export default getDataFor;
