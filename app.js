const url = fetch('data.json')
.then(res => res.json())
.then(data => dataFunction(data))
.catch(err => console.log(err))


const spanDayCon = document.querySelector('.span-date')
const spanAmount = document .querySelector('.span-container')

function dataFunction (data){
    data.forEach(data =>{
        const { day , amount } = data

        const spanDay = document.createElement('span')
        spanDay.textContent = day
        spanDayCon.appendChild(spanDay)


        const spanAmountCon = document.createElement('span')
        const pElement = document.createElement('p')
        pElement.classList.add('inActive')
    
        pElement.textContent = amount

        spanAmountCon.appendChild(pElement)
        spanAmount.appendChild(spanAmountCon)

        spanAmountCon.addEventListener('click', () =>{
            if(pElement.style.display === 'block'){
                pElement.style.display = 'none'
            }else{
                pElement.style.display = 'block'
            }
        })

    })
}




