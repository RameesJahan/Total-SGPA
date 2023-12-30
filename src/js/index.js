let cgpa_list = ['']

const loadInput = () => {
  const cgpa_container = document.getElementById('cgpa_container')
  let data = ''
  cgpa_list.forEach((item,i) => {
    if(i>0){ 
      //if cgpa list has morethan 1 item add delete button 
      data +=`<div class="flex border rounded mt-1.5 overflow-hidden">
                <input class="w-full p-1.5 outline-none" type="number" name="cgpa_${i+1}" id="cgpa_${i+1}" placeholder="Enter CGPA ${i+1}" onchange="updateInput(this,${i})" value="${item}"/>
                <img class="w-[24px] m-1.5 p-0.5 shrink" src="/src/icons/trash.svg" alt="Delete" onclick="handleDel(${i})" />
              </div>`
    }else{
      data +=`<div class="border rounded mt-1.5 overflow-hidden">
                <input class="w-full p-1.5 outline-none" type="number" name="cgpa_${i+1}" id="cgpa_${i+1}" placeholder="Enter CGPA ${i+1}" onchange="updateInput(this,${i})" value="${item}"/>
              </div>`
    }
  })
  cgpa_container.innerHTML = data
}

const handleAdd = (e) => {
  cgpa_list.push('')
  loadInput()
}

const handleDel = (i) => {
  cgpa_list.splice(i,1)
  loadInput()
}

const updateInput = (target,i) => {
  data=target.value;
  console.log(data);
  cgpa_list[i] = data
}

window.onload = () => {
  loadInput()
}

const handleSubmit = () => {
  let sem = getSem(cgpa_list)
  if(sem>0){
    sum=getSum(cgpa_list)
    console.log(sum);
    sgpa = (sum/(sem*10))*100
    document.getElementById('sgpa').innerText=sgpa
  }
}

function getSem(arr) {
  let s=0
  arr.forEach((item) => {
    if(item) s++
  })
  return s
}
function getSum(arr) {
  let s=0
  arr.forEach((item) => {
    s+=Number(item)
  })
  return s
}
