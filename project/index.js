const getData = async () => {
  let res = await fetch(`https://intense-mountain-28064.herokuapp.com/data`);
  let data = await res.json();
  console.log(data);
};
getData();
