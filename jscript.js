document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    console.log('Form Data Submitted:', data);

});

