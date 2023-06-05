import { Box, Button, Grid, Grow, Typography } from "@mui/material";
import { Link } from "@reach/router";
import { ExtendedMenuProps } from "./types";

const ExtendedMenu = ({ links, activeMenuPoint, onActiveMenuPointChange, toggleMenu }: ExtendedMenuProps) => {
  const onToggleMenuHandler = () => toggleMenu(false);

  const onMicroFrontendLinkClick = (newMenuPoint: string) => () => {
    if (activeMenuPoint !== newMenuPoint) {
      onActiveMenuPointChange(newMenuPoint);
      onToggleMenuHandler();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        padding: "20px",
        backgroundColor: "#ebebeb",
      }}
    >
      <Button onClick={onToggleMenuHandler}>
        <Typography variant='h4'>Меню</Typography>
      </Button>

      <Grid container sx={{ mt: "20px" }}>
        {links.map((link, index) => (
          <Grow key={link.url} in={true} timeout={index * 500 + 250}>
            <Grid item xs={2}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {link?.icon}
                <Link to={link.url} onClick={onMicroFrontendLinkClick(link.url)}>
                  {link.label}
                </Link>
              </Box>
            </Grid>
          </Grow>
        ))}
      </Grid>
    </Box>
  );
};

export default ExtendedMenu;
