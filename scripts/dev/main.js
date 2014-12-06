// Napišite javascript kod koji će iterirati od 0 do 20. Za svaku iteraciju, treba provjeriti da li je broj paran ili neparan. ukoliko je broj paran, treba u konzolu ulogirati "paran".

var nizMin = 0;
var nizMax = 20;

for (broj = nizMin; broj <= nizMax; broj++){
    
    if (broj % 2 == 0 && broj > 0){
        
        console.log(broj + ' je paran broj');
        
    } else {
        
        //console.log(broj);
        
    }
    
};


//Napišite javascript kod koji će u konzolu ispisati tablicu množenja za brojeve od 1 do 10

var red = [];

for (x = 1; x <= 10; x++) {
    
    for (y = 1; y <= 10; y++) {
        
        if (x * y < 10){
            
            red[y] = '0' + x * y;
        
        } else{
            
            red[y] = x * y;
            
        }
        
        
    }
    
    console.log(red.join(" | "));
};


// Click eventovi za gumbove (hrefove) edit, invoice i delete neka logiraju nesto u konzolu

$('.popup-actions a').on('click', function(e){
    
    e.preventDefault();
    var button = $(this).text();
    console.log('kliknut je' + button + ' gumb');

});
    


    
