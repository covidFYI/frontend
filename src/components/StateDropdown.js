import Link from 'next/link'
import Auxiliary from '../hoc/Auxiliary/Auxiliary'
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(3),
		minWidth: 150,
	},
	selectEmpty: {
		marginTop: theme.spacing(1),
	},
	linkDecoration: {
		textDecoration: "none",
		color: "black"
	}
}));

const stateOptions = [
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
	"Tripura "
]

export default function SimpleSelect(props) {
	const classes = useStyles();
	let [value, setStateValue] = useState(0);
	value = props.state ? props.state : value

	const stateChangeHandler = (event) => {
		setStateValue(event.target.value);
		props.clickHandler(event.target.value)
	};

	return (
		<Auxiliary>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
				<Select
					labelId="demo-simple-select-outlined-label"
					id="demo-simple-select-outlined"
					value={value}
					onChange={stateChangeHandler}
					label="State"
				>
					{Array.from(stateOptions).sort().map((state, index) => {
						return (
							<MenuItem
								value={state}
								key={index}
							>
								<Link href={`/${state}`} as={`/${state}`} key={index}>
									<a className={classes.linkDecoration}>
										{state}
									</a>
								</Link>
							</MenuItem>
						)
					})}
				</Select>
			</FormControl>
		</Auxiliary >
	);
}