import React from "react";
import { Container, Grid } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardContent from "./components/DashboardContent";

const App = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={3} md={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={9} md={10}>
          <DashboardContent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
