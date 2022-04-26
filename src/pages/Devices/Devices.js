import { Button, Typography } from "@mui/material";
import { useState } from "react";
import bluetoothService from "../../services/bluetoothService";

function Devices() {
  const [device, setDevice] = useState([]);

  const pairedDevice = async () => {
    const device = await bluetoothService.getPairedDevice();
    setDevice(device);
  }

  return (
    <div className="Page Devices">
      <Button
        variant="contained"
        color="primary"
        sx={{ mx: 1, color: "white", display: "block" }}
        onClick={() => pairedDevice()}
      >
        <Typography textAlign="center">Pair Device</Typography>
      </Button>
      <Typography>{device.name}</Typography>
    </div>
  );
}

export default Devices;
