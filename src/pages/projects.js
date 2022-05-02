import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import spaceguy from '../static/space-guy.resized.png';
import towerdefense from '../static/TowerDefense.resized.jpg';
import fpsShooter from '../static/FPS-Shooter.resized.png';
import flashCardApp from '../static/FlashCardApp.png'
import '../static/style.css';

const Projects = () => {
    return (
        <div className="center add-padding">
            <Typography variant="h2">Projects</Typography>

            <div className="add-padding">
                <Grid
                    container
                    spacing={6}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minheight: '100vh' }}
                    
                >
                    <Grid item>
                        <Card sx={{ width: '52vw' }} onClick={event => window.location.href="https://github.com/foggeydoughtnut/SpaceGuy-Unity"}>
                            <CardContent>
                                <Typography>Space Guy is a top-down 2d game made in Unity.</Typography>
                                <img src = {spaceguy} alt="space-guy project"/>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{ width: '52vw' }} onClick={event => window.location.href="https://github.com/foggeydoughtnut/TowerDefense"}>
                            <CardContent>
                                <Typography>This is a Tower-Defense Game that I followed along with a tutorial to create.</Typography>
                                <img src = {towerdefense} alt="Tower Defense project"/>
                            </CardContent>
                        </Card>
                    </Grid>
                   
                   <Grid item>
                        <Card sx={{ width: '52vw' }} onClick={event => window.location.href="https://github.com/foggeydoughtnut/FlashCardApp"}>
                            <CardContent>
                                <Typography>This is a flash-card app that I created for Android.</Typography>
                                <img src = {flashCardApp} alt="Flash Card App"/>
                            </CardContent>
                        </Card>
                   </Grid>

                   <Grid item>
                        <Card sx={{ width: '52vw' }} onClick={event => window.location.href="https://github.com/foggeydoughtnut/FPShooter"}>
                            <CardContent>
                                <Typography>This is a First Person Shooter Unity game that I started to create.</Typography>
                                <img src = {fpsShooter} alt="FPS Shooter Project"/>
                            </CardContent>
                        </Card>
                   </Grid>

    



                </Grid>
            </div>

            {/* <div className="add-padding">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minheight: '100vh' }}
                >
                    <Card sx={{ width: '52vw' }} onClick={event => window.location.href="https://github.com/foggeydoughtnut/TowerDefense"}>
                        <CardContent>
                            <img src = {towerdefense} alt="Tower Defense project"/>
                        </CardContent>
                    </Card>
                </Grid>
            </div>

            <div className="add-padding">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minheight: '100vh' }}
                >
                    <Card sx={{ width: '52vw' }} onClick={event => window.location.href="https://github.com/foggeydoughtnut/FlashCardApp"}>
                        <CardContent>
                            <img src = {flashCardApp} alt="Flash Card App"/>
                        </CardContent>
                    </Card>
                </Grid>
            </div>

            <div className="add-padding">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minheight: '100vh' }}
                >
                    <Card sx={{ width: '52vw' }} onClick={event => window.location.href="https://github.com/foggeydoughtnut/FPShooter"}>
                        <CardContent>
                            <img src = {fpsShooter} alt="FPS Shooter Project"/>
                        </CardContent>
                    </Card>
                </Grid>
            </div> */}
        </div>
    )
}

export default Projects;