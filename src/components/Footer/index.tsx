import { Typography, withStyles, WithStyles } from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { gray } from '@src/lib/colors';
import { currentYear } from '@src/lib/utils';
import * as React from 'react';

const styles: StyleRules = {
  container: {
    backgroundColor: gray,
    bottom: 0,
    padding: '1em 2em',
    position: 'absolute',
    width: '100%'
  }
};

class Footer extends React.Component<WithStyles> {
  render() {
    const { classes } = this.props;
    const year = currentYear();

    return (
      <div className={classes.container}>
        <Typography color="inherit" variant="body1">
          &copy; {year} Mitch Lindsay
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Footer);
