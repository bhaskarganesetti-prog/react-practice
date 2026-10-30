import React, { useState } from 'react'

const App = () => {

  // Store whether the password is visible or hidden
  const [showPassword, setShowPassword] = useState(false);

  // Store the password entered by the user
  const [password, setPassword] = useState("");

  return (
    <div>

      <input
        // If showPassword is true, show the password as text
        // If false, hide the password
        type={showPassword ? "text" : "password"}

        placeholder="Enter Password"

        // Connect the input value with the password state
        value={password}

        // Update the password state whenever the user types
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => {

          // Check if the password is not empty
          if (password !== "") {

            // Change true to false or false to true
            setShowPassword(!showPassword);

          }
        }}
      >

        {/* Show button text based on the current state */}
        {showPassword ? "Hide" : "Show"}

      </button>

    </div>
  )
}

export default App
