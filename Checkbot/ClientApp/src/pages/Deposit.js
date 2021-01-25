import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Complete from '../components/Complete';
import Review from '../components/Review';


class Deposit extends React.Component {

  static displayName = Deposit.name;

  constructor(props) {
    super(props);
    this.handleBack = this.handleBack.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.goHome = this.goHome.bind(this);

    let url;
    let data;

    try {
      url = this.props.history.location.state.url;
      data = this.props.history.location.state.data;
      this.state = {
        activeStep: 0,
        steps: ["Review", "Complete"],
        url,
        date: data.date,
        payTo: data.payTo,
        amountNumerical: data.amountNumerical,
        amountPrinted: data.amountPrinted,
        memo: data.memo,
        namePrinted: data.namePrinted,
        routing: data.routing,
        account: data.account
      };
    }
    catch{
      this.state = {
        activeStep: 0,
        steps: ["Review", "Complete"],
        url: "",
        date: "",
        payTo: "",
        amountNumerical: "",
        amountPrinted: "",
        memo: "",
        namePrinted: "",
        routing: "",
        account: ""
      };
    }


  }

  componentDidMount() {
  }

  getStepContent(step) {
    let { date, payTo, amountNumerical, amountPrinted, memo, namePrinted, routing, account } = this.state;
    let data = { date, payTo, amountNumerical, amountPrinted, memo, namePrinted, routing, account };
    switch (step) {
      case 0:
        return <Review url={this.state.url} data={data} setState={this.setState.bind(this)} forceUpdate={this.forceUpdate.bind(this)} />;
      case 1:
        this.setState();
        return <Complete url={this.state.url} data={{ ...data }} />;
      default:
        throw new Error('Unknown step');
    }

  }

  handleBack() {
    this.setState({ activeStep: (this.state.activeStep - 1) });
  }

  handleNext() {
    this.setState({ activeStep: (this.state.activeStep + 1) });
  }

  goHome() {
    this.props.history.push("/");
}



  render() {
    const { activeStep, steps } = this.state;
    const { classes } = this.props;

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Mobile Deposit
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>{ "Thank you for your deposit." }</Typography>
                  <Typography variant="subtitle1">
                    Your deposit will be posted to your account shortly.
                  </Typography>
                  <Button variant="contained" color="primary" onClick={this.goHome} className={classes.button}>{"Home"}</Button>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {this.getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={this.handleBack} className={classes.button}>{ "Back" }</Button>
                      )}
                      <Button variant="contained" color="primary" onClick={this.handleNext} className={classes.button} >
                        {activeStep === steps.length - 1 ? 'Place Deposit' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
            </React.Fragment>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const styles = (theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: "linear-gradient(skyblue, #2640C5)"
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

export default withStyles(styles)(Deposit);