import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import '../static/style.css';
import project from '../static/space-guy.resized.png'

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};


const Home = () => {
    return (
        <div className="center add-padding">
            <Typography variant="h2">Welcome!</Typography>
            <Typography variant="h6">My most recent project I am working on.</Typography>
            <div className="add-padding">
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minheight: '100vh' }}
                >
                    <Card sx={{ width: '52vw' }}  onClick={event => openInNewTab("https://github.com/foggeydoughtnut/SpaceGuy-Unity")}>
                        <CardContent>
                            <img src = {project} className='photo' alt="current-project"/>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </div>
    )
}

export default Home;