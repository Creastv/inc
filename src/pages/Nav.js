import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

function Dashboard({ open }) {
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "Inbox"
    },
    {
      name: "Incomings",
      path: "/incomings/",
      icon: "Inbox"
    },
    {
      name: "Spendings",
      path: "/spendings",
      icon: "Inbox"
    },
    {
      name: "Contacts",
      path: "/contacts",
      icon: "Inbox"
    }
  ];
  return (
    <List>
      {navItems.map((item, index) => (
        <ListItem key={item.name} disablePadding sx={{ display: "block" }}>
          <Link to={item.path}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>

              <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  );
}
export default Dashboard;
