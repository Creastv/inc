import Typography from "@mui/material/Typography";

function Title({ children }) {
  return (
    <div>
      <Typography color="black" variant="h1">
        {children}
      </Typography>
    </div>
  );
}
export default Title;
