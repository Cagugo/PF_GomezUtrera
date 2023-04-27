// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// eslint-disable-next-line react/prop-types
const MessageSuccess = ({ purchaseID }) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				Gracias por su compra! su id de transacción es: {purchaseID}
			</Alert>
		</Stack>
	);
};

export default MessageSuccess;
