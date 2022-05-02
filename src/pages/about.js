import { Typography, Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="center add-padding">
            <Typography variant="h2">About Me</Typography>
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
                        <Card sx={{ width: '52vw' }}>
                            <CardContent>
                                <Typography variant="p">I am a student at Utah State University studying Computer Science. I am currently a Junior Web Developer at Aidia, and also a Web-Developer for USU IT Service Desk.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{ width: '52vw' }}>
                            <CardContent>
                                <Typography variant="h6">Contact Me : <a href="mailto:jeffaanderson0@gmail.com">jeffaanderson0@gmail.com</a></Typography>
                                <Typography variant="h6">My GitHub  : <a href="https://github.com/foggeydoughtnut">GitHub</a></Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            
        </div>
    )
}

export default About;