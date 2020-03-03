import React, {useState} from 'react';
import {CircularProgress} from "@material-ui/core/es/index";

function Results(){
	const [isLoading, toggleLoading] = useState(true);

	const handleSubmitFile = (event) => {
		console.log(event.target);
	};

	setTimeout(() => {
		toggleLoading(false);
	}, 3000);


	return (
		<div>
			{isLoading && <CircularProgress />}
			{!isLoading && <div>Loaded</div>}
		</div>)
}

export default Results;
