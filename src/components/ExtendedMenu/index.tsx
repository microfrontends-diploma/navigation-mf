import { Box, Button, Grid, Grow, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "@reach/router";

export interface ExtendedMenuProps {
  links: Array<{ url: string; label: string; icon?: ReactNode }>;
  onActiveMenuPointChange: (activeMenuPoint: string) => void;
  // FIXME: все что ниже - общее, надо это вынести
  toggleMenu: (open: boolean) => void;
  activeMenuPoint: string;
}

const ExtendedMenu = ({
  links,
  activeMenuPoint,
  onActiveMenuPointChange,
  toggleMenu,
}: ExtendedMenuProps) => {
  const onToggleMenuHandler = () => toggleMenu(false);

  const onMicroFrontendLinkClick = (newMenuPoint: string) => () => {
    if (activeMenuPoint !== newMenuPoint) {
      onActiveMenuPointChange(newMenuPoint);
      onToggleMenuHandler();
    }
  };

  // TODO: Подумать, как меню должно выглядеть в адаптивном варианте
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "20px",
        backgroundColor: "wheat",
      }}
    >
      <Button onClick={onToggleMenuHandler}>
        <Typography variant="h4">Меню</Typography>
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
                {/* TODO: если текущий активный микрофронтенд равняется ссылке - не переходить на нее и не закрывать меню, иначе закрыть меню */}
                <Link
                  to={link.url}
                  onClick={onMicroFrontendLinkClick(link.url)}
                >
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
