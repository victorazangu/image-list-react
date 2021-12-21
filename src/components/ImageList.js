import React from 'react';

const ImageList = (props) => {
      const styles = {
            display: 'flex',
            flexDirection: 'row',
            FlexWrap: 'wrap',
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5
            
        }
    const images = props.images.map((image) => {
      
        return <img
            key={image.id}
            src={image.webformatURL}
            alt="image"
            
           
        />
    })
        return (
            <div style={{styles}}>
                {images}
            </div>
        )
    
}
export default ImageList;