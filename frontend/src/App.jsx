import { Box, Button, Paper, Typography } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "background.default",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 5,
          width: 450,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          WorkSphere
        </Typography>

        <Typography color="text.secondary" sx={{ mb: 3 }}>
          Employee Management System
        </Typography>

        <Button variant="contained" size="large" fullWidth>
          Continue
        </Button>
      </Paper>
    </Box>
  );
}

export default App;