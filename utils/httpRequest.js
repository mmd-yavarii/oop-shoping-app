const URL = "./data.json";

async function fetchData() {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

export default fetchData;
