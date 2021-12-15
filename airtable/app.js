const result = document.querySelector('.result h2');
const fetchData = async () => {
  try {
    const { data } = await axios.get('/api/airtable');
    console.log(data);
    result.textContent = data;
  } catch (error) {
    console.log(error.response);
  }
};

fetchData();
