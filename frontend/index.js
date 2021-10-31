async function getTopicOccurences() {
  const topic = document.getElementById("topic").value;
  const occurenceElement = document.getElementById("occurences");
  const response = await fetch("http://localhost:3000/?topic=" + topic);
  const jsonResponse = await response.json();
  if (response.status >= 400) {
    // Displaying an error message if something goes wrong
    const errorElement = document.getElementById("errorMessage");
    errorElement.innerHTML = jsonResponse.error;
    occurenceElement.innerHTML = "";
    return;
  } else {
    // Removing the error message if everything goes right
    const errorElement = document.getElementById("errorMessage");
    errorElement.innerHTML = "";
  }

  const occurences = jsonResponse.occurences;
  occurenceElement.innerHTML = occurences;
}
