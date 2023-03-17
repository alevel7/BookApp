import React from 'react';

const Book = (props) => {
    const { image, title, author } = props;

    const viewTitle = () => alert(title)
    return (
        <figure className='book'>
            <img src={image} alt="" className='img' />
            <figcaption>
                <h1>{title}</h1>
                <h4>{author}</h4>

            </figcaption>
            <button onClick={viewTitle}>View title</button>
        </figure>
    )
}

export default Book