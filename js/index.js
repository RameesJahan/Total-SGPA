//Tailwind Configuration
tailwind.config = {
      theme: {
        extend: {
          colors: {
            clifford: '#da373d',
          }
        }
      }
    }



let sgpa_list = ['']

const loadInput = () => {
  const sgpa_container = document.getElementById('sgpa_container')
  let data = ''
  sgpa_list.forEach((item,i) => {
    if(i>0){ 
      //if sgpa list has morethan 1 item add delete button 
      data +=`<div class="flex border rounded mt-1.5 overflow-hidden">
                <input class="w-full p-1.5 outline-none" type="number" name="sgpa_${i+1}" id="sgpa_${i+1}" placeholder="Enter SGPA for Sem ${i+1}" onchange="updateInput(this,${i})" value="${item}"/>
                <img class="w-[24px] m-1.5 p-0.5 shrink" src="icons/trash.svg" alt="Delete" onclick="handleDel(${i})" />
              </div>`
    }else{
      data +=`<div class="border rounded mt-1.5 overflow-hidden">
                <input class="w-full p-1.5 outline-none" type="number" name="sgpa_${i+1}" id="sgpa_${i+1}" placeholder="Enter SGPA for Sem ${i+1}" onchange="updateInput(this,${i})" value="${item}"/>
              </div>`
    }
  })
  sgpa_container.innerHTML = data
  document.getElementById(`sgpa_${sgpa_list.length}`).focus()
}

const handleAdd = (e) => {
  sgpa_list.push('')
  loadInput()
}

const handleDel = (i) => {
  sgpa_list.splice(i,1)
  loadInput()
}

const updateInput = (target,i) => {
  data=target.value;
  sgpa_list[i] = data
}

window.onload = () => {
  loadInput()
}

const handleSubmit = () => {
  let sem = getSem(sgpa_list)
  if(sem>0){
    sum=getSum(sgpa_list)
    total_sgpa = (sum/(sem*10))*100
    document.getElementById('sgpa').innerText=Number((total_sgpa).toFixed(2))+"%"
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
