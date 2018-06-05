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
import { Account, Email, GithubCircle, LinkedinBox } from 'mdi-material-ui';
import * as React from 'react';

const styles: StyleRules = {
  outerContainer: {
    flexGrow: 1
  },
  title: {
    flex: 1
  },
  titleIcon: {
    paddingRight: '0.5em'
  }
};

export interface Props {
  height?: number;
}

class Header extends React.Component<Props & WithStyles> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.outerContainer}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Account className={classes.titleIcon} />
            <Typography
              className={classes.title}
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
