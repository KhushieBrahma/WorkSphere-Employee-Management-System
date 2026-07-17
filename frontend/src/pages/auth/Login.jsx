import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function Login() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f4f6f8",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: 420,
          p: 5,
          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
        >
          WorkSphere
        </Typography>

        <Typography
          textAlign="center"
          color="text.secondary"
          mb={4}
        >
          Employee Management System
        </Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 3,
            py: 1.5,
          }}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;