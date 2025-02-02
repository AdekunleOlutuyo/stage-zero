function updateCurrentTime() {
  const currentTimeUTC = new Date().toUTCString();
  document.getElementById(
    "currentTimeUTC"
  ).textContent = `Current Time (UTC): ${currentTimeUTC}`;
}

// Update the current time on page load
updateCurrentTime();
