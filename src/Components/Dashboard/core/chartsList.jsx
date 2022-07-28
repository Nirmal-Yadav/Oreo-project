import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PollIcon from "@mui/icons-material/Poll";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function ChartList() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PollIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Charts" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Morris" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="ChartJS" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Sparkline" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="Jquery Knob" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <ArrowRightAltIcon />
            </ListItemIcon>
            <ListItemText primary="E Charts" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
