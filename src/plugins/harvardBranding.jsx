import Typography from '@mui/material/Typography';
import HarvardShield from '../images/harvardShield.png';

function harvardBranding() {
  return (
    <div className="WithPlugins(WorkspaceControlPanel)-branding-2">
      <Typography align="center">
        <img src={HarvardShield} alt="" height="40px" width="40px" />
      </Typography>
    </div>
  );
}

export default {
  name: 'HarvardBrandingPlugin',
  target: 'Branding',
  mode: 'wrap',
  component: harvardBranding,
};
