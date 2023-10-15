var mobiles = {
    samsung:{
        note4:{
            name:'Samsung Note 4',
            price: 35000,
            colors:['silver','grey','black'],
            image:"data:image/jpeg;base64,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"
        },
        note8:{
            name:'Samsung Note 8',
            price: 45000,
            colors:['grey','purple','white'],
            image:'https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_sstttgmVJXHph1jxeCLNN1WClEgcux3pXwuw1lu4.jpg'
        },
        galaxy:{
            name:'Samsung Galaxy',
            price: 35000,
            colors:['black','silver','grey'],
            image:'https://static-01.daraz.pk/p/577d0ca7b96472dae047507f5383bb8d.jpg'
        }
    },
    motorola:{
       motog9:{
        name:'Motorola G9',
        price: 30000,
        colors:['silver','grey','black'],
        image:'https://phonebolee.com/images/Motorola-Moto-G9.jpg'
    
       },
       motoone:{
        name:'Motorola One',
        price: 38999,
        colors:['red','purple','black'],
        image:'https://mobilemall.pk/public_html/images/product/product_1602664370motorola-one-5g.jpg'
           },
        motog9:{
            name:'Motorola G9',
            price: 30000,
            colors:['silver','grey','black'],
            image:'https://propakistani.pk/price/wp-content/uploads/2020/09/motorola-g9-play-price.png'
        
           },
      motoe7:{
            name:'Motorola E7',
            price: 48999,
            colors:['purple','black','red'],
            image:'https://images.priceoye.pk/motorola-moto-e7-plus-pakistan-priceoye-c3shr.jpg'
             },
       motox:{
        name:'Motorola X',
        price: 28500,
        colors:['white','red','purple'],
        image:'https://www.mega.pk/items_images/t_7887.png'
    

       }      
    },
oneplus:{
    oneplus9:{
        name:'Oneplus 9',
        price: 138500,
        colors:['white','red','purple'],
        image:'https://mobilemall.pk/public_html/images/product/product_1617029961Astralblack_2080a-min_euna.png'
    
    },
    oneplusnord:{
        name:'Oneplus Nord',
        price: 55500,
        colors:['white','red','purple'],
        image:'https://mobilemall.pk/public_html/images/product/product_16272840271-m00-28-30-rb8bwmdutreacteuaaft3rofomg352_840_840.png'
    
    }
},
oppo:{
    opporeno:{
        name: 'Oppo Reno 6',
        price: 119000,
        colors:['purple','blue','green'],
        image:'https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/new-navi/reno6-5g.png.thumb.webp'
        
    },
    oppoa77:{
        name: 'Oppo A77',
        price:37500,
        color:['black', 'white'],
        image:'https://whatphone.pk/wp-content/uploads/2023/05/Oppo-A77s-500x532.jpg'
    }
}
}
var selectlist = document.getElementById('select1');
var selectlist1 = document.getElementById('select2')
var card = document.getElementById('card')
selectlist.innerHTML =`<option value="">Select Mobile Brand</option>`
selectlist1.innerHTML =`<option value="">Select Mobile Model</option>`

for(var key in mobiles){
    selectlist.innerHTML += `<option value="${key}">${key.toUpperCase()}</option>`
    for(var key1 in mobiles[key]){
var mobData = mobiles[key][key1]
        card.innerHTML += `<div class="card" style="width: 18rem;">
            <img class="mob" src="${mobData.image}" alt="...">
            <div class="card-body">
            <h4>${mobData.name}</h4>
            <h5 style="color:rgb(165, 29, 42)">Rs ${mobData.price} /-</h5>
            </div>`
}
}

function selectItem(){
    selectlist1.innerHTML = ""
    selectlist1.innerHTML =`<option value="">Select Mobile Model</option>`
    for(var key in mobiles[selectlist.value]){
        selectlist1.innerHTML += `<option value="${key}">${key.toUpperCase()}</option>`
    }
}
function renderData(){
    card.innerHTML = ""
    if(!selectlist.value){
        for(var key in mobiles){
            for (var key2 in mobiles[key]){
                console.log(key2);
                card.innerHTML += `<div class="card" style="width: 18rem;">
                <img class="mob" src="${mobiles[key][key2].image}" alt="...">
                <div class="card-body">
                <h4>${mobiles[key][key2].name}</h4>
                <h5 style="color:rgb(165, 29, 42)">Rs ${mobiles[key][key2].price} /-</h5>
                </div>`
            }
        }
    }
    if(!selectlist1.value){
        for(var key2 in mobiles[selectlist.value]){
           console.log(key2);
            card.innerHTML += `<div class="card" style="width: 18rem;">
            <img class="mob" src="${mobiles[selectlist.value][key2].image}" alt="...">
            <div class="card-body">
            <h4>${mobiles[selectlist.value][key2].name}</h4>
            <h5 style="color:rgb(165, 29, 42)">Rs ${mobiles[selectlist.value][key2].price} /-</h5>
            </div>`
        }
    }
    if(selectlist.value && selectlist1.value){
        card.innerHTML = `<div class="card" style="width: 18rem;">
            <img class="mob" src="${mobiles[selectlist.value][selectlist1.value].image}" alt="...">
            <div class="card-body">
            <h4>${mobiles[selectlist.value][selectlist1.value].name}</h4>
            <h5 style="color:rgb(165, 29, 42)">Rs ${mobiles[selectlist.value][selectlist1.value].price} /-</h5>
            </div>`
    }
}
