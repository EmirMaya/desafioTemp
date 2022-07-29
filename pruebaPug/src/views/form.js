let form = document.getElementById('testForm');
form.addEventListener('submit', evt => {
    evt.preventDefault();
    let data = new FormData(form)
    let obj = {};
    data.forEach((value, key) => obj[key] = value);
    fetch('/productos', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    })
})