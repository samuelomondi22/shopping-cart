//show cards

(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');

    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    });
})();

//add items to the cart

(function(){
    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function(btn){
        btn.addEventListener('click', function(event){
            //console.log(event.target);

            //make sure event only fires when we click on the icon
            if (event.target.parentElement.classList.contains('store-item-icon')) {
                let fullPath = event.target.parentElement.previousElementSibling.src
                let pos = fullPath.indexOf('img') + 3; //3 cause the img is 3 string long and you dont also want it to show
                let partPath = fullPath.slice(pos); //makes it so tht when you click you only get the name of the image
                const item = {};
                item.img = `img-carts${partPath}`
                let name = event.target.parentElement.parentElement.nextElementSibling.children[0].children[0].textContent;//gets you the name 
                item.name = name;
                let price = event.target.parentElement.parentElement.nextElementSibling.children[0].children[1].textContent;
                let finalPrice = price.slice(3).trim();//takes away the KES
                item.price = finalPrice;
                
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 'd-flex', 'justify-content-between', 'text-capitalize', 'my-3');
                cartItem.innerHTML = `
                  <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
                  <div class="item-text">
      
                    <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                    <span>KES</span>
                    <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
                  </div>
                  <a href="#" id='cart-item-remove' class="cart-item-remove">
                    <i class="fas fa-trash"></i>
                  </a>
                </div>
                `
                //select cart

                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');
                cart.insertBefore(cartItem, total);
                alert('item added to the cart');
                showTotals();
            }
        })
    })

function showTotals(){
    const total = [];
    const items = document.querySelectorAll('.cart-item-price');

    items.forEach(function(item){
        total.push(parseFloat(item.textContent));
    })
    const totalMoney = total.reduce(function(total, item) {
        total += item;
        return total;
    },0)
    const finalMoney = totalMoney.toFixed(2);
    
    document.getElementById('cart-total').textContent = finalMoney;
    document.querySelector('.item-total').textContent = finalMoney;
    document.getElementById('item-count').textContent = total.length;
    
}
})()