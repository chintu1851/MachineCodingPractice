#### 🔹 Start Button Click
- Triggers `setInterval()` that calls the `timer()` function every `1000ms` (1 second).
- Hides the **Start** button and shows the **Stop** button.
- Validates that at least one of the inputs (`hours`, `minutes`, or `seconds`) is non-zero.

#### 🔹 `timer()` Function

**Normalization:**
- If `seconds > 60`, convert to minutes:
  - `minutes++`, `seconds -= 60`
- If `minutes > 60`, convert to hours:
  - `hours++`, `minutes -= 60`

**Countdown Logic:**
- If `seconds > 0`: decrement `seconds`
- Else if `minutes > 0`:
  - Set `seconds = 59`, decrement `minutes`
- Else if `hours > 0`:
  - Set `minutes = 59`, `seconds = 59`, decrement `hours`

#### 🔹 Timer Ends Automatically
- When `hours == 0 && minutes == 0 && seconds == 0`, it:
  - Calls `clearInterval()` to stop the loop.
  - Resets all input fields to empty strings (`""`).

#### 🔹 Stop Button Click
- Calls `stopInterval("pause")`
- Pauses the timer via `clearInterval(countdowntimer)`
- Updates the Start button text to `"continue"` and toggles button visibility

#### 🔹 Reset Button Click
- Calls `stopInterval()` (no arguments)
- Clears all input fields (`.value = ""`)
- Resets Start button text to `"start"` and restores initial button state

---

### 🛠️ Key JavaScript Features Used
- `setInterval()` / `clearInterval()` — manage timer loop  
- `parseInt()` — convert string inputs to numbers  
- `.value` — read/update form input values  
- `addEventListener()` — handle click events  
- `querySelector()` — access DOM elements  
- `.style.display` / `.innerHTML` — dynamically control UI
