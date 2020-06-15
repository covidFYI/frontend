import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TelegramIcon from '@material-ui/icons/Telegram';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
  },
  widget: {
    borderRadius: 5,
    height: 400,
    width: '100%',
    'box-shadow': '0 0 16px 3px rgba(0,0,0,.2)',
  },
  text: {
    fontFamily: 'inherit',
    fontSize: 40,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: '#389ce9',
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
  { "state": "Andaman and Nicobar", "Code": "" },
  { "state": "Andhra Pradesh", "Code": "AP" },
  { "state": "Bihar", "Code": "BH" },
  { "state": "Chandigarh", "Code": "CH" },
  { "state": "Chhattisgarh", "Code": "CG" },
  { "state": "Dadra and Nagar Haveli", "Code": "" },
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
  let stateCode = stateData.state === "National" ? '' : stateData.Code

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.paper}>
            <iframe className={classes.widget} id="preview" src={`https://xn--r1a.website/s/covidfyi` + `${stateCode}`}></iframe>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} className={classes.paper}>
            <span className={classes.text}> Direct to your inbox.<br></br>Stay up to date with our Channel.</span><br></br>
            <Button className={classes.button} href={`https://t.me/covidfyi` + `${stateCode}`} variant="contained" color="primary" size="large">
              <TelegramIcon fontSize="large" />
              Subscribe
              </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}