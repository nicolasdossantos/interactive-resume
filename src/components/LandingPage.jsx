import React, {useState, useContext} from 'react'
import { makeStyles, Grid, Typography, Box } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import Typing from 'react-typing-animation'
import ContactTray from './ContactTray'
import Button from '@material-ui/core/Button'
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined'
import Grow from '@material-ui/core/Grow'
import MainContext from '../Context/MainContext'
import GetAppIcon from '@material-ui/icons/GetApp';

export default function LandingPage() {
	
	const classes = useStyles()
	const [typed, setTyped] = useState(false)
	const context = useContext(MainContext)

	return (
		<>
			<Grid container>
				<Grid item xs={3} md={5}></Grid>
				<Grid item xs={6} md={2}>
					<Avatar alt="Nick's profile pic" className={classes.profile} src="profile.jpg" />
				</Grid>
				<Grid item xs={3} md={5}></Grid>
			</Grid>
			<Typing speed={45} className={classes.text} onFinishedTyping={()=>setTyped(true)}>
				<Typography variant="h3">Hello, my name is<br /><span className={classes.name}>Nick dos Santos</span><br />Fullstack Software Engineer</Typography>
			</Typing>
			<Box display={{ xs: 'block', sm: 'none' }} >
				<Grow in={typed} style={{ timeout: 1000 }}>
				<div>
					<Button
						variant="contained"
						color=""
						size="large"
						className={classes.buttonSmall}
						startIcon={<BusinessCenterOutlinedIcon />}
						onClick={()=>{context.setIsResumeOpen(true)}}
					>
						Go To Interactive Resume
					</Button>
					<Button
						variant="contained"
						color=""
						size="large"
						className={classes.buttonSmall}
						startIcon={<GetAppIcon />}
						onClick={()=>{context.setIsResumeOpen(true)}}
						style={{width: '300px'}}
					>
						Download PDF Version
					</Button>
				</div>
				</Grow>
			</Box>
			<Box display={{ xs: 'none', sm: 'block' }}  >
				<Grow in={typed} style={{timeout: 1000}} >
					<div>
					<Button
						variant="contained"
						color=""
						size="large"
						className={classes.button}
						startIcon={<BusinessCenterOutlinedIcon />}
						onClick={()=>{context.setIsResumeOpen(true)}}
						style={{marginRight: '8px'}}
					>
						Go To Interactive Resume
					</Button>
					<Button
						variant="contained"
						color=""
						size="large"
						className={classes.button}
						startIcon={<GetAppIcon />}
						onClick={()=>{context.setIsResumeOpen(true)}}
						style={{marginLeft: '8px', width: '300px'}}
					>
						Download PDF Version
					</Button>
					</div>
				</Grow>
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
		backgroundColor: '#3C4348',
		color: 'white',
		height: '70px',
		'&:hover': {
			backgroundColor:'#757575'
		}
	},
	buttonSmall: {
		marginTop: theme.spacing(2),
		backgroundColor: '#3C4348',
		color: 'white',
		height: '48px',
		'&:hover': {
			backgroundColor:'#64ffda'
		},
	}
}))