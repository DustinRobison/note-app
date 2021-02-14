import React, { useState } from "react";
import Header from "./components/Header";
import { Button, CssBaseline } from "@material-ui/core";
import PageContent from "./components/PageContent";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./components/Footer";
import NotesList from "./components/NotesList";

const useStyles = makeStyles((theme) => ({
  //MAIN LAYOUT
  root: {
    display: "flex",
    flexFlow: "column",
    height: "100vh",
  },
}));

interface INote {
  title: string;
  body: string;
}

interface IAppState {
  notes: INote[];
  noteIdx: number;
  listOpen: boolean;
}

function App() {
  const classes = useStyles();
  // TODO turn into context api store
  const [state, setState] = useState<IAppState>({
    notes: [{ title: "", body: "" }],
    noteIdx: 0,
    listOpen: false,
  });

  const handleToggleListOpen = () => {
    setState({
      ...state,
      listOpen: !state.listOpen,
    });
  };

  const handleNew = () => {
    setState({
      ...state,
      notes: [...notes, { title: "", body: "" }],
      noteIdx: state.notes.length,
    });
  };

  const handleSelectNote = (idx: number) => {
    setState({
      ...state,
      noteIdx: idx,
    });
  };

  const bodyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const body = e.target.value;
    const title = body.slice(0, body.indexOf("\n"));
    setState({
      ...state,
      notes: [
        ...notes.slice(0, noteIdx),
        { title, body },
        ...notes.slice(noteIdx + 1),
      ],
    });
  };

  const { notes, noteIdx, listOpen } = state;
  const { title, body } = notes[noteIdx];
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <Header
          title={title}
          handleNew={handleNew}
          handleToggleListOpen={handleToggleListOpen}
        />
        <NotesList
          open={listOpen}
          notes={notes.map(({ title }) => title)}
          handleToggleListOpen={handleToggleListOpen}
          selectNote={handleSelectNote}
        />
        <PageContent body={body} handleChange={bodyChange} />
        <Footer />
      </div>
    </>
  );
}

export default App;
