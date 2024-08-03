import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

const DashboardContent = () => {
  return (
    <Box p={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 1
              </Typography>
              <Typography variant="body2">Content for card 1</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 2
              </Typography>
              <Typography variant="body2">Content for card 2</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Card 3
              </Typography>
              <Typography variant="body2">Content for card 3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardContent;
