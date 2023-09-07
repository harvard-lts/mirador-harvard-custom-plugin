import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import HarvardShield from '../images/harvardShield.png';

class harvardBranding extends Component {
  render() {
    return (
        <div class="WithPlugins(WorkspaceControlPanel)-branding-2">
          <Typography align="center">
            <img src={HarvardShield} alt="" height="40px" width="40px"></img>
          </Typography>
        </div>
    );
  }
}

export default {
  target: 'Branding',
  mode: 'wrap',
  component: harvardBranding,
}