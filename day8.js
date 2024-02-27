//อีกวิธีที่ดูค่า input 
const submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click" , addContent);

//ดูค่า input ในช่อง
/*console.log(document.getElementById("textInput").value)

function addContent(){
    console.log("Hi Arisara") // check ว่า function ตอนกดปุ่มทำงานได้จริงไหม
}
*/
function addContent(){
    console.log("Hi Arisara")
    const text = document.getElementById("textInput").value
    //const result =document.getElementById("result")
    //เอาค่า result มาใส่ในตัวแปล text
   // result.innerHTML = text 
   //ทำการ save ค่าด้วย และสร้าง element ชื่อว่า div
   /*
   const newDiv = document.createElement("div");
    // and give it some content ใช้ create text node 
    //const newContent = document.createTextNode("Hi there and greetings!");
    const newContent = document.createTextNode(text);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  */
    // อีก1วิธีในการเพิ่ม element 
    const result =document.getElementById("result")
    result.innerHTML += `<li> ${text}</li>`
}

// เรียนรู้ API 
async function fetchData(){
  const data = await fetch ('https://jsonplaceholder.typicode.com/todos/')
  console.log(data)
  const json = await data.json()
  console.log(json)

  const titleList = document.getElementById("titleList")
  // loop check data
  for (let i=0; i<json.length; i++){
    titleList.innerHTML += `<h3> ${json[i].title}</h3>`
  }
}
fetchData()

