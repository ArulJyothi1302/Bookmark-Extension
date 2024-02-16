const inputEl=document.getElementById("input-el");
const saveBtn=document.getElementById("Save");
const delBtn=document.getElementById("del");
const tabBtn=document.getElementById("tab");
const markdel=document.getElementById("markdel");
let myLeads=[];
let oldLeads=[];
//localStorage.clear()
let leadsfromls=JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsfromls);
const ul=document.getElementById("ul-el");
if(leadsfromls){
    console.log("true");
    myLeads=leadsfromls;
    render(myLeads);
    //localStorage.clear()
}
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
         myLeads.push(tabs[0].url);
         localStorage.setItem("myLeads",JSON.stringify(myLeads));
         //localStorage.getItem("myLeads");
         render(myLeads);
        
    })
   
})
function render(leads){
    let listItems="";
    for(let i=0;i<leads.length;i++){
        listItems +=`
        
        <li>
            <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
        </li>
            
            `;
        
}
ul.innerHTML=listItems;
}


saveBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    //myLeads=JSON.stringify(myLeads);
    render(myLeads);
   // console.log(localStorage.getItem("myLeads"));
    inputEl.value="";
    
})
// let listEl=""
// for(let i=0;i<myLeads.length;i++){
//     listEl+="<li>"+ myLeads[i]+"</li>";
//     console.log(listEl);
    
// }
/* BEST WAY TO PRACTISE FOR LISTS*/

// let listEl="";
// for(let i=0;i<myLeads.length;i++){
//     ul.innerHTML+="<li>"+ myLeads[i]+"</li>";
// }

delBtn.addEventListener("dblclick",function(){
    console.log("Del");
    localStorage.clear();
    myLeads=[];
    //
    console.log(myLeads);
    
    
    render(myLeads);
    // myLeads=leadsfromls;
    // console.log(myLeads,",,,,")
});

