let konfirmasi = confirm(" ingin main ? ");
while(konfirmasi == true){
    let number = Math.floor(Math.random() * 10 + 1) ; // 1 < x < 10
    console.log(number) ;
    let inputNumber = prompt ("guess number between 1-10 !");  
    if(number == inputNumber){
        alert("selamat anda benar")
    }else if(inputNumber < number){
        alert("tebakan anda terlalu rendah , silahkan menebak lagi")
    }else if(inputNumber > number){
        alert("tebakan anda terlalu tinggi , silahkan menebak lagi")
        }else{
            alert("anda salah menginput")
        }
        konfirmasi = confirm("lanjut ?")
}
