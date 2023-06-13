import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Logo from "../../src/img/logo.png";
import Typography from "@mui/material/Typography";

// Form
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";

const Banner = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "primary" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5, 2),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password")
    });
  };
  return (
    <Container className="fullHeight" maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} justifyContent="start" alignItems="center">
          <Grid item xs={12} md={6}>
            <Banner>xs=6</Banner>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box align="center">
              <Box
                component="img"
                sx={{
                  width: 210,
                  height: "auto"
                }}
                alt="Logo"
                src={Logo}
              />
              <Typography color="black" variant="h2">
                Miło Cię znowu widzieć!
              </Typography>
            </Box>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5, pl: 10, pr: 10 }}>
              <TextField margin="normal" required fullWidth id="email" label="Adres email" name="email" autoComplete="email" autoFocus />
              <TextField margin="normal" required fullWidth name="password" label="Hasło" type="password" id="password" autoComplete="current-password" />
              {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Zaloguj się
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Zapomniałeś hasła?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sing/up" variant="body2">
                    "Nie masz konta? Zarejestruj się"
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
export default Login;
