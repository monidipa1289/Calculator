let div = document.querySelector('div');
let button = document.querySelectorAll('button');

let expression="";
for(b of button)
{
    b.addEventListener('click',function(e){
        if(e.target.innerText==='=')
        {
            expression = expression.replace("^", "**");
            expression=eval(expression);
            // expression=parseFloat(expression);
        }
        else if(e.target.innerText==='DEL')
        {
            expression=expression.slice(0,expression.length-1);
        }
        else if(e.target.innerText==='AC')
        {
           expression="";
        }
        else
        {
         expression+=e.target.innerText;
        
        }
        div.innerText=expression;
    })
}


