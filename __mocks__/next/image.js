import React from 'react';

const Image = (props) => {
    // You might want to provide a default value for height if not provided
    const {src, height = 100, width = 100, alt = '', ...rest} = props;

    return <img src={src} height={height} width={width} alt={alt} {...rest} />;
};

export default Image;
