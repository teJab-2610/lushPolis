const handleImageUpload = async (file) => {
    try {
      console.log("Inside Image Upload");
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post('http://localhost:3001/uploadImage', formData);
      const imageUrl = response.data.imageUrl;
      console.log(imageUrl);
      setContent((prevContent) => prevContent + `<img src="${imageUrl}" alt="Uploaded Image" />`);
    } catch (error) {
      console.error(error);
    }
};

export default handleImageUpload;