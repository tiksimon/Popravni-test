// Napisati web aplikaciju koja omogucava vodjenje evidencije o fakturama. Aplikacija poseduje polje
// za naziv kompanije, PIB kompanije, datum fakturisanja, kao i cenu u dinarima.
// Prilikom klika na dugme Insert u container ispod se ubacuje faktura u formatu datom unutar HTML
// koda, prilozenog uz tekst.
// Funkcionalnosti
// 1. Obezbediti kreiranje fakture.
// 2. Obezbediti proveru ispravnosti unetih polja.
// Naziv kompanije ne sme da prima samo blanko znakove. U slucaju blanko znakova
// napisati alert o grešci u unosu.
// PIB mora da bude osmocifreni broj.
// Value mora da bude broj. Ukoliko sadrzi teskt ispisati gresku.
// 3. Nakon dodavanja fakture resetovati sva polja.
// 4. Obezbediti da se na dugme DELETE svake fakture, ista obrise.
// 5. Prilikom kreiranja fakture sve informacije pamtiti u nizu po sledecoj JavaScript strukturi
// objekta:

[
    {
    name:"Ime kompanije",
    pib:"12345678",
    dateIssued:"2019-11-18",
    value:1000,
    currency:"RSD",
    timeStamp:"10:29:21",
    dateStamp:"2019-11-18"
    },
    {
    name:"Ime kompanije",
    pib:"78945612",
    dateIssued:"2019-11-18",
    value:1500,
    currency:"RSD",
    timeStamp:"10:29:21",
    dateStamp:"2019-11-18"
    }
]

const fakture = 0
const count = 0 

const inputName = document.querySelector('#txt-company-name')
const InputPib = document.querySelector('#txt-company-pib')
const inputDate = document.querySelector('#txt-time')
const buttonInsert = document.querySelector('#btn-add')
const inputValue = document.querySelector('#txt-value')

const itemListe = document.querySelector('item-list')


// 2. Obezbediti proveru ispravnosti unetih polja.
// Naziv kompanije ne sme da prima samo blanko znakove. U slucaju blanko znakova
// napisati alert o grešci u unosu.
// PIB mora da bude osmocifreni broj.
// Value mora da bude broj. Ukoliko sadrzi teskt ispisati gresku.

const isVAlid = () => inputName.value.trim() !== ''
                   && InputPib.value.trim() !== ''
                   && inputDate.value.trim() !== ''
                   && inputValue.value.trim() !== ''
                   && InputPib.value.trim().length === 8
                   && !Number.isNaN(Number(companyPib.value.trim()))
                   && !Number.isNaN(Number(inputValue.value.trim()))

const addElemToDOM = (id) => {
    const divContainer = document.createElement('div')
    divContainer.className = 'item-container'

        const divInfo = document.createElement('div')
        divInfo.className = 'item-info'

        const divOsobine = document.createElement('div')
        
            const companyName = document.createElement('label')
            companyName.className = 'company-name'
            companyName.textContent = inputName.value + ''

            const companyPib = document.createElement('label')
            companyPib.className = 'company-pib'
            companyPib.textContent = InputPib.value + ''

            const companyDate = document.createElement('label')
            companyDate.className = 'company-date'
            companyDate.textContent = inputDate.value + ''

            const companyValue = document.createElement('label')
            companyValue.className = 'company-value'
            companyValue.textContent = inputValue.value + ''

            divOsobine.append(companyDate,companyName,companyPib,companyValue)

        divInfo.appendChild(divOsobine)

    divContainer.appendChild(divInfo)

        // const divTime = document.createElement('div')
        //     const timeAndDate = document.createElement('label')
        //     timeAndDate.className = 'time-and-date'
        //     timeAndDate.innerHTML = <span></span>

        //     // ------------
    itemListe.appendChild(divContainer)

    inputName.value = ''
    inputDate.value = ''
    inputValue.value = ''
    InputPib.value = ''
}

buttonInsert.addEventListener('click', () => {
        
        if(!isVAlid()) {
            const greska = document.createElement('div')
            greska.innerHTML =`
            <p> PIB mora da bude osmocifreni broj! </p>
            <p>Polja ne smeju biti prazna! </p>
            <p> Vrednost mora biti broj!</p>
            
            `
            itemListe.appendChild(greska)

            setTimeout(() => {
                greska.remove()
            },1500)
            
            return
        }
        fakture.push({
            name: inputName.value,
            pib: InputPib.value,
            dateIssued: inputDate.value,
            value: inputValue.value,
            currency:"RSD",
            // timeStamp: ${(new Date()).getHours()} ,
            dateStamp: inputDate.value
           
        })
        console.log(fakture[fakture.length - 1])
        addElemToDOM(count)

        count++
})


                    

