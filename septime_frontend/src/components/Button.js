import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default withStyles(() => ({
	root: {
		borderRadius: 0,
		boxShadow: 'none',
		'&:active, &:focus': {
			boxShadow: 'none',
		},
	},
}))(Button);
