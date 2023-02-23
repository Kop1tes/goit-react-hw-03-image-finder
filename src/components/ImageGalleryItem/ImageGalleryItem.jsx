import React from "react";
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({image: { largeImageURL, webformatURL, tags }, openModal,}) => {
    
    return (
        <>
            <li className={css.ImageGalleryItem} onClick={() => openModal(largeImageURL)}>
                <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} />
            </li>
        </>    
    );
};