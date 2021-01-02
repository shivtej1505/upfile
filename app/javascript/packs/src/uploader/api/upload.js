import BASE_URL from '../utils/constant';

const upload = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  // configure your fetch url appropriately
  fetch(`${BASE_URL}`, {
    method: "POST",
    body: formData
  })
    .then(res => res.json())
    .then(data => {
     // do something with the returned data
    });
};

export default upload;
