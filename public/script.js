let buttonget = document.querySelector('button');
let input = document.querySelector('input');
let result = document.querySelector('h1');

let obj= {
    jFrWzVr8cuw: 'quark outing' ,
    in2jjMLwuec:'ankhiya milaoon',
    JTC6NvYwMqo: 'going back to campus',
    PRukzCWSFeA: 'sawar loon',
    biOECkyeSeE: 'na na na na',
    WZNFPBvOWTc: 'zaalima tutorial',
    oI2UDFampw: 'campus princess',
    LIA04Coso7Y: 'Raabta',
    Okbb7xb3oA: 'uff teri adaa',
    K9KKtwWaCXo: 'taal se taal',
    Fg3cEY: 'afreen afreen',
    WQu6G4gXry0: 'BTS mix',
    qwmx3oOZnWQ: 'money',
    KpWib0Z6ReM: 'lalisa',
    WUn2RwH4nIc: 'khudaya khair',
    hop_6L5PUa4: 'how you like that',
    zojtpgLuWQE: 'let me take you dancing',
    
    

}


buttonget.addEventListener('click', () =>{

    let value = input.value;
    let key = Object.keys(obj).find(key => obj[key] == value);
    if(value != 'campus princess'){
        let url = "https://www.youtube.com/watch?v=" + key 
        result.innerText = url;

    }
    else if (value == 'campus princess'){
        let url = "https://www.youtube.com/watch?v=5" + key
        result.innerText = url;


    }
    else if (value == 'afreen afreen'){
        let url = "https://www.youtube.com/watch?v=HUR5-" + key
        result.innerText = url;


    }
    

    

});