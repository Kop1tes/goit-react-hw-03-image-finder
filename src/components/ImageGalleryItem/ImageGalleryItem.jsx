import React from "react";
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({image: { largeImageUrl, webformatUrl, tags }, openModal,}) => {
    
    return (
        <>
            <li class={css.ImageGalleryItem} onClick={() => openModal(largeImageUrl)}>
                <img className={css.ImageGalleryItemImage} src={webformatUrl} alt={tags} />
            </li>
        </>    
    );
};