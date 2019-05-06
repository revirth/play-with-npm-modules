// https://stackoverflow.com/questions/48781629/variable-assignment-withing-env-file

// PORT = 4220
// IP = 192.***.**.**
// BASE_URL = http://${IP}:${PORT}/
// PROFILE_UPLOAD = ${BASE_URL}/uploads/profile/

require("dotenv-expand")(require("dotenv").config()); // in just single line
console.log(process.env.PROFILE_UPLOAD);
