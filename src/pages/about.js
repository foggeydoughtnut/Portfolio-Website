import { Typography, Card, CardContent, Grid } from "@mui/material";
import React from "react";

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
                                <Typography variant="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue mauris rhoncus aenean vel elit. Turpis cursus in hac habitasse platea dictumst. Ullamcorper malesuada proin libero nunc consequat interdum varius sit. Sagittis eu volutpat odio facilisis mauris sit amet massa vitae. Duis ut diam quam nulla. Ac turpis egestas sed tempus urna. Mattis molestie a iaculis at erat pellentesque. Posuere ac ut consequat semper viverra nam. Tortor at auctor urna nunc id cursus metus aliquam. Id neque aliquam vestibulum morbi blandit cursus risus. Vel pretium lectus quam id leo in vitae turpis. Amet justo donec enim diam vulputate ut. Venenatis cras sed felis eget velit aliquet. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Non nisi est sit amet facilisis magna etiam.</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item>
                        <Card sx={{ width: '52vw' }}>
                            <CardContent>
                                <Typography variant="h6">Contact Me :</Typography>
                                <Typography variant="h6">My GitHub  :</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            
        </div>
    )
}

export default About;