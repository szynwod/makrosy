document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            alert('Czego tam szukasz?');
            return false;
        } else {
            return true;
        }
};


function myFunction() {
  var x = document.querySelector('input[name="genderS"]:checked').value;
  var y = document.getElementById("intensywnosc").value;
  var g = document.getElementById("cel").value;

  document.getElementById("go") 
  if (x == 0){
  var waga = document.getElementById("waga").value;
  var wzrost = document.getElementById("wzrost").value;
  var wiek = document.getElementById("wiek").value;
  var bmr = (9.99 * waga) + (6.25 * wzrost) - (4.92 * wiek) + 5;

	
	if (y == 'Brak aktywności, praca siedząca'){
	cpm = bmr * 1.2;
	cpm = Math.round(cpm);
	bmr = Math.round(bmr);
	
	} else if (y == 'Niska aktywność (praca siedząca i 1-2 treningi w tygodniu)'){
	cpm = bmr * 1.3;
	cpm = Math.round(cpm);
	bmr = Math.round(bmr);
	
	} else if (y == 'Średnia aktywność (praca siedząca i treningi 3-4 razy w tygodniu)'){
	cpm = bmr * 1.5;
	cpm = Math.round(cpm);
	bmr = Math.round(bmr);
	
	} else if (y == 'Wysoka aktywność (praca fizyczna i 3-4 treningi w tygodniu)'){
	cpm = bmr * 1.7;
	cpm = Math.round(cpm);
	bmr = Math.round(bmr);
	
	} else if (y == 'Bardzo wysoka aktywność (zawodowi sportowcy, osoby codziennie trenujące)'){
	cpm = bmr * 1.9;
	cpm = Math.round(cpm);
	bmr = Math.round(bmr);
	}
  
  } else if (x == 1){
  var waga = document.getElementById("waga").value;
  var wzrost = document.getElementById("wzrost").value;
  var wiek = document.getElementById("wiek").value;
  var bmr = (9.9 * waga) + (6.25 * wzrost) - (4.92 * wiek) - 161;
  
   if (y == 'Brak aktywności, praca siedząca'){
	cpm = bmr * 1.2;
	cpm = Math.round(cpm);
	bmr = Math.round(bmr);
	
	} else if (y == 'Niska aktywność (praca siedząca i 1-2 treningi w tygodniu)'){
	cpm = bmr * 1.3;
	cpm = Math.round(cpm);
	bmr = Math.round(bmr);
	
	} else if (y == 'Średnia aktywność (praca siedząca i treningi 3-4 razy w tygodniu)'){
	cpm = bmr * 1.5;
	cpm = Math.round(cpm);
	bmr = Math.round(bmr);
	
	} else if (y == 'Wysoka aktywność (praca fizyczna i 3-4 treningi w tygodniu)'){
	cpm = bmr * 1.7;
	cpm = Math.round(cpm);
	bmr = Math.round(bmr);
	
	} else if (y == 'Bardzo wysoka aktywność (zawodowi sportowcy, osoby codziennie trenujące)'){
	cpm = bmr * 1.9;
	cpm = Math.round(cpm);
	bmr = Math.round(bmr);
	}
  }
	
  if	(bmr < 6 || cpm < 6 || bmr == NaN){
    alert('Wprowadz poprawne dane!')
    return;
}  
  
  if (g == 'Masa'){
	var z = document.getElementById("go");
	var cpm, bia, wegl, tlusz, lbmi, bmi;
  	cpm = cpm + 200;
	lbim = wzrost / 100;
	bmi = waga / (lbim*lbim);
	bia = (cpm * 0.25) / 4;
	tlusz = (cpm * 0.25) / 9;
	wegl = (cpm * 0.5) /4;	
	bia = Math.round(bia);
	tlusz = Math.round(tlusz);
	wegl = Math.round(wegl);
	bmi = Math.round(bmi);
	z.setAttribute('style', 'font-size: 20px; color:#d1c6c6; cursor: pointer; text-align: center; display:block;');
	z.innerHTML ='Potrzebujesz około ' + cpm  + ' kcal/dzień' + '<br>' + 'Białko: ' + bia + 'g ' + 'Tłuszcze: ' + tlusz + 'g '+ 'Węglowodany: ' + wegl +'g';
	
	} else if (g == 'Redukcja'){
	var z = document.getElementById("go");
	var cpm, bia, wegl, tlusz, lbmi, bmi;
  	cpm = cpm - 200;
	lbim = wzrost / 100;
	bmi = waga / (lbim*lbim);
	bia = (cpm * 0.25) / 4;
	tlusz = (cpm * 0.25) / 9;
	wegl = (cpm * 0.5) /4;	
	bia = Math.round(bia);
	tlusz = Math.round(tlusz);
	wegl = Math.round(wegl);
	bmi = Math.round(bmi);
	z.setAttribute('style', 'font-size: 20px; color:#d1c6c6; cursor: pointer; text-align: center; display:block;');
	z.innerHTML ='Potrzebujesz około ' + cpm  + ' kcal/dzień' + '<br>' + 'Białko: ' + bia + 'g ' + 'Tłuszcze: ' + tlusz + 'g '+ 'Węglowodany: ' + wegl +'g';
	
	}
	var z = document.getElementById("go");
	var cpm,  bia, wegl, tlusz, lbmi, bmi;
  	cpm = cpm - 200;
	lbim = wzrost / 100;
	bmi = waga / (lbim*lbim);
	bia = (cpm * 0.25) / 4;
	tlusz = (cpm * 0.25) / 9;
	wegl = (cpm * 0.5) /4;	
	bia = Math.round(bia);
	tlusz = Math.round(tlusz);
	wegl = Math.round(wegl);
	bmi = Math.round(bmi);
	z.setAttribute('style', 'font-size: 20px; color:#d1c6c6; cursor: pointer; text-align: center; display:block;');
	z.innerHTML ='Potrzebujesz około ' + cpm  + ' kcal/dzień' + '<br>' + 'Białko: ' + bia + 'g ' + 'Tłuszcze: ' + tlusz + 'g '+ 'Węglowodany: ' + wegl +'g';
	

}