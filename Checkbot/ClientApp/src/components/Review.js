import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Check from "./Check";


class Review extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      date: this.props.data.date,
      payTo: this.props.data.payTo,
      amountNumerical: this.props.data.amountNumerical,
      amountPrinted: this.props.data.amountPrinted,
      memo: this.props.data.memo,
      namePrinted: this.props.data.namePrinted,
      routing: this.props.data.routing,
      account: this.props.data.account
    };
  }

  componentDidMount() {
    try {
      let data = this.props.history.location.state.data;
      this.setState({ ...data });
    }
    catch {
    }
  }

  render() {
    const url = this.props.url ? this.props.url : "";

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>{"Review Check Details"}</Typography>
        <Check url={url} />
        <Grid container spacing={3} mb={5}>
          <Grid item xs={12} sm={6}>
            <TextField id="date" name="date" label="Date" value={this.state.date} onChange={e => { this.setState({ date: e.target.value }); this.props.setState({ date: e.target.value }) }} autoComplete="date" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField id="payTo" name="payTo" label="Pay To" value={this.state.payTo} onChange={e => { this.setState({ payTo: e.target.value }); this.props.setState({ payTo: e.target.value }) }}  autoComplete="payTo" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="amountNumerical" name="amountNumerical" label="Amount (Numerical)" value={this.state.amountNumerical} onChange={e => { this.setState({ amountNumerical: e.target.value }); this.props.setState({ amountNumerical: e.target.value }) }} autoComplete="amountNumerical" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField id="amountPrinted" name="amountPrinted" label="Amount (Printed)" value={this.state.amountPrinted} onChange={e => { this.setState({ amountPrinted: e.target.value }); this.props.setState({ amountPrinted: e.target.value }) }} autoComplete="amountPrinted" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="memo" name="memo" label="For" value={this.state.memo} onChange={e => { this.setState({ memo: e.target.value }); this.props.setState({ memo: e.target.value }) }} autoComplete="memo" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="namePrinted" name="namePrinted" label="Name (Printed)" value={this.state.namePrinted} onChange={e => { this.setState({ namePrinted: e.target.value }); this.props.setState({ namePrinted: e.target.value }) }} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="routing" name="routing" label="Routing Number" value={this.state.routing} onChange={e => { this.setState({ routing: e.target.value }); this.props.setState({ routing: e.target.value }) }} autoComplete="routing" fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField id="account" name="account" label="Account Number" value={this.state.account} onChange={e => { this.setState({ account: e.target.value }); this.props.setState({ account: e.target.value }) }} autoComplete="account" fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Checkbox color="secondary" name="confirmValues" value="yes" />} label="Confirm details are correct" />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const styles = (theme) => ({
});

export default withStyles(styles)(Review);
