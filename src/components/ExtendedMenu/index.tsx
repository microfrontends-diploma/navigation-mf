import { Box, Card, CardContent, CardHeader, Container, Grid, Grow, IconButton, Typography } from "@mui/material";
import { Link } from "@reach/router";
import { ExtendedMenuProps } from "./types";
import CloseIcon from '@mui/icons-material/Close';

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
        backgroundColor: "primary.main",
        color: "white"
      }}
    >
      <Container>
        <Grid container sx={{ mt: "20px" }} spacing={1}>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <IconButton sx={{color: "white"}} onClick={onToggleMenuHandler}>
              <CloseIcon sx={{fontSize: '40px'}}/>
            </IconButton>
          </Grid>
          {links.map((link, index) => (
            <Grow key={link.url} in={true} timeout={index * 500 + 250}>
              <Grid item xs={3}>
                <Card>
                  <CardHeader title={<Typography sx={{color: 'primary.main', fontWeight: 600, textTransform: 'uppercase'}} >{link.label}</Typography>}/>
                  <CardContent>
                    <IconButton>
                      {link?.icon}
                    </IconButton>
                    <Link style={{display: 'block'}} to={link.url} onClick={onMicroFrontendLinkClick(link.url)}>
                      {link.label}
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            </Grow>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExtendedMenu;
