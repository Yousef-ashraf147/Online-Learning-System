var username = "";
var UserProfile = (function () {
  var getUsername = function () {
    return username; // Or pull this from cookie/localStorage
  };

  var setUsername1 = function (name) {
    username = name;
    // Also set this in cookie/localStorage
  };

  return {
    getUsername: username,
    setUsername: username,
  };
})();

export default UserProfile;
