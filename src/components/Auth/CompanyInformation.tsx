import { Box, TextField } from "@mui/material";

const CompanyInformations = () => {
  return (
    <Box>
      <h2>Company Information</h2>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField label="Company Name" variant="outlined" fullWidth />
        <TextField label="Country" variant="outlined" fullWidth />
        <TextField label="Company Type" variant="outlined" fullWidth />
        <TextField label="Company Size" variant="outlined" fullWidth />
        <TextField label="Revenue Range" variant="outlined" fullWidth />
        <TextField label="Year" variant="outlined" fullWidth />
      </Box>
    </Box>
  );
};

export default CompanyInformations;
