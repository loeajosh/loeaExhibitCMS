document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');

    // Function to get URL parameter
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const artId = getQueryParam('id');

    // You can replace this with a more complex logic, like fetching from a JSON file or an API
    const mediaItems = {
        'ART_ID_1': {
            image: 'https://drive.google.com/uc?export=view&id=YOUR_IMAGE_FILE_ID_1',
            video: 'https://drive.google.com/uc?export=view&id=YOUR_VIDEO_FILE_ID_1',
            text: 'This is the documentation for art piece 1.'
        },
        'ART_ID_2': {
            image: 'https://drive.google.com/uc?export=view&id=YOUR_IMAGE_FILE_ID_2',
            video: 'https://drive.google.com/uc?export=view&id=YOUR_VIDEO_FILE_ID_2',
            text: 'This is the documentation for art piece 2.'
        }
        // Add more art pieces here
    };

    const item = mediaItems[artId];

    if (item) {
        const mediaDiv = document.createElement('div');
        mediaDiv.classList.add('media-item');

        if (item.image) {
            const img = document.createElement('img');
            img.src = item.image;
            mediaDiv.appendChild(img);
        }
        if (item.video) {
            const video = document.createElement('video');
            video.controls = true;
            video.src = item.video;
            mediaDiv.appendChild(video);
        }
        if (item.text) {
            const p = document.createElement('p');
            p.textContent = item.text;
            mediaDiv.appendChild(p);
        }

        contentDiv.appendChild(mediaDiv);
    } else {
        contentDiv.textContent = 'No content available for this art piece.';
    }
});
