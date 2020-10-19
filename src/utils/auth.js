const AUTH_TOKEN = "MY_AUTH";
const MY_LOCATION = "MY_LOCATION";
const MY_REGION = "MY_REGION";

export function getAuth() {
  try {
    const auth = JSON.parse(localStorage.getItem(AUTH_TOKEN));
    return auth;
  } catch (ex) {
    return null;
  }
}
export function getLocation() {
  try {
    const mylocation = localStorage.getItem(MY_LOCATION);
    //
    return mylocation;
  } catch (ex) {
    return null;
  }
}
export function getRegion() {
  try {
    const region = JSON.parse(localStorage.getItem(MY_REGION));

    return region ? region[0] : "";
  } catch (ex) {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(MY_REGION);
  localStorage.removeItem(MY_LOCATION);
  localStorage.clear();
}
export default {
  getAuth,
  getLocation,
  getRegion,
  logout,
};
