import React from 'react'
import { makeStyles, Grid, Typography, Box } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Typing from 'react-typing-animation'
import ContactTray from './ContactTray'
import Button from '@material-ui/core/Button'
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined'
import Zoom from '@material-ui/core/Zoom'

export default function LandingPage() {
	
	const classes = useStyles()

	return (
		<>
			<Grid container>
				<Grid item xs={3} md={5}></Grid>
				<Grid item xs={6} md={2}>
					<Avatar alt="Nick's profile pic" className={classes.profile} src="profile.jpg" />
				</Grid>
				<Grid item xs={3} md={5}></Grid>
			</Grid>
			<Typing speed={50} className={classes.text}>
				<Typography variant="h3">Hello, my name is<br /><span className={classes.name}>Nick dos Santos</span><br />Fullstack Software Engineer</Typography>
			</Typing>
			<Box display={{ xs: 'block', sm: 'none' }} >
				<Zoom in={true} style={{ transitionDelay: '5300ms' }}>
					<Button
						variant="contained"
						color=""
						size="large"
						className={classes.buttonSmall}
						startIcon={<BusinessCenterOutlinedIcon />}
					>
						Go To Interactive Resume
					</Button>
				</Zoom>
			</Box>
			<Box display={{ xs: 'none', sm: 'block' }} >
				<Zoom in={true} style={{ transitionDelay: '5300ms' }}>
				
					<Button
						variant="contained"
						color=""
						size="large"
						className={classes.button}
						startIcon={<BusinessCenterOutlinedIcon />}
					>
						Go To Interactive Resume
					</Button>
				</Zoom>
			</Box>
			<ContactTray />

		</>)
}

const useStyles = makeStyles((theme) => ({
	profile: {
		width: '100%',
		height: '100%',
	
	},
	name: {
		color: '#ef5350'
	},
	text: {
		paddingTop: theme.spacing(2)
	},
	button: {
		marginTop: theme.spacing(2),
		backgroundColor: '#00bfa5',
		height: '70px',
		'&:hover': {
			backgroundColor:'#64ffda'
		}
	},
	buttonSmall: {
		marginTop: theme.spacing(2),
		backgroundColor: '#00bfa5',
		height: '48px',
		'&:hover': {
			backgroundColor:'#64ffda'
		}
	}
}))