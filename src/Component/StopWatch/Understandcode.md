1️⃣ Purpose of the Component

DigitalStopWatch is a React stopwatch that can:

Start counting time

Stop/pause the timer

Reset the timer

Display time in HH : MM : SS : MS format

2️⃣ Imports

import strict from "node:assert/strict";
import React, { useEffect, useRef, useState } from "react";
Explanation

React
Required to use React components.

useState
Stores data that changes and causes re-render.

useEffect
Runs code when component renders or when dependencies change.

useRef
Stores values that persist without causing re-render.

⚠️ Note
This line is unnecessary in React:

import strict from "node:assert/strict";

It is used for Node.js testing, not React.

3️⃣ State Variables

const [isRunning, setIsRunning] = useState(false);
const [elapsedTime, setElapsedTime] = useState(0);
isRunning

Boolean state that controls whether the stopwatch is running.

false → stopwatch stopped
true → stopwatch running
elapsedTime

Stores total time passed in milliseconds.

Example:

1000 = 1 second
60000 = 1 minute

4️⃣ Refs

const intervalIdRef = useRef(null);
const startTimeRef = useRef(0);
intervalIdRef

Stores the setInterval ID.

Purpose:
So we can stop the timer using clearInterval().

startTimeRef

Stores when the stopwatch started.

Example:

startTimeRef.current = Date.now()

This helps calculate elapsed time.

5️⃣ useEffect Logic

useEffect(() => {
if (isRunning) {
intervalIdRef.current = setInterval(() => {
setElapsedTime(Date.now() - startTimeRef.current);
}, 10);
}

return () => {
clearInterval(intervalIdRef.current);
};

}, [isRunning]);
What Happens Here

When isRunning becomes true:

setInterval() starts running every 10 milliseconds

Current time is calculated

elapsedTime = currentTime - startTime
Example
startTime = 1000
currentTime = 5000

elapsedTime = 4000ms
Cleanup Function
return () => {
clearInterval(intervalIdRef.current);
};

This prevents multiple timers running at the same time.

6️⃣ Start Button

const start = () => {
setIsRunning(true);
startTimeRef.current = Date.now() - elapsedTime;
};
Why subtract elapsedTime?

So the stopwatch continues from paused time.

Example:

paused at 10 seconds
start again → continues from 10 seconds

7️⃣ Stop Button

const stop = () => {
setIsRunning(false);
};

This stops the interval timer.

The useEffect cleanup clears the interval.

8️⃣ Reset Button

const reset = () => {
setElapsedTime(0);
setIsRunning(false);
};

Reset does:

time = 0
stop stopwatch

9️⃣ formatTime Function

const formatTime = () => {

This converts milliseconds → readable time.

Hours
let hours = Math.floor(elapsedTime / (1000 _ 60 _ 60));

Convert milliseconds to hours.

Minutes
let min = Math.floor((elapsedTime / (1000 \* 60)) % 60);

Get remaining minutes.

Seconds
let sec = Math.floor((elapsedTime / 1000) % 60);

Convert milliseconds to seconds.

Milliseconds
let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

Get milliseconds (2 digits).

Padding Numbers
hours = String(hours).padStart(2, "0");

Example:

1 → 01
9 → 09
Final Time Format
return `${hours}:${min}:${sec}:${milliSeconds}`;

Example output:

00:02:15:34

🔟 UI Rendering

Title

<h1>Stop Watch</h1>
Time Display
<p>{formatTime()}</p>

Shows formatted stopwatch time.

Buttons

Start:

<button onClick={start}>

Stop:

<button onClick={stop}>

Reset:

<button onClick={reset}>

Each button calls its function.

1️⃣1️⃣ Component Flow

User clicks Start
↓
isRunning = true
↓
useEffect starts interval
↓
elapsedTime updates every 10ms
↓
Component re-renders
↓
formatTime() updates display

1️⃣2️⃣ Final Output Example

Stop Watch

00:00:05:32

[Start] [Stop] [Reset]

1️⃣3️⃣ Key React Concepts Used

This project demonstrates:

useState

useEffect

useRef

timers (setInterval)

DOM rendering

time formatting

This is a great beginner React project.
