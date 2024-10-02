import { Box, TextField } from "@mui/material";

const ProfileInformation = () => {
  return (
    <Box>
      <h2>Profile Information</h2>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField label="Username" variant="outlined" fullWidth />
        <TextField label="First Name" variant="outlined" fullWidth />
        <TextField label="Last Name" variant="outlined" fullWidth />
        <TextField label="Email" type="email" variant="outlined" fullWidth />
        <TextField label="Phone Number" variant="outlined" fullWidth />
      </Box>
    </Box>
  );
};

export default ProfileInformation;
