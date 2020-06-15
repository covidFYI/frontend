import React, { Component } from 'react'
import getDataFor from '../utils/getDataFor'
import Auxiliary from '../hoc/Auxiliary/Auxiliary'
import { withStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

const styles = (theme) => ({
	formControl: {
		margin: theme.spacing(3),
		minWidth: 150,
	},
	selectEmpty: {
		marginTop: theme.spacing(1),
	},
});

class AreaDropdown extends Component {

	constructor(props) {
		super(props)
		this.state = {
			areas: [],
			categoryData: [],
			areaSelected: ''
		}
	}

	async componentDidMount() {
		let categoryData = await getDataFor({ state: this.props.state + '/' + this.props.category })
		this.setState({
			areas: [... new Set(categoryData.results.map(data => data.area))],
		})
	}

	async componentDidUpdate(prevProps, prevState) {
		if (prevProps.category !== this.props.category) {
			let categoryData = await getDataFor({ state: this.props.state + '/' + this.props.category })
			this.setState({
				areas: [... new Set(categoryData.results.map(data => data.area))],
				areaSelected: ''
			})
		}
	}

	optionChangeHandler = (event) => {
		this.setState({
			areaSelected: event.target.value
		})
		this.props.clickHandler(event.target.value)
	}

	render() {
		const { classes } = this.props;

		return (
			<Auxiliary>
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="demo-simple-select-outlined-label">District</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={this.state.areaSelected}
						onChange={this.optionChangeHandler.bind(this)}
						label="District"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						{Array.from(this.state.areas).sort().map((area, index) => {
							return (
								<MenuItem value={area} key={index}>{area}</MenuItem>
							)
						})}
					</Select>
				</FormControl>
			</Auxiliary>
		)
	}
}

export default withStyles(styles, { withTheme: true })(AreaDropdown)