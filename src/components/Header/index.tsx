import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import { StyleRules } from '@material-ui/core/styles';
import { contactEmail, githubUrl, linkedinUrl } from '@src/lib/constants';
import { Account, Email, GithubCircle, LinkedinBox } from 'mdi-material-ui';
import * as React from 'react';

const styles: StyleRules = {
  container: {
    flexGrow: 1
  },
  title: {
    flex: 1
  },
  titleIcon: {
    paddingRight: '0.5em'
  }
};

class Header extends React.Component<WithStyles> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
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
            <IconButton color="inherit" href={`mailto:${contactEmail}`}>
              <Email />
            </IconButton>
            <IconButton color="inherit" href={githubUrl}>
              <GithubCircle />
            </IconButton>
            <IconButton color="inherit" href={linkedinUrl}>
              <LinkedinBox />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
