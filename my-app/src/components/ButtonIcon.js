import * as React from "react";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import Stack from "@mui/material/Stack";

export default function ButtonIcon() {
  return (
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<MailIcon />}>
          Email
        </Button>
      </Stack>
  );
}
