import React from "react";
import Autocomplete from "./Autocomplete";

export default class SearchBar extends React.Component {
	render() {
        // Hardcoding StateList till api endpoints are ready
		return (
			<Autocomplete
                getSelectedState={this.props.getSelectedState}
                focusHandler={this.props.focusHandler}
				options={[
					"Goa",
					"Jammu and Kashmir",
					"Maharashtra",
					"Nagaland",
					"Tamil Nadu",
					"Uttar Pradesh",
					"Karnataka",
					"Odisha",
					"Assam",
					"Punjab",
					"Jharkhand",
					"Madhya Pradesh",
					"Kerala",
					"West Bengal",
					"Rajasthan",
					"Haryana",
					"Meghalaya",
					"Arunachal Pradesh",
					"Andaman and Nicobar",
					"Andhra Pradesh",
					"Bihar",
					"Chandigarh",
					"Chhattisgarh",
					"Dadra and Nagar Haveli",
					"Daman and Diu",
					"Delhi",
					"Gujarat",
					"Himachal Pradesh",
					"Ladakh",
					"Lakshadweep",
					"Manipur",
					"Mizoram",
					"National",
					"Puducherry",
					"Sikkim",
					"Telangana",
					"Tripura",
					"Uttarakhand",
					"Tripura ",
                ]}
			/>
		);
	}
}
