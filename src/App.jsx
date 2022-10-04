import "./App.css";
import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  LinearProgress,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Send, CheckCircle } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  // values state object
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
  });

  // error & submit states
  const [submitted, setSubmitted] = useState(false);
  const [verified, setVerified] = useState(false);

  // value binding
  const firstNameHandler = (e) => {
    setValues({ ...values, firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    setValues({ ...values, lastName: e.target.value });
  };
  const emailHandler = (e) => {
    setValues({ ...values, emailId: e.target.value });
  };
  const passwordHandler = (e) => {
    setValues({ ...values, password: e.target.value });
  };
  const clearInputs = () => {
    setValues({
      ...values,
      firstName: "",
      lastName: "",
      emailId: "",
      password: "",
    });
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    if (
      submitted &&
      values.firstName &&
      values.lastName &&
      values.emailId &&
      values.password
    ) {
      setVerified(true);
    }
    else {
    setSubmitted(true);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div className="App">
        <Card
          variant="elevation"
          sx={{
            width: "500px",
            margin: "auto",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0px 5px 20px rgba(0,0,0,0.4)",
          }}
        >
          <form action="#" onSubmit={submitHandler}>
            <Typography
              variant="h4"
              align="left"
              marginBottom={"10px"}
              fontWeight="bold"
              color={"lightblue"}
            >
              Sign Up
            </Typography>
            {verified ? (
              <Alert severity="info" icon={<CheckCircle />}>
                Account Created !
              </Alert>
            ) : null}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                id="First Name"
                label="First Name"
                variant="outlined"
                sx={{
                  margin: "20px 10px 10px 0",
                }}
                fullWidth
                onChange={firstNameHandler}
                error={submitted && !values.firstName}
              />

              <TextField
                id="Last Name"
                label="Last Name"
                variant="outlined"
                sx={{
                  margin: "20px 0px 10px 0",
                }}
                fullWidth
                onChange={lastNameHandler}
                error={submitted && !values.lastName}
              />
            </div>

            <TextField
              id="Email Address"
              label="Email Address"
              variant="outlined"
              type={"email"}
              fullWidth
              sx={{
                margin: "10px 0",
              }}
              onChange={emailHandler}
              error={submitted && !values.emailId}
            />

            <TextField
              id="Password"
              label="Password"
              variant="outlined"
              type={"password"}
              fullWidth
              sx={{
                margin: "10px 0",
              }}
              onChange={passwordHandler}
              error={submitted && !values.password}
            />
            {submitted &&
            !values.firstName &&
            !values.lastName &&
            !values.emailId &&
            !values.password ? (
              <Alert severity="error">Please fill out all fields !</Alert>
            ) : null}
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >
              <Button
                variant="text"
                color="error"
                sx={{ marginRight: "20px" }}
                onClick={clearInputs}
                type="reset"
              >
                CLEAR
              </Button>
              <Button variant="contained" type="submit" endIcon={<Send />}>
                SUBMIT
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
