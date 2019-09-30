function fibo(n)
{
    var f1 = 0, f2 = 1, i;

    if(n < 1) return;

    for(i = 1; i <= n; i++){
        console.log(f2);
        var next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
}

function est_media(x,media){
    function est_varianza(varianza)
    {
        return (x-media)/varianza;
    }
    return est_varianza;
}

function correlation(x, y){
    function est_varianza(mu, sigma)
    {
        var x_bar = [(x - mu)/sigma];
        var y_bar = [(y - mu)/sigma];
        // return x_bar.map(function(current){return current*(y_bar.map(function(current){return current}))});
        return x_bar.map(function(current){return current*y_bar.values()});
    }
    return est_varianza;
}