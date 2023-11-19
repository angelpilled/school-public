function milyenNemu(fh_nem)
{
    if (fh_nem == "Férfi")
    {
	console.log(fh_nem)
	return "uraság"
    }
    else if (fh_nem == "Nő")
    {
	console.log(fh_nem)
	return "kisasszony"
    }
}

document.getElementById('rendeles').onsubmit = function(event) {
    event.preventDefault();
    const termekNeve = document.getElementById('termekNeve').value;
    const fh_veznev = document.getElementById('fh_veznev').value;
    const fh_kernev = document.getElementById('fh_kernev').value;
    const fh_tsz = document.getElementById('fh_tsz').value;
    const fh_nem = document.querySelector('input[name="nemek"]:checked').value;
    const mennyiseg = document.getElementById('mennyiseg').value;

    if (termekNeve == "Béla")
    {
	window.open('/scripts/belagyerek.jpg');
    }


    alert(`Köszönjük, ${fh_veznev} ${fh_kernev} ${milyenNemu(fh_nem)}! ${mennyiseg} db rendelését leadtunk a(z) ${termekNeve} termékből! További adatokkal a ${fh_tsz} számon fogjuk értesíteni. Poloska Webáruház 42069`);
};
