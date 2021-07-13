let followers = document.querySelector(".card__followers");
let price = document.querySelector(".card__price");
let range = document.querySelector("input[type = 'range']");
let toggle = document.querySelector(".card__toggle");
let percentage = 1 ;
let card__switch_container = document.
querySelector(".card__switch-container");
let discount = false;



function set_things()
{
     let value = range.value;
    switch(value)
    {
        case "1" :
            value = parseFloat(value).toFixed(2);
            followers.innerHTML = `10K pageviews`;
            price.innerHTML = `$${ 8 * percentage} `;
            break;
        case "2" :
            value = parseFloat(value).toFixed(2);            followers.innerHTML = `50K pageviews`;
            price.innerHTML = `$${12 * percentage} `;
            break;
        case "3" :
            value = parseFloat(value).toFixed(2);
            followers.innerHTML = "100K pageviews";
            price.innerHTML = `$${16 * percentage} `;
            break;
        case "4" :
            value = parseFloat(value).toFixed(2);
            followers.innerHTML = `500K pageviews`;
            price.innerHTML = `$${24 * percentage} `;
            break;
        case "5" :
            value = parseFloat(value).toFixed(2);
            followers.innerHTML = `1M pageviews`;
            price.innerHTML = `$${36 * percentage} `;
            break;
    }
}

card__switch_container.addEventListener("click",function(e)
{
    discount = !discount;
    console.log(discount);
    if(discount)
    {
        percentage = 0.75 ; 
        e.currentTarget.
        classList.add("discount");
    }
    else
    {
        percentage = 1;
        e.currentTarget.
        classList.remove("discount");
    }
    set_things();
});

window.addEventListener("load",function()
{
    set_things();
});
// range.addEventListener("mouseup",set_things);
range.addEventListener("mousemove",set_things);
range.addEventListener("mouseup",set_things);
range.addEventListener("click",set_things);

fetch("data.json").then(function(json_promess)
{
    console.log(json_promess);
    json_promess.json().then(function(data)
    {   
        console.log(data);
    });
}).catch(function(error)
{
    console.log(error);
});
