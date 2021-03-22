function goToMainPage(){
    window.location = '/'
}

function submitProductItem(){

    let data = {
        img: document.getElementById('imageInputAdmin').value, 
        name: document.getElementById('nameInputAdmin').value,
        price: document.getElementById('priceInputAdmin').value,
        description: document.getElementById('descriptionInputAdmin').value
    }

    fetch('/admin/products', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        //   // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
      })
      .then(()=> {
        document.getElementById('imageInputAdmin').value = ''
        document.getElementById('nameInputAdmin').value = ''
        document.getElementById('priceInputAdmin').value = ''
        document.getElementById('descriptionInputAdmin').value = ''
      })
}