import { Box, Button, IconButton, Typography } from "@mui/material";
import { HiddenMenuProps } from "./types";
import MenuIcon from '@mui/icons-material/Menu';

const HiddenMenu = ({ toggleMenu, activeMenuPoint }: HiddenMenuProps) => {
  const onToggleMenuHandler = () => toggleMenu(true);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", pt: "10px" }}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "primary.main",
          color: 'white',
          borderRadius: "10px",
          padding: "5px 12px",
          alignItems: "center",
        }}
      >
          <IconButton sx={{color: 'white'}} onClick={onToggleMenuHandler}>
            <MenuIcon/>
          </IconButton>

        <Box>
          <Typography variant='h6'>{activeMenuPoint}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HiddenMenu;
