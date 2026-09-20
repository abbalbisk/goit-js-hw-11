import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

const formEl = document.querySelector('.form');
const inputValue = document.querySelector('[type="text"]');

formEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const inpValue = inputValue.value.trim();

    if (!inpValue) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!'
        });
        clearGallery();
        return;
    }


    clearGallery();
    showLoader();

    getImagesByQuery(inpValue)
        .then(data => {
            const arrOfImage = data.hits;

            if (arrOfImage.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                return;
            }

            createGallery(arrOfImage);
        })
        .catch(err => {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!'
            });
        })
        .finally(() => {
            hideLoader();
        });

    formEl.reset();
});