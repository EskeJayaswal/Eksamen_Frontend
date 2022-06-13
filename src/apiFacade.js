const URL = "http://localhost:8080/eksamen_war_exploded";
// const URL = "https://eskecphbusiness.dk/harbour";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/

  const login = (user, password) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      });
  };

  const fetchHouses = () => {
    const options = makeOptions("GET", false);
    return fetch(URL + "/api/house", options).then(handleHttpErrors);
  };

  const fetchTenantsByHouseId = (id) => {
    const options = makeOptions("GET", false);
    return fetch(URL + `/api/house/users/${id}`, options).then(
      handleHttpErrors
    );
  };

  const fetchRentalsByUserId = (username) => {
    const options = makeOptions("GET", false);
    return fetch(URL + `/api/user/rentals/${username}`, options).then(
      handleHttpErrors
    );
  };

  const fetchHouseByRentalId = (id) => {
    const options = makeOptions("GET", false);
    return fetch(URL + `/api/rental/house/${id}`, options).then(
      handleHttpErrors
    );
  };

  const createTenant = (tenant) => {
    const options = makeOptions("POST", false, {
      name: tenant.name,
      phone: tenant.phone,
      job: tenant.job,
      userName: tenant.userName,
      userPass: tenant.userPass,
    });
    return fetch(URL + "/api/user", options).then(handleHttpErrors);
  };

  const createRental = (rental) => {
    const options = makeOptions("POST", false, {
      startDate: rental.startDate,
      endDate: rental.endDate,
      priceAnnual: rental.priceAnnual,
      deposit: rental.deposit,
      contactPerson: rental.contactPerson,
    });
    return fetch(URL + "/api/rental", options).then(handleHttpErrors);
  };

  const createHouse = (house) => {
    const options = makeOptions("POST", false, {
      address: house.address,
      city: house.city,
      numberOfRooms: house.numberOfRooms,
    });
    return fetch(URL + "/api/house", options).then(handleHttpErrors);
  };

  const fetchUserData = (role) => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + `/api/info/${role}`, options).then(handleHttpErrors);
  };

  const fetchBeerJoke = () => {
    const options = makeOptions("GET", false); //True add's the token
    return fetch(URL + "/api/xxx/data", options).then(handleHttpErrors);
  };

  const fetchOwners = () => {
    const options = makeOptions("GET", false);
    return fetch(URL + "/api/owner", options).then(handleHttpErrors);
  };

  const fetchHarbours = () => {
    const options = makeOptions("GET", false);
    return fetch(URL + "/api/harbour", options).then(handleHttpErrors);
  };

  const fetchBoats = () => {
    const options = makeOptions("GET", false);
    return fetch(URL + "/api/boat", options).then(handleHttpErrors);
  };

  const fetchBoatsByHarbourId = (id) => {
    const options = makeOptions("GET", false);
    return fetch(URL + `/api/harbour/boats/${id}`, options).then(
      handleHttpErrors
    );
  };

  const fetchOwnersByBoatId = (id) => {
    const options = makeOptions("GET", false);
    return fetch(URL + `/api/boat/owner/${id}`, options).then(handleHttpErrors);
  };

  const removeBoatFromHarbour = (boatId) => {
    const options = makeOptions("DELETE", false);
    return fetch(URL + `/api/harbour/remove/${boatId}`, options).then(
      handleHttpErrors
    );
  };

  const addBoatToHarbour = (harbourId, boatId) => {
    const options = makeOptions("PUT", false);
    return fetch(URL + `/api/harbour/add/${harbourId}/${boatId}`, options).then(
      handleHttpErrors
    );
  };

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };

  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const saveCocktail = (cocktail) => {
    const options = makeOptions("POST", false, {
      ingredient1: cocktail.ingredient1,
      ingredient2: cocktail.ingredient2,
      ingredient3: cocktail.ingredient3,
    });
    return fetch(URL + "/api/cocktail", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      });
  };

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchUserData,
    fetchBeerJoke,
    saveCocktail,
    fetchOwners,
    fetchHarbours,
    fetchBoats,
    fetchHouses,
    fetchBoatsByHarbourId,
    fetchOwnersByBoatId,
    removeBoatFromHarbour,
    addBoatToHarbour,
    fetchRentalsByUserId,
    fetchHouseByRentalId,
    createTenant,
    createRental,
    createHouse,
    fetchTenantsByHouseId,
  };
}

const facade = apiFacade();
export default facade;
