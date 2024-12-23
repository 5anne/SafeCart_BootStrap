function handleButton() {
    alert('Product added to cart!');
}

document.querySelector('.offer-btn-hover-js').addEventListener('mouseover', function () {
    this.style.backgroundColor = '#F6F54D33';
    this.style.color = '#000';
});

document.querySelector('.offer-btn-hover-js').addEventListener('mouseout', function () {
    this.style.backgroundColor = '#F6F54D';
    this.style.color = '#000';
});

document.querySelector('.btn-hover-js').addEventListener('mouseover', function () {
    this.style.backgroundColor = '#0C123080';
    this.style.color = '#fff';
});

document.querySelector('.btn-hover-js').addEventListener('mouseout', function () {
    this.style.backgroundColor = '#0C1230';
    this.style.color = '#fff';
});