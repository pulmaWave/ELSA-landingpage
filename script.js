// function validate data filled
function onCheckDataButtonClick() {
  const GET_ELEMENT_CHECKBOX1 = document.getElementById('mode1-checkbox')
  const GET_ELEMENT_CHECKBOX2 = document.getElementById('mode2-checkbox')

  const GET_ELEMENT_PAYMODE = document.getElementById('pay-mode')

  // get element notice fill invalid
  const GET_ELEMENT_NOTICE_NAME_VALID = document.getElementById('name-notice')
  const GET_ELEMENT_NOTICE_PHONE_VALID = document.getElementById('phone-notice')
  const GET_ELEMENT_NOTICE_MAIL_VALID = document.getElementById('mail-notice')

  // get element input text fill
  const GET_ELEMENT_INPUT_NAME_VALID = document.getElementById('name-input')
  const GET_ELEMENT_INPUT_PHONE_VALID = document.getElementById('phone-input')
  const GET_ELEMENT_INPUT_MAIL_VALID = document.getElementById('mail-input')

  if (GET_ELEMENT_INPUT_NAME_VALID.value.trim() === '') {
    GET_ELEMENT_NOTICE_NAME_VALID.style.display = 'block'
  } else {
    GET_ELEMENT_NOTICE_NAME_VALID.style.display = 'none'
  }

  if (GET_ELEMENT_INPUT_PHONE_VALID.value.trim() === '') {
    GET_ELEMENT_NOTICE_PHONE_VALID.style.display = 'block'
  } else {
    GET_ELEMENT_NOTICE_PHONE_VALID.style.display = 'none'
  }

  if (GET_ELEMENT_INPUT_MAIL_VALID.value.trim() === '') {
    GET_ELEMENT_NOTICE_MAIL_VALID.style.display = 'block'
  } else {
    GET_ELEMENT_NOTICE_MAIL_VALID.style.display = 'none'
  }

  if (GET_ELEMENT_CHECKBOX1.checked || GET_ELEMENT_CHECKBOX2.checked) {
    GET_ELEMENT_PAYMODE.style.display = 'none'
  } else if (
    GET_ELEMENT_CHECKBOX1.checked == false ||
    GET_ELEMENT_CHECKBOX2.checked == false
  ) {
    GET_ELEMENT_PAYMODE.style.display = 'block'
  }

  // fill information succeeded
  if (
    (GET_ELEMENT_CHECKBOX1.checked || GET_ELEMENT_CHECKBOX2.checked) &&
    GET_ELEMENT_INPUT_NAME_VALID.value.trim() !== '' &&
    GET_ELEMENT_INPUT_PHONE_VALID.value.trim() !== '' &&
    GET_ELEMENT_INPUT_MAIL_VALID.value.trim() !== '' &&
    onValidEmail(GET_ELEMENT_INPUT_MAIL_VALID.value)
  ) {
    // alert("Đăng ký thành công!")
    window.onload = fadeOut()
  } else if (!onValidEmail(GET_ELEMENT_INPUT_MAIL_VALID.value)) {
     GET_ELEMENT_NOTICE_MAIL_VALID.style.display = 'block'
  }
}

// click checkbox to remove the other one
function onRemoveChecked1() {
  const vElementCheckbox1 = document.getElementById('mode1-checkbox')
  if (vElementCheckbox1.checked) {
    vElementCheckbox1.checked = false
  }
}

// click checkbox to remove the other one
function onRemoveChecked2() {
  const vElementCheckbox2 = document.getElementById('mode2-checkbox')
  if (vElementCheckbox2.checked) {
    vElementCheckbox2.checked = false
  }
}

// add event listener checkbox to check
function onCheckboxListener() {
  const vElementCheckbox1 = document.getElementById('mode1-checkbox')
  const vElementCheckbox2 = document.getElementById('mode2-checkbox')

  const vPayOne = document.getElementById('pay-one')
  const vPayYear = document.getElementById('pay-year')

  const GET_ELEMENT_PAYMODE = document.getElementById('pay-mode')

  // show price study in 1 year
  vElementCheckbox1.addEventListener('click', function () {
    GET_ELEMENT_PAYMODE.style.display = 'none'
    vPayYear.style.display = 'block'
    vPayOne.style.display = 'none'
  })

  // show price study forever
  vElementCheckbox2.addEventListener('click', function () {
    GET_ELEMENT_PAYMODE.style.display = 'none'
    vPayOne.style.display = 'block'
    vPayYear.style.display = 'none'
  })
}

onCheckboxListener()

// add event listener are typing
function onTypingInput() {
  // get element notice fill invalid
  const GET_ELEMENT_NOTICE_NAME_VALID = document.getElementById('name-notice')
  const GET_ELEMENT_NOTICE_PHONE_VALID = document.getElementById('phone-notice')
  const GET_ELEMENT_NOTICE_MAIL_VALID = document.getElementById('mail-notice')

  // get element input text fill
  const GET_ELEMENT_INPUT_NAME_VALID = document.querySelector('#name-input')
  const GET_ELEMENT_INPUT_PHONE_VALID = document.querySelector('#phone-input')
  const GET_ELEMENT_INPUT_MAIL_VALID = document.querySelector('#mail-input')

  // add event listener are typing
  GET_ELEMENT_INPUT_NAME_VALID.addEventListener('input', function () {
    GET_ELEMENT_NOTICE_NAME_VALID.style.display = 'none'
  })
  GET_ELEMENT_INPUT_PHONE_VALID.addEventListener('input', function () {
    GET_ELEMENT_NOTICE_PHONE_VALID.style.display = 'none'
  })
  GET_ELEMENT_INPUT_MAIL_VALID.addEventListener('input', updateValue)
}

onTypingInput()

// update value input
function updateValue(e) {
  const GET_ELEMENT_NOTICE_MAIL_VALID = document.getElementById('mail-notice')

  if (onValidEmail(e.target.value)) {
    GET_ELEMENT_NOTICE_MAIL_VALID.style.display = 'none'
  }
}

//valid email
function onValidEmail(email) {
  const GET_ELEMENT_NOTICE_MAIL_VALID = document.getElementById('mail-notice')

  // GET_ELEMENT_NOTICE_MAIL_VALID.style.display = 'block'
  if (email.trim() === '') {
    // GET_ELEMENT_NOTICE_MAIL_VALID.style.display = 'block'
    GET_ELEMENT_NOTICE_MAIL_VALID.textContent = 'Bạn chưa nhập email!'
  } else {
    GET_ELEMENT_NOTICE_MAIL_VALID.textContent = 'Email chưa đúng định dạng!'
    // GET_ELEMENT_NOTICE_MAIL_VALID.style.display = 'block'
  }
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function loader() {
  //show notification message to presentation register succeeded
  document.querySelector('.loader-container').classList.remove('hidden')

  // hidden message
  setTimeout(() => {
    document.querySelector('.loader-container').classList.add('hidden')
  }, 3000)
}

function fadeOut() {
  loader()
}
