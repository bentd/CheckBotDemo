import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MoneyIcon from '@material-ui/icons/Money';

import Check from "../components/Check";
import Storage from "../api/Firebase";



class Home extends React.Component {

  static displayName = Home.name;

  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.formatData = this.formatData.bind(this);
    this.state = { url: "", submitted: false };
  }

  componentDidMount() {
    this.getImage();
  }

  async getImage() {
    let url = await Storage.child(`check_${Math.floor(Math.random() * 50)}.png`).getDownloadURL();
    this.setState({ url });
  }

  async submit() {
    this.setState({ submitted: true });
    const response = await fetch("api/check", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(this.state.url)
    }).then(response => response.json());
    let formattedData = this.formatData(response);
    this.props.history.push("/deposit", { url: this.state.url, data: formattedData});
  }

  formatData(res) {
    let date = "";
    let payTo = "";
    let amountNumerical = "";
    let amountPrinted = "";
    let memo = "";
    let namePrinted = "";
    let routing = "";
    let account = "";

    let string = res.join(' ');
    alert(string);

    let dateRe1 = /[0-9]{1,2}-[\s]{0,3}[0-9]{1,2}-[\s]{0,3}[0-9]{1,2}/;
    let dateRe2 = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{1,2}/;
    date = string.match(dateRe1) !== null ? string.match(dateRe1)[0] : date;
    date = date !== "" ? date : (string.match(dateRe2) ? string.match(dateRe2) : date);

    let payToRe = /[Pp][Aa][Yy]\s[Tt][Oo]\s[Tt][Hh][Ee]\s[Oo][Rr][Dd][Ee][Rr]\s[Oo][Ff]\s([A-Za-z\s]*)/;
    payTo = string.match(payToRe) !== null ? string.match(payToRe)[1] : payTo;

    let amountNumericalRe = /\$\s.[0-9,.\s]*/
    amountNumerical = string.match(amountNumericalRe) !== null ? string.match(amountNumericalRe)[0] : amountNumerical;

    let amountPrintedRe = /[Ss][Ee][Cc][Uu][Rr][Ii][Tt][Yy]\s*([A-Za-z\s-,.]*)[Ff][Ee][Aa][Tt][Uu][Rr][Ee][Ss]\s*[Dd][Oo][Ll][Ll][Aa][Rr][Ss]/;
    amountPrinted = string.match(amountPrintedRe) !== null ? string.match(amountPrintedRe)[1] : amountPrinted;

    let memoRe1 = /[Ff][Oo][Rr]\s*((?:[A-Za-z]*\s)*)((?:[A-Za-z]*\s){2})/;
    memo = string.match(memoRe1) !== null ? string.match(memoRe1)[1] : memo;
    namePrinted = string.match(memoRe1) !== null ? string.match(memoRe1)[2] : namePrinted;

    let numbersRe = /:([0-9]{10})[\s:]*([0-9]{9})/;
    routing = string.match(numbersRe) !== null ? string.match(numbersRe)[1] : routing;
    account = string.match(numbersRe) !== null ? string.match(numbersRe)[2] : account;


    return {
      date,
      payTo,
      amountNumerical,
      amountPrinted,
      memo,
      namePrinted,
      routing,
      account
    }
  }

  render() {
    const { url, files, submitted } = this.state;
    const { classes } = this.props;

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={5} className={classes.image} />
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square className="blue-bg">
          <div className={classes.paper}>
            <Typography component="h1" variant="h1" mb="48px">{ "CheckBot" }</Typography>
            <Check url={url} />
            <form className={classes.form} noValidate>
              <Button variant="contained" color="primary" className={classes.submit} onClick={this.submit} fullWidth>
                {"Deposit"}
              </Button>
            </form>
            {submitted && <CircularProgress visible />}
            {!submitted && <CircularProgress hidden />}
          </div>
        </Grid>
      </Grid>
    );
  }
}

const styles = (theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: `url(stock${Math.floor(Math.random() * 2)}.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: "70%"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export default withStyles(styles)(Home);
