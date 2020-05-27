const storeDefault = "__config__";

const del = store => {
  delete localStorage[store];
};

const get = () => {
  let dataStored = {};
  try {
    dataStored = JSON.parse(localStorage.getItem(storeDefault));
  } catch (e) {
    dataStored = {};
  }

  return dataStored;
};

const set = (data = {}) => {
  let dataToStore = {};

  try {
    dataToStore = JSON.stringify(data);
  } catch (e) {
    dataToStore = JSON.stringify({});
  }

  localStorage.setItem(storeDefault, dataToStore);
};

export { get, set, del };
