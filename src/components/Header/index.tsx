import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import constants from '@src/constants';
import { Email, GithubCircle, LinkedinBox } from 'mdi-material-ui';
import * as React from 'react';

const styles: StyleRules = {
  flex: {
    flex: 1
  },
  root: {
    flexGrow: 1
  }
};

export interface Props {
  height?: number;
}

class Header extends React.Component<Props & WithStyles> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              className={classes.flex}
              color="inherit"
              variant="title"
            >
              Mitch Lindsay
            </Typography>
            <IconButton
              color="inherit"
              href={`mailto:${constants.contactEmail}`}
            >
              <Email />
            </IconButton>
            <IconButton color="inherit" href={constants.githubUrl}>
              <GithubCircle />
            </IconButton>
            <IconButton color="inherit" href={constants.linkedinUrl}>
              <LinkedinBox />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
