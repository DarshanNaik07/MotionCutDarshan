document.addEventListener("DOMContentLoaded", () => {
    const mapContainer = document.getElementById("map-container");
    mapContainer.innerHTML = `
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.9364937758393!2d139.69170661525903!3d35.68948798019152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cdeb1f9b203%3A0x7e9b9dc58bd7f0e8!2sTokyo%20Tower!5e0!3m2!1sen!2sjp!4v1690000000000!5m2!1sen!2sjp" 
            width="100%" 
            height="400" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
        </iframe>`;
});
