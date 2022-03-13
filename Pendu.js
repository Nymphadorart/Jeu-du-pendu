

let tableau_mot = ['MAGIQUE','LICORNE','DRAGON',
'GARGOUILLE','NYMPHE','GOLEM', 'HARPIE', 'MAGICIEN','SORCIER', 'ETOILE', 'PAILLETTES', 'REVES', 'FANTASTIQUE', 'HISTOIRES','GORGONE','MYTHOLOGIE','PRINCESSE','MALEFIQUE','IMAGINAIRE']; //tableau de tous les mots qui sont disponibles dans le jeu.




let nb = 0;


nb = aleatoire_mot();


var chaine = tableau_mot[nb];
var long = chaine.length;

afficher_cases();


function aleatoire_mot(){
    
    var alea = Math.floor(Math.random()*tableau_mot.length); //selection du mot au hasard
    
    return alea;
   
}



function afficher_cases(){ //affiche le nombre de cases = aux nombres de lettres du mot choisis
    
    
    for(var i = 1; i <= long;i++){
        document.getElementById('mot_devine').innerHTML += '<div id="champ_devine'+i+'" class="champ_devine"><input type="text" id="devine'+i+'" class="champclassdev" disabled></div>';
    }
    
    for(var j = 1; j <= long;j++){
        document.getElementById('mot_cache').innerHTML += '<div id="champ_cache'+i+'" class="champ_cache"><input type="text" id="cache'+i+'" class="champclass" value="'+chaine[j-1]+'"></div>';
    }
   
    
}

var erreur = 0;
var faux = false;
var nbgagner = 0;


function propose(a){
    
    var lettre = 1;
    
    document.getElementById('lettre'+a).disabled = 'true';
    document.getElementById('lettre'+a).style.backgroundColor = 'pink';
    document.getElementById('lettre'+a).style.color = 'white';
    document.getElementById('inputtext_cache').value = a; 
    
    
    
    for(var k = 1; k <= long ; k++){ // FOR pour l'affichage des lettre dans les cases
        
        
        if(a == chaine[k-1]){
            document.getElementById('devine'+k).value = a;
            nbgagner++;
            document.getElementById('footer').innerHTML = "<span> Yep, continues comme ça !</span>"
        }
        

    }
     
    for(var l = 1; l <= long ; l++){ // FOR pour la verif des fautes.
        
        if(a != chaine[l-1]){
            faux = true;
            
        }
        
        else if(a == chaine[l-1]){
            faux = false;break;
        }
        
        
    }
    
    if(faux){ //affichages du pendu si il y'a des fautes. 
        document.getElementById('bonnechance').style.display = "none";
        erreur++;
        document.getElementById('footer').innerHTML = "<span>Nop, c'est pas ça !</span>"
        
        
        document.getElementById('pendu'+erreur).style.display = "block";
        var comptage = erreur -1;
        document.getElementById('pendu'+comptage).style.display = "none";
        
    }
    
    var maClass = document.getElementsByClassName("bouton_clavier"); // Changement des couleurs du clavier quand le jeu est perdu ou gagné
    
    if(erreur >= 6 ){
        document.getElementById('footer').innerHTML = "<span>You loose !</span>"
        
        for (var i = 0, count = maClass.length; i < count; i++) {
            var element = maClass[i];
            
            element.style.backgroundColor = '#BE3AFF';
            element.style.color = '#CACACA';
            element.disabled = 'true';
            
            
        }
        
        for(var j = 1; j <= long;j++){
            document.getElementById('champ_devine'+j ).style.display = "none"
            document.getElementById('mot_devine').innerHTML += '<div id="champ_devine'+i+'" class="champ_devine"><input type="text" id="devine'+i+'" class="champclassdev" value="'+chaine[j-1]+'"></div>';
        }
        
        setTimeout('fin()',2000);
           
    }
    
    if(nbgagner == long){
        document.getElementById('footer').innerHTML = "<span>Bien joué, vous restez en vie !</span>";
        setTimeout('fin()',2000);

        for (var i = 0, count = maClass.length; i < count; i++) {
            var element = maClass[i];
            
            element.style.backgroundColor = '#BE3AFF';
            element.style.color = '#CACACA';
            element.disabled = 'true';
            
            
        }
        
        for(var j = 1; j <= long;j++){
            document.getElementById('champ_devine'+j ).style.display = "none"
            document.getElementById('mot_devine').innerHTML += '<div id="champ_devine'+i+'" class="champ_devine"><input type="text" id="devine'+i+'" class="champclassdev" value="'+chaine[j-1]+'"></div>';
        }
    } 
    
    
}

function fin(){
    document.getElementById('footer').innerHTML += "<input type='button' value='On recommence ?' id='bouton_recommencer' onclick='reload()'>";
}
 function reload(){
     window.location.reload(true);
 }