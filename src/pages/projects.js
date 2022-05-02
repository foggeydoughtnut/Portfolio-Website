import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import project from '../static/project.resized.png'
import '../static/style.css';

const Projects = () => {
    return (
        <div className="center add-padding">
            <Typography variant="h2">Projects</Typography>

            <div className="add-padding">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minheight: '100vh' }}
                >
                    <Card sx={{ width: '52vw' }}>
                        <CardContent>
                            <img src = {project} alt="current-project"/>
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
                    <Card sx={{ width: '52vw' }}>
                        <CardContent>
                            <img src = {project} alt="current-project"/>
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
                    <Card sx={{ width: '52vw' }}>
                        <CardContent>
                            <img src = {project} alt="current-project"/>
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
                    <Card sx={{ width: '52vw' }}>
                        <CardContent>
                            <img src = {project} alt="current-project"/>
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
                    <Card sx={{ width: '52vw' }}>
                        <CardContent>
                            <img src = {project} alt="current-project"/>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </div>
    )
}

export default Projects;