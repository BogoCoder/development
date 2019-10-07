function correlation(x, y){
    function op(mu, sigma)
    {
        var mu_x, mu_y, sigma_x, sigma_y, pow_x, pow_y;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        if(mu !== undefined && sigma === undefined){
            pow_x = x.map((current)=>{return Math.pow((current - mu),2)});
            pow_y = y.map((current)=>{return Math.pow((current - mu),2)});

            sigma_x = pow_x.reduce(reducer)/x.length;
            sigma_y = pow_y.reduce(reducer)/y.length;

            mu_x = mu_y = mu;
        }

        else if(mu === undefined && sigma !== undefined) {
            mu_x = x.reduce(reducer)/x.length;
            mu_y = y.reduce(reducer)/y.length;

            sigma_x = sigma_y = sigma;
        }

        else if(arguments.length == 0){
            mu_x = x.reduce(reducer)/x.length;
            mu_y = y.reduce(reducer)/y.length;

            pow_x = x.map((current)=>{return Math.pow((current - mu_x),2)});
            pow_y = y.map((current)=>{return Math.pow((current - mu_y),2)});


            sigma_x = pow_x.reduce(reducer)/x.length;
            sigma_y = pow_y.reduce(reducer)/y.length;

        }

        else { 
            mu_x = mu_y = mu;
            sigma_x = sigma_y = sigma;
        }

        var x_bar = x.map((current)=>{return (current - mu_x)/sigma_x});
        var y_bar = y.map((current)=>{return (current - mu_y)/sigma_y});

        
        return dotp(x_bar, y_bar);
    }
    return op;
}

function dotp(x,y) {
    function dotp_sum(a,b) { return a + b; }
    function dotp_times(a,i) { return x[i] * y[i]; }
    if (x.length != y.length)
        throw "arrays have different lengths";
    return x.map(dotp_times).reduce(dotp_sum,0);
}

// You can prove the code with: 
// correlation([1,2,3],[4,5,6])(2,0.5)
// 
// correlation([1,2,3],[4,5,6])(undefined,0.5)
// 
// correlation([1,2,3],[4,5,6])(0.5)
// 
// correlation([1,2,3],[4,5,6])()