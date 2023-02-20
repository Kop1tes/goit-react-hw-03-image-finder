import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import React from "react";
import css from "./ImageGallery.module.css";

export const ImageGallery = ({images, openModal}) => {
    return (
        <ul className={css.ImageGallery}>
            {images.map(image => (<ImageGalleryItem key={image.id} image={image} openModal={openModal} />))}
        </ul>
    );
};