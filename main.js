function sendEmail() {
  if (
    document.getElementById("name").value == "" ||
    document.getElementById("email").value == "" ||
    document.getElementById("message").value == ""
  ) {
    alert("Preencha todos os campos");
    return;
  }

  let params = {
    from_name: document.getElementById("name").value,
    message: document.getElementById("message").value,
    email: document.getElementById("email").value,
  };

  emailjs.send("service_b4xa1ob", "template_dcbkums", params).then(
    (response) => {
      alert("SUCCESS!", response.status, response.text);
    },
    (error) => {
      alert("FAILED...", error);
    }
  );
}
