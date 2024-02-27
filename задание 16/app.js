function calculateCost() {
    let tileInstallation = parseFloat(document.querySelector("#tileInstallation").value);
    let wallPlastering = parseFloat(document.querySelector("#wallPlastering").value);
    let plumbingInstallation = parseFloat(document.querySelector("#plumbingInstallation").value);
    let plitka = parseFloat(document.querySelector("#cock").value);
    let metr = parseFloat(document.querySelector("#cunt").value);
    if (isNaN(plitka)|| plitka==0 ){
        alert("пожалуйста, не обманывай!")
    }
    let sunt = parseFloat(document.querySelector("#nigger").value);


    let totalVolume = tileInstallation + wallPlastering + plumbingInstallation + plitka + metr + sunt;
    let totalCost = tileInstallation * 50 + wallPlastering * 30 + plumbingInstallation * 100 + plitka * 20 + metr * 2 + sunt * 5;
    

    document.querySelector("#totalVolume").textContent = totalVolume;
    document.querySelector("#totalCost").textContent = totalCost;
}
