import * as React from "react";
import Button from "@mui/material/Button";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SolveExercise = () => {
  const [userChoices, setUserChoices] = React.useState(["", "", ""]);
  const [exercise, setExercise] = React.useState();
  const { id } = useParams();

  const submitAnswers = () => {
    let score = 0;
    for (let i = 0; i < 3; i++) {
      if (userChoices[i] === exercise.correctChoices[i]) {
        score++;
      }
    }
    alert("Your score is " + score + "/3");
  };

  useEffect(() => {
    axios
      .post("http://localhost:3000/GetExercise", {
        id: id,
      })
      .then((response) => {
        setExercise(response.data.exercise);
      });
  }, []);

  return (
    <div>
      {exercise ? 
        <Stack marginTop={1} spacing={2}>
          <Typography variant="h6">{exercise.questions[0]}</Typography>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Choose An Answer
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={userChoices[0]}
              onChange={(event) =>
                setUserChoices([
                  event.target.value,
                  userChoices[1],
                  userChoices[2],
                ])
              }
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label={exercise.choices1[0]}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label={exercise.choices1[1]}
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label={exercise.choices1[2]}
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label={exercise.choices1[3]}
              />
            </RadioGroup>
          </FormControl>

          <Typography variant="h6">{exercise.questions[1]}</Typography>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Choose An Answer
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={userChoices[1]}
              onChange={(event) =>
                setUserChoices([
                  userChoices[0],
                  event.target.value,
                  userChoices[2],
                ])
              }
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label={exercise.choices2[0]}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label={exercise.choices2[1]}
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label={exercise.choices2[2]}
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label={exercise.choices2[3]}
              />
            </RadioGroup>
          </FormControl>

          <Typography variant="h6">{exercise.questions[2]}</Typography>
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Choose An Answer
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={userChoices[2]}
              onChange={(event) =>
                setUserChoices([
                  userChoices[0],
                  userChoices[1],
                  event.target.value,
                ])
              }
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label={exercise.choices3[0]}
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label={exercise.choices3[1]}
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label={exercise.choices3[2]}
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label={exercise.choices3[3]}
              />
            </RadioGroup>
          </FormControl>

          <Button onClick={submitAnswers}>Submit Answers</Button>
        </Stack>
        : <></>}
    </div>
  );
};

export default SolveExercise;
