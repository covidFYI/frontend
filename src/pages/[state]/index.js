import { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Footer from '../../components/Footer'
import NavigationBar from '../../components/NavigationBar'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import StateDropdown from '../../components/StateDropdown'
import CategoryData from '../../components/CategoryData'
import AreaDropdown from '../../components/AreaDropdown'
import getDataFor from '../../utils/getDataFor';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import CallIcon from '@material-ui/icons/Call';
import HealingIcon from '@material-ui/icons/Healing';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PersonIcon from '@material-ui/icons/Person';
import ColorizeSharpIcon from '@material-ui/icons/ColorizeSharp';
import Categories from '../../components/Categories'
import AdditionalFilters from "../../components/AdditionalFilters";
import Telegram from '../../components/TelegramComponent'
import Twitter from '../../components/TwitterComponent'

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box>
					<Typography component={'div'}>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `scrollable-force-tab-${index}`,
		'aria-controls': `scrollable-force-tabpanel-${index}`,
	};
}

const categories = {
	0: 'Helplines',
	1: 'Hospitals',
	2: 'Laboratories',
	3: 'Fever Clinics',
	4: 'Quarantine Facilities',
	5: 'Doctors',
	6: 'Government Contacts'
}

async function getCategoryList(state) {
	let categoryData = await getDataFor({ state: state })
	let categoryList = [... new Set(categoryData.results.map(data => data.category))]
	return categoryList
}

function getTabs(categories) {
	console.log(categories)
}

const Index = ({ state }) => {

	const [value, setValue] = useState(0)
	let categoryList = getCategoryList(state)
	let [selectedState, setSelectedState] = useState(0)
	let [selectedDistrict, setDistrict] = useState(0)
	let [selectedCategory, setCategory] = useState(0)
	let [selectedSubCategory, setSubCategory] = useState(0)
	selectedState = state ? state : selectedState
	selectedCategory = selectedCategory ? selectedCategory : categories[0]

	const handleChange = (event, newValue) => {
		setValue(newValue);
		categoryChangeHandler(newValue)
	};
	const stateChangeHandler = (state) => {
		setSelectedState(state);
	}
	const districtChangeHandler = (district) => {
		setDistrict(district);
	}

	const subcategoryChangeHandler = (subCategory) => {
		console.log(subCategory)
		setSubCategory(subCategory);
	}

	const categoryChangeHandler = (categoryIndex) => {
		setCategory(categories[categoryIndex])
		// setDistrict('')
		setSubCategory([])
	}

	return (
		<Auxiliary>
			<NavigationBar />
			<div className="container">
				<div className="content">
					<StateDropdown category={selectedCategory} state={state} clickHandler={stateChangeHandler} />
					<AreaDropdown category={selectedCategory} state={state} clickHandler={districtChangeHandler} selectedDistrict={selectedDistrict} />
					{/* <Categories category={selectedCategory} state={state} selectedDistrict={selectedDistrict} clickHandler={categoryChangeHandler} /> */}
					<AppBar position="static" color="transparent">
						<Tabs
							value={value}
							onChange={handleChange}
							variant="scrollable"
							scrollButtons="on"
							indicatorColor="primary"
							textColor="primary"
							aria-label="scrollable force tabs example"
						>
							<Tab label="Helplines" icon={<CallIcon fontSize="large" />} {...a11yProps(0)} />
							<Tab label="Hospitals" icon={<LocalHospitalIcon fontSize="large" />} {...a11yProps(1)} />
							<Tab label="Laboratories" icon={<ColorizeSharpIcon fontSize="large" />} {...a11yProps(2)} />
							<Tab label="Fever Clinics" icon={<HealingIcon fontSize="large" />} {...a11yProps(3)} />
							<Tab label="Quarantine Facilities" icon={<HomeIcon fontSize="large" />} {...a11yProps(4)} />
							<Tab label="Doctors" icon={<PersonIcon fontSize="large" />} {...a11yProps(5)} />
							<Tab label="Government Contacts" icon={<ContactMailIcon fontSize="large" />} {...a11yProps(6)} />
						</Tabs>
					</AppBar>
					<AdditionalFilters state={selectedState} category={selectedCategory} area={selectedDistrict} clickHandler={subcategoryChangeHandler} />
					<TabPanel value={value} index={0}>
						<CategoryData state={selectedState} category="Helplines" area={selectedDistrict} subCategorySelected={selectedSubCategory} />
					</TabPanel>
					<TabPanel value={value} index={1}>
						<CategoryData state={selectedState} category="Hospitals" area={selectedDistrict} subCategorySelected={selectedSubCategory} />
					</TabPanel>
					<TabPanel value={value} index={2}>
						<CategoryData state={selectedState} category="Laboratories" area={selectedDistrict} subCategorySelected={selectedSubCategory} />
					</TabPanel>
					<TabPanel value={value} index={3}>
						<CategoryData state={selectedState} category="Fever Clinics" area={selectedDistrict} subCategorySelected={selectedSubCategory} />
					</TabPanel>
					<TabPanel value={value} index={4}>
						<CategoryData state={selectedState} category="Quarantine Facilities" area={selectedDistrict} subCategorySelected={selectedSubCategory} />
					</TabPanel>
					<TabPanel value={value} index={5}>
						<CategoryData state={selectedState} category="Doctors" area={selectedDistrict} subCategorySelected={selectedSubCategory} />
					</TabPanel>
					<TabPanel value={value} index={6}>
						<CategoryData state={selectedState} category="Government Contacts" area={selectedDistrict} subCategorySelected={selectedSubCategory} />
					</TabPanel>
					<Twitter state={selectedState} />
					<Telegram state={selectedState} />
				</div>
			</div>

			<Footer />
		</Auxiliary >
	)
}

Index.getInitialProps = async ({ query }) => {
	const { state } = query;
	return { state }
}

export default Index;