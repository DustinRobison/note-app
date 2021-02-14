import React from "react";
import { Box, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    background: theme.palette.background.default,
    overflow: "auto",
  },
  inputArea: {
    height: "100%",
  },
}));

interface IPageContent {
  body: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PageContent = ({ body, handleChange }: IPageContent) => {
  const classes = useStyles();
  return (
    <Box component={"div"} m={1} className={classes.root}>
      {/* TODO SWAP TEXTFIELD WITH MARKDOWN EDITOR FIELD*/}
      <TextField
        id={"main-content-area"}
        placeholder={"Add your note"}
        variant={"filled"}
        value={body}
        onChange={handleChange}
        fullWidth
        multiline
        className={classes.inputArea}
      />
    </Box>
  );
};

export default PageContent;
