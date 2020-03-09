import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from './Button';
import Typography from './Typography';


const styles = () => {
	return {
		root: {
			display: 'flex',
			overflow: 'hidden',
			flexDirection: 'column',
		},
		container: {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		item: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		number: {
			fontSize: 24,
		},
		image: {
			height: 55,
		},
		curvyLines: {
			pointerEvents: 'none',
			position: 'absolute',
			top: -180,
			opacity: 0.7,
		},
	};
};

function ProductHowItWorks(props) {
	const {classes} = props;
	return (
		<section className={classes.root}>
			<img
				src="https://github.com/mui-org/material-ui/blob/master/docs/static/themes/onepirate/productCurvyLines.png?raw=true"
				className={classes.curvyLines}
				alt="curvy lines"
			/>
			<h1 id={"HowItWorksHeader"}
					className={classes.title}> How it works</h1>
			<div>
				<Grid container spacing={5}>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<div className={classes.number}>1.</div>
							<Typography variant="h5" align="center">
								Get your audio file. Here is a <a href={"null"}>sample one.</a>
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<div className={classes.number}>2.</div>
							<Typography variant="h5" align="center">
								Upload it to our online transcription service. The first one is for free.
							</Typography>
						</div>
					</Grid>
					<Grid item xs={12} md={4}>
						<div className={classes.item}>
							<div className={classes.number}>3.</div>
							<Typography variant="h5" align="center">
								See your transcript when it has been finished being uploaded.
							</Typography>
						</div>
					</Grid>
				</Grid>
			</div>
			<Button
				color="secondary"
				size="large"
				variant="contained"
				className={classes.button}
				onClick={props.goToResults}
			>
				Get started
			</Button>
		</section>
	);
}

ProductHowItWorks.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
