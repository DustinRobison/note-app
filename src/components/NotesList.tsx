import React from "react";
import {
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

interface INotesList {
  open: boolean;
  notes: string[];
  handleToggleListOpen: () => void;
  selectNote: (idx: number) => void;
}

const NotesList = ({
  open,
  notes,
  handleToggleListOpen,
  selectNote,
}: INotesList) => {
  return (
    <Drawer anchor={"left"} open={open} onClose={handleToggleListOpen}>
      <Container>
        <h3>Notes:</h3>
      </Container>
      <List>
        {notes.map((note, idx) => (
          <ListItem key={`${idx}-note`} button onClick={() => selectNote(idx)}>
            <ListItemText primary={note} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NotesList;
