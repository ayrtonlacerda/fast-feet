import React, { useState, useRef, useEffect } from 'react';
import { Imgs } from '../../../assets';
import { Container, PrevLabel, LabelImage, Text } from './styles';
import Endpoints from '../../../services';


const AvatarInput = ({ handleOnChange, file }) => {
  const [preview, setPreview] = useState(null);
  const ref = useRef()

  useEffect(() => {
    if (file) {
      console.log({ file })
      setPreview(file.url);
    }
  }, [file]);

  const handleChange = async (event) => {
    const data = new FormData();
    data.append('file', event.target.files[0]);
    try {
      const response = await Endpoints.postFile(data);
      const { id, url, path } = response.data.file;
      setPreview(url);
      handleOnChange(response.data.file);
    } catch (error) {
      console.log({ error });
    }        
  }
  
  return (
    <Container>
      <label htmlFor='avatar' >    
        <img src={preview || Imgs.INSERT} alt='' />        
        <input
          type='file'
          id='avatar'
          accept='image/*'
          data-file={file}
          onChange={handleChange}
          ref={ref}
      />
      </label>
    </Container>
  );
}

export default AvatarInput;

/* 


*/