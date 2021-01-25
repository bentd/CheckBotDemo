import React from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Check from "./Check";

const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];

const fields = ["date", "payTo", "amountNumerical", "amountPrinted", "memo", "namePrinted", "routing", "account"];


class Complete extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: { name: 'Date', detail: 'XX/XX/XX' },
      payTo: { name: 'Pay To', detail: '...' },
      amountNumerical: { name: 'Amount (Numerical)', detail: '$' },
      amountPrinted: { name: 'Amount (Printed)', detail: '... ' },
      memo: { name: 'For', detail: '...' },
      namePrinted: {name: "Name Printed", detail: "..."},
      routing: { name: 'Routing Number', detail: '000000000' },
      account: { name: 'Account Number', detail: '000000000' },
    }
  }

  componentDidMount() {
    this.setState({
      date: { name: 'Date', detail: this.props.data.date ? this.props.data.date : this.state.date.detail },
      payTo: { name: 'Pay To', detail: this.props.data.payTo ? this.props.data.payTo : this.state.payTo.detail},
      amountNumerical: { name: 'Amount (Numerical)', detail: this.props.data.amountNumerical ? this.props.data.amountNumerical : this.state.amountNumerical.detail },
      amountPrinted: { name: 'Amount (Printed)', detail: this.props.data.amountPrinted ? this.props.data.amountPrinted : this.state.amountPrinted.detail },
      memo: { name: 'For', detail: this.props.data.memo ? this.props.data.memo : this.state.memo.detail  },
      namePrinted: { name: "Name Printed", detail: this.props.data.namePrinted ? this.props.data.namePrinted : this.state.namePrinted.detail  },
      routing: { name: 'Routing Number', detail: this.props.data.routing ? this.props.data.routing : this.state.routing.detail },
      account: { name: 'Account Number', detail: this.props.data.account ? this.props.data.account : this.state.account.detail },
    })
  }

  render() {
    const { classes } = this.props;
    const url = this.props.url ? this.props.url : "";

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>{"Deposit Summary"}</Typography>
        <Check url={url} />
        <Grid container spacing={2}>
          <Grid item container direction="column" xs={12}>
            <Grid container>
              {fields.map((field) => (
                <React.Fragment key={this.state[field].name}>
                  <Grid item xs={5}>
                    <Typography gutterBottom>{this.state[field].name}</Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography gutterBottom>{this.state[field].detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

const styles = (theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
});

export default withStyles(styles)(Complete);