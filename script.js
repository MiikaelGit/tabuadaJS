function criate() {
    let number = document.getElementById('value')
    let n = Number(number.value)
    
    document.getElementById('show').innerHTML = '' 
    if (number.value.length == 0) {
        alert('Por favor, digite um número!')
        document.getElementById('show').innerHTML = '<option value="">Digite um número acima</option>'
    }else {
        for (let x = 0 ; x <= 10; x++){
            let res = x * n 
            document.getElementById('show').innerHTML += `<option value="${x}">${n} X ${x} = ${res}</option>`
        }
    }    
}