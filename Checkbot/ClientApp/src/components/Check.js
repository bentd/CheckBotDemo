import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';


class Check extends React.Component {
  render() {
    const { classes, url } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia image={url} component="img" />
      </Card>
    );
  }
}

const styles = (theme) => ({
  card: {
    minWidth: "90%",
    maxWidth: "100%"
  },
});

export default withStyles(styles)(Check);
