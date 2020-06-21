let pageContentContainer = document.querySelector('.page-content');
let cartCounterLabel = document.querySelector('#cart-counter');
let cartCounter = 0;
let cartPrice = 0;


let btnClickHandler = (e) => {
  let target = e.target;

  if (target.classList.contains('item-actions__cart')) {
    cartCounterLabel.innerHTML = ++cartCounter;
    if (cartCounter === 1) cartCounterLabel.style.display = 'block';
    const mockData = +target.parentElement.previousElementSibling.innerHTML.replace(/^\$(\d+)\s\D+(\d+).*$/gu,'$1.$2');
    cartPrice = Math.round((cartPrice + mockData) * 100) / 100;
    let restoreHTML = target.innerHTML;
    target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;
    pageContentContainer.removeEventListener('click', btnClickHandler);

    setTimeout(() => {
      target.innerHTML = restoreHTML;
      pageContentContainer.addEventListener('click', btnClickHandler);
    }, 2000);
  }
};

pageContentContainer.addEventListener('click', btnClickHandler);
