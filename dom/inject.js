/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html
// */
// <center>
//   <h1><i>HTML Practice Exercise TEKcamp.</i></h1>
//   <h2><a href="">TEKsystems "TEKcamp"</a></h2>
// </center>

// <hr />
// <p>I love <i>HTML</i> for the following reasons:</p>
// <ol>
//   <li>I learned it quickly.</li>
//   <li>I can make web pages using code
// <li> It’s fun.</li>
// </ol>
// <hr />
//   <p>My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.</p>
// <h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day.  
// -[Team "Git'er Done"]


//var text=<h1><i>HTML Practice Exercise TEKcamp.</i></h1>;



    var h1 = document.createElement('h1');
    
    h1.appendChild(document.createTextNode("HTML Practice Exercise TEKcamp"));
    
    h1.style.textAlign = 'center';
    h1.style.fontStyle = 'italic';
   
    
    document.body.appendChild(h1);
    


    var h2 = document.createElement('h2');
    var a = document.createElement('a');
    var linkText = document.createTextNode(`TEKsystems "TEKcamp`);
    a.appendChild(linkText);
    h2.style.textAlign = 'center';
    a.href = "";
    document.body.appendChild(a);
h2.appendChild(a);
document.body.appendChild(h2);
   
var element = document.createElement('hr');
document.body.appendChild(element);

const body1 = document.querySelector('body');
let para=document.createElement('p');
para.textContent = `I Love HTML for the following reasons:`;

//para.textContent.fontStyle('HTML') = 'italic'
body1.appendChild(para);


var ol = document.createElement('ol');
productList = ['I learned it quickly.','I can make web pages using code','It’s fun.'];

document.body.appendChild(ol);
productList.forEach(renderProductList);

function renderProductList(element, index, arr) {
    var li = document.createElement('li');
  

    ol.appendChild(li);

    li.innerHTML=li.innerHTML + element;
}
var element = document.createElement('hr');
document.body.appendChild(element);

var para2 = document.createElement('p');
para2.textContent = "My instructor’s email address is:"
    var a = document.createElement('a');
    var linkText = document.createTextNode(`ayunas@teksystems.com.`);
    a.appendChild(linkText);
    //a.title = "my title text";
    a.href = "mailto:ayunas@teksystems.com";
    document.body.appendChild(a);
para2.appendChild(a);
document.body.appendChild(para2);

function h1(text) {
    var h12 = document.createElement('h1');
    h12.appendChild(document.createTextNode(text));
    document.body.appendChild(h12);
}
h1("Have a great day!");

var para3 = document.createTextNode('p');
para3.textContent = `I really look forward to learning how to code!  Have a great day. -[Team "Git'er Done"]`
document.body.appendChild(para3);
