function emailValidation(inputText) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    alert("Email berhasil dimasukan!");
    return true;
  } else {
    alert("Email gagal dimasukan!");
    return false;
  }
}
