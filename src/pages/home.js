import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import '../style.css';

const Home = () => {
    return (
        <div className="center">

            <Typography variant="h2">Welcome!</Typography>

            <Typography variant="h5">Current Project</Typography>
            <Card sx={{ width: '50vw' }}>
                <CardContent>
                    <Typography variant='h4'>Current Project</Typography>
                </CardContent>
            </Card>



        </div>


    )
}

export default Home;