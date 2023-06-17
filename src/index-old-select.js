import Cookies from 'js-cookie'

let selectOptions = [
  'Ledger Nano',
  'funds safety',
  'metal crypto wallet',
  'be your own bank',
  'BIP39',
  'Electrum',
  'bitcoin',
  'exchange',
  'hardware wallets',
  'BIP39 pdf',
  'BIP39 word list',
  'announcements',
  'guides',
  'hardware wallet',
  'Ledger',
  'Ledger Nano S Plus',
  'mnemonic phrase',
  'private key',
  'resources',
  'security',
  'seed phrase',
  'seed phrase backup',
  'seed phrase storage',
  'tips',
  'Trezor One',
  'updates',
  'wallet',
  'wallets'
]

const multiSelectOptions = [
  { text: 'announcements', active: false },
  { text: 'be your own bank', active: false },
  { text: 'BIP39', active: false },
  { text: 'BIP39 pdf', active: false },
  { text: 'BIP39 word list', active: false },
  { text: 'bitcoin', active: false },
  { text: 'Electrum', active: false },
  { text: 'exchange', active: false },
  { text: 'funds safety', active: false },
  { text: 'guides', active: false },
  { text: 'hardware wallet', active: false },
  { text: 'hardware wallets', active: false },
  { text: 'Ledger', active: false },
  { text: 'Ledger Nano', active: false },
  { text: 'Ledger Nano S Plus', active: false },
  { text: 'metal crypto wallet', active: false },
  { text: 'mnemonic phrase', active: false },
  { text: 'private key', active: false },
  { text: 'resources', active: false },
  { text: 'security', active: false },
  { text: 'seed phrase', active: false },
  { text: 'seed phrase backup', active: false },
  { text: 'seed phrase storage', active: false },
  { text: 'tips', active: false },
  { text: 'Trezor One', active: false },
  { text: 'updates', active: false },
  { text: 'wallet', active: false },
  { text: 'wallets', active: false }
]

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function updateSelectData(option) {
  const { text, active } = option

  multiSelectOptions.forEach((o) => {
    if (o.text === text) {
      o.active = !active
    }
  })
}

function updateSelectOptionList() {
  const optionListElement = document.querySelector('.C_MultiSelectOptionList')
  const selectInput = document.querySelector('.A_MultiSelectInput')

  optionListElement.innerHTML = ''

  multiSelectOptions.forEach((option) => {
    const { text, active } = option

    if (!active) {
      const listItem = document.createElement('div')
      listItem.classList.add('A_MultiSelectOptionListItem')
      listItem.innerText = text

      listItem.addEventListener('click', () => {
        updateSelectData(option)
        updateSelectOptionList()

        selectInput.appendChild(createChip(option))
      })

      optionListElement.appendChild(listItem)
    }
  })
}

function createChip(option) {
  const { text } = option
  const chipElement = document.createElement('div')
  const chipElementText = document.createElement('div')
  const chipElementButton = document.createElement('div')
  chipElement.classList.add('A_MultiSelectChip')
  chipElementText.classList.add('Q_MultiSelectChipText')
  chipElementButton.classList.add('Q_MultiSelectChipButton')

  chipElementText.innerText = text

  chipElementButton.addEventListener('click', () => {
    updateSelectData(option)
    updateSelectOptionList()
    chipElement.remove()
  })

  chipElement.appendChild(chipElementText)
  chipElement.appendChild(chipElementButton)

  return chipElement
}

function initMultiSelect() {
  const selectElement = document.querySelector('.O_MultiSelect')
  const selectInput = document.querySelector('.A_MultiSelectInput')
  const dropdownButton = document.querySelector('.A_MultiSelectDropdownButton')

  updateSelectOptionList()

  selectInput.addEventListener('focus', () => {
    selectElement.classList.add('focus')
  })

  dropdownButton.addEventListener('click', () => {
    selectElement.classList.toggle('focus')
  })

  document.body.addEventListener('click', (e) => {
    console.log('Click on Body', multiSelectOptions)

    if (
      !e.target.classList.contains('A_MultiSelectInput') &&
      !e.target.classList.contains('A_MultiSelectDropdownButton')
    ) {
      selectElement.classList.remove('focus')
    }
  })
}

function initSelect() {
  const selectElement = document.querySelector('.O_Select')
  const optionListElement = document.querySelector('.C_SelectOptionList')
  const selectInput = document.querySelector('.A_SelectInput')
  const dropdownButton = document.querySelector('.A_SelectDropdownButton')

  selectOptions = selectOptions.map((option) => {
    return capitalizeFirstLetter(option)
  })

  selectOptions.sort().forEach((option) => {
    const listItem = document.createElement('div')
    listItem.innerText = option
    listItem.classList.add('A_SelectOptionListItem')

    listItem.addEventListener('click', () => {
      const listItems = document.getElementsByClassName(
        'A_SelectOptionListItem'
      )

      for (let index = 0; index < listItems.length; index++) {
        const element = listItems[index]
        element.classList.remove('active')
      }

      listItem.classList.add('active')
      selectInput.value = option
    })

    optionListElement.appendChild(listItem)
  })

  selectInput.addEventListener('focus', () => {
    selectElement.classList.add('focus')
  })

  dropdownButton.addEventListener('click', () => {
    selectElement.classList.toggle('focus')
  })

  document.body.addEventListener('click', (e) => {
    console.log('Click on Body', e)

    if (
      !e.target.classList.contains('A_SelectInput') &&
      !e.target.classList.contains('A_SelectDropdownButton')
    ) {
      selectElement.classList.remove('focus')
    }
  })
}

function initModal() {
  const openButton = document.getElementById('openModal')
  const closeButton = document.getElementById('closeModal')
  const resetButton = document.getElementById('reset')
  const modal = document.querySelector('.modal')

  openButton.addEventListener('click', () => {
    console.log('open clicked')

    modal.classList.add('visible')
  })

  closeButton.addEventListener('click', () => {
    console.log('close clicked')

    modal.classList.remove('visible')
  })

  resetButton.addEventListener('click', () => {
    console.log('reset clicked')

    Cookies.remove('modal')
  })

  if (Cookies.get('modal') == undefined) {
    modal.classList.add('visible')
    Cookies.set('modal', true)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('index')) {
    initModal()
    initSelect()
    initMultiSelect()
  }
})
