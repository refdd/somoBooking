import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

export default function UserNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { data: session } = useSession();
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              alt="Remy Sharp"
              src={session.user.image}
              sx={{ width: 56, height: 56 }}
            />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Link
            href={"/dashboard/Settings"}
            className="flex items-center gap-2"
          >
            <Avatar /> Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={"/dashboard"} className="flex items-center gap-2">
            <Avatar /> dashboard
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Link href={"/dashboard/mybooking"} className="flex items-center">
            <ListItemIcon>
              <HiOutlinePresentationChartBar className="text-xl" />
            </ListItemIcon>
            <span> My booking</span>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href={"/dashboard/wishlist"} className="flex items-center">
            <ListItemIcon>
              <BsFillBookmarkCheckFill className="text-xl" />
            </ListItemIcon>
            <span>Favorites</span>
          </Link>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose;
            signOut({
              callbackUrl: `${window.location.origin}/Login`,
            });
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
