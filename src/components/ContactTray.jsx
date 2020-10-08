import React from 'react'
import { Grid, Box } from '@material-ui/core'
import {  LinkedinIcon } from "react-share"
import GithubIcon from './shared/GithubIcon'
import EmailIcon from './shared/EmailIcon'

export default function ContactTray() {
  return (<>
    <Box display={{ xs: 'block', sm: 'none' }} >
        <Grid container direction="column" spacing={1} style={{position: 'absolute', top: '5px', right: '5px'}}>
            <Grid item style={{position: 'absolute', top: '5px', right: '10px'}}>
                <a href="#"><EmailIcon round size={48} /></a>
            </Grid>
            <Grid item style={{position: 'absolute', top: '70px', right: '10px'}}>
                <a href="#"><LinkedinIcon round size={48} /></a>
            </Grid>
            <Grid item style={{position: 'absolute', top: '135px', right: '10px'}}>
               <a href="#"> <GithubIcon round size={48} /></a>
            </Grid>
        </Grid>
    </Box>

    <Box display={{ xs: 'none', sm: 'block', lg:'none' }}  style={{position: 'absolute', top: '16px', left: '16px'}}>
        <Grid container spacing={2}>
            <Grid item>
                <a href="#"><EmailIcon round size={65} /></a>
            </Grid>
            <Grid item>
                <a href="#"><LinkedinIcon round size={65} /></a>
            </Grid>
            <Grid item>
                <a href="#"><GithubIcon round size={65} /></a>
            </Grid>
        </Grid>
    </Box>

    <Box display={{ xs: 'none', md: 'block' }} style={{position: 'absolute', top: '16px', left: '16px'}} >
        <Grid container spacing={2}>
            <Grid item>
            <a href="mailto:nicolas182@icloud.com"><EmailIcon round size={70} /></a>
            </Grid>
            <Grid item>
                <a 
                    href="https://www.linkedin.com/in/nicolas-ds/"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <LinkedinIcon round  size={70} />
                </a>
            </Grid>
            <Grid item>
                <a 
                    href="https://github.com/nicolasdossantos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <GithubIcon round  size={70} />
                </a>
            </Grid>
        </Grid>
    </Box>
    
    </>
  )}
