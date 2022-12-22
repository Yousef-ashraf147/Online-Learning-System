import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const Exercise = (props) => {
  const [open, setOpen] = React.useState(false);

  const questions = props.questions;
  const setQuestions = props.setQuestions;
  const choices = props.choices;
  const setChoices = props.setChoices;
  const correctChoices = props.correctChoices;
  const setCorrectChoices = props.setCorrectChoices;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Exercise
      </Button>
      <Dialog
        PaperProps={{
          sx: {
            width: "30%",
            height: "100%",
          },
        }}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Create Exercise</DialogTitle>
        <DialogContent>
          <Stack marginTop={1} spacing={2}>
            <TextField
              onChange={(event) =>
                setQuestions([
                  event.target.value,
                  questions[1],
                  questions[2],
                  questions[3],
                  questions[4],
                ])
              }
              label={"Question 1"}
              value={questions[0]}
            />

            <Stack marginTop={1} spacing={1} sx={{flex:'reverse'}}>
              <TextField
                sx={{marginLeft:'auto', width: "80%" }}
                label={"Choice 1"}
                onChange={(event) =>
                  setChoices([
                    event.target.value,
                    choices[0][1],
                    choices[0][2],
                    choices[0][3],
                  ],[
                    choices[1][0],
                    choices[1][1],
                    choices[1][2],
                    choices[1][3]],
                    [
                      choices[2][0],
                      choices[2][1],
                      choices[2][2],
                      choices[2][3]]
                    )
                }
              />
              <TextField
                sx={{marginLeft:'auto', width: "80%" }}
                label={"Choice 2"}
                onChange={(event) =>
                  setQuestions([
                    choices[0],
                    event.target.value,
                    choices[2],
                    choices[3],
                  ])
                }
              />
              <TextField
                sx={{marginLeft:'auto', width: "80%" }}
                label={"Choice 3"}
                onChange={(event) =>
                  setQuestions([
                    choices[0],
                    choices[1],
                    event.target.value,
                    choices[3],
                  ])
                }
              />
              <TextField
                sx={{marginLeft:'auto', width: "80%" }}
                label={"Choice 4"}
                onChange={(event) =>
                  setQuestions([
                    choices[0],
                    choices[1],
                    choices[2],
                    event.target.value,
                  ])
                }
                />
            </Stack>

            <TextField
              onChange={(event) =>
                setQuestions([
                  questions[0],
                  event.target.value,
                  questions[2],
                  questions[3],
                  questions[4],
                ])
              }
              label={"Question 2"}
              value={questions[1]}
            />

            <TextField
              onChange={(event) =>
                setQuestions([
                  questions[0],
                  questions[1],
                  event.target.value,
                  questions[3],
                  questions[4],
                ])
              }
              label={"Question 3"}
              value={questions[2]}
            />

            <TextField
              onChange={(event) =>
                setQuestions([
                  questions[0],
                  questions[1],
                  questions[2],
                  event.target.value,
                  questions[4],
                ])
              }
              label={"Question 4"}
              value={questions[3]}
            />

            <TextField
              onChange={(event) =>
                setQuestions([
                  questions[0],
                  questions[1],
                  questions[2],
                  questions[3],
                  event.target.value,
                ])
              }
              label={"Question 5"}
              value={questions[4]}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Exercise;
