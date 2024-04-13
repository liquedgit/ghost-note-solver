async function postNote() {
  const formData = new FormData();
  formData.append("note", "tes");
  response = await fetch("http://localhost:8080", {
    method: "POST",

    body: formData,
  });
  console.log("Status : " + response.status);
  if (response.status == 400) {
    respText = await response.text();
    console.log("Message : " + respText);
  } else {
    console.log(await response.text());
  }
}

postNote();
