import { useState } from "react"
import { Link } from "react-router-dom"
import { TextField, Button } from "@mui/material"
import "./SignUp.css"
import logo from "../img/mainlogo.png"

function Signup() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  return (
    <div className="signup-bg">
      <div className="signup-container">
        <div className="signup-form">
          <div className="signup-form-content">
            <div className="logo-container">
              
            </div>
            <h2 style={{ textAlign: "center", color: "#433628", marginBottom: 10 }}>SIGN UP</h2>
            <TextField
              variant="outlined"
              placeholder="FIRST NAME"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
              className="signup-input"
              InputProps={{
                classes: { notchedOutline: "input-outline" },
              }}
            />
            <TextField
              variant="outlined"
              placeholder="LAST NAME"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
              className="signup-input"
              InputProps={{
                classes: { notchedOutline: "input-outline" },
              }}
            />
            <TextField
              variant="outlined"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              className="signup-input"
              InputProps={{
                classes: { notchedOutline: "input-outline" },
              }}
            />
            <TextField
              variant="outlined"
              placeholder="EMAIL"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              className="signup-input"
              InputProps={{
                classes: { notchedOutline: "input-outline" },
              }}
            />
            <TextField
              variant="outlined"
              placeholder="PASSWORD"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              className="signup-input"
              InputProps={{
                classes: { notchedOutline: "input-outline" },
              }}
            />
            <TextField
              variant="outlined"
              placeholder="CONFIRM PASSWORD"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              className="signup-input"
              InputProps={{
                classes: { notchedOutline: "input-outline" },
              }}
            />
           <div className="signup-links">
              <Button
                className="signup-link"
                variant="text"
                fullWidth={false}
                component={Link}
                to="/login"
              >
                ALREADY HAVE AN ACCOUNT? LOGIN
              </Button>
            </div>
            <Button variant="contained" className="signup-btn" fullWidth>
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup