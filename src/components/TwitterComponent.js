import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
  },
  text: {
    fontFamily: 'inherit',
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: 'rgba(29,161,242,1.00)',
    marginTop: 50,
  },

}));

const stateInfoMapping = [
  { "state": "Goa", "Code": "GA" },
  { "state": "Jammu and Kashmir", "Code": "JK" },
  { "state": "Maharashtra", "Code": "MH" },
  { "state": "Nagaland", "Code": "NL" },
  { "state": "Tamil Nadu", "Code": "TN" },
  { "state": "Uttar Pradesh", "Code": "UP" },
  { "state": "Karnataka", "Code": "KA" },
  { "state": "Odisha", "Code": "OD" },
  { "state": "Assam", "Code": "AS" },
  { "state": "Punjab", "Code": "PB" },
  { "state": "Jharkhand", "Code": "JH" },
  { "state": "Madhya Pradesh", "Code": "MP" },
  { "state": "Kerala", "Code": "KL" },
  { "state": "West Bengal", "Code": "WB" },
  { "state": "Rajasthan", "Code": "RJ" },
  { "state": "Haryana", "Code": "HR" },
  { "state": "Meghalaya", "Code": "ML" },
  { "state": "Arunachal Pradesh", "Code": "AR" },
  { "state": "Andaman and Nicobar", "Code": "AN" },
  { "state": "Andhra Pradesh", "Code": "AP" },
  { "state": "Bihar", "Code": "BH" },
  { "state": "Chandigarh", "Code": "CH" },
  { "state": "Chhattisgarh", "Code": "CG" },
  { "state": "Dadra and Nagar Haveli", "Code": "DN" },
  { "state": "Daman and Diu", "Code": "DD" },
  { "state": "Delhi", "Code": "DL" },
  { "state": "Gujarat", "Code": "GJ" },
  { "state": "Himachal Pradesh", "Code": "HP" },
  { "state": "Ladakh", "Code": "LA" },
  { "state": "Lakshadweep", "Code": "LD" },
  { "state": "Manipur", "Code": "MN" },
  { "state": "Mizoram", "Code": "MZ" },
  { "state": "National", "Code": "IN" },
  { "state": "Puducherry", "Code": "PY" },
  { "state": "Sikkim", "Code": "SK" },
  { "state": "Telangana", "Code": "TS" },
  { "state": "Tripura", "Code": "TR" },
  { "state": "Uttarakhand", "Code": "UK" },
]

export default function FullWidthGrid(props) {
  const classes = useStyles();
  let stateData = stateInfoMapping.filter(data => data.state === props.state).pop()
  let state = stateData.state === "National" ? "India" : stateData.state
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={1}></Grid>
        <Grid item xs={12} sm={5}>
          <Paper elevation={0} className={classes.paper}>
            <span className={classes.text}>
              Join COVIDFYI {`${state}`} in conversation<br></br>Follow us on Twitter.<br></br>
              <Button className={classes.button} href={`https://twitter.com/Covidfyi` + `${stateData.Code}` + `?ref_src=twsrc%5Etfw`} variant="contained" color="primary" size="large"><TwitterIcon fontSize="large" />Follow @Covidfyi{`${stateData.Code}`}</Button>
            </span>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Paper elevation={0} className={classes.paper}>
            <a className="twitter-timeline" data-theme="dark" data-height="400" data-width="550" href={`https://twitter.com/covidfyi` + `${stateData.Code}` + `?ref_src=twsrc%5Etfw`}>
              Tweets by COVIDFYI {`${state}`}
            </a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </Paper>
        </Grid>
        <Grid item sm={1}></Grid>
      </Grid>
    </div>
  );
}
