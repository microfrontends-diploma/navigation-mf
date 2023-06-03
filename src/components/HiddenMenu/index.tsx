import { Box, Button, Typography } from "@mui/material";

// FIXME: общие пропсы - вынести
interface HiddenMenuProps {
  toggleMenu: (open: boolean) => void;
  activeMenuPoint: string;
}

const HiddenMenu = ({ toggleMenu, activeMenuPoint }: HiddenMenuProps) => {
  const onToggleMenuHandler = () => toggleMenu(true);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", pt: "10px" }}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#ebebeb",
          borderRadius: "10px",
          padding: "5px 12px",
          alignItems: 'center',
        }}
      >
        <Button onClick={onToggleMenuHandler}>
          <Typography variant="h5">Меню</Typography>
        </Button>

        <Box>
          <Typography variant="h6">{activeMenuPoint}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HiddenMenu;
