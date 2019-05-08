function capitalFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function stringToBoolean(str) {
  var lowered = String(str).toLowerCase();
  switch (lowered === "" || lowered === "false") {
    case true:
      return false;
    default:
      return Boolean(String(str));
  }
}

module.exports = {
  capitalFirstLetter,
  stringToBoolean
};
