document.getElementsByClassName('buy-now-button')[0].addEventListener('click', () => {

    let obj = {
        method: 'addNewPaymentIframe',
        data: {
            landingPage: true,
            product: {
                image: '\/\/cdn.shopify.com\/s\/files\/1\/0642\/1692\/4408\/products\/8409024166.jpg?v=1681200279',
                title: 'Electronic LED Mosquito Killer Machine trap lamp With USB',
                quantity: 1,
                price: 58900,
                variant_id: 43772270510328
            },
            original_total_price: 58900,
            total_price: 58900
        }
    }

    parent.postMessage(obj, "*");

})
