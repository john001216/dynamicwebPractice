window.addEventListener('load', async function(event) {
   try{
  let response = await fetch('http://localhost:8090/thing/list');
   // this.alert("works")
   let body = await response.json();
   console.log(body)
   renderThings(body);
   } catch(e) {
      alert(e);
   }
})

function renderThings (things){
   //alert(things);
   let container = document.getElementById('things');
   for(let thing of things){
      let item = document.createElement('li')
      item.innerHTML = thing;
      container.appendChild(item);
   }
   }