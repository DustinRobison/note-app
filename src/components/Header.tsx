import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

interface IHeader {
  title: string;
  handleNew: () => void;
  handleToggleListOpen: () => void;
}

const Header = ({ title, handleNew, handleToggleListOpen }: IHeader) => {
  const classes = useStyles();

  return (
    <AppBar position={"static"}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleToggleListOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Button
          variant={"contained"}
          color={"secondary"}
          startIcon={<AddIcon />}
          onClick={handleNew}
        >
          New
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
