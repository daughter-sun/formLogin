// یک فرم لاگین پیاده سازی کنید که از 2 اینپوت و 1 دکمه تشکیل شده باشد
// و به محض کلیک بر روی دکمه فرم ولیوی اینپوت ها بررسی شوند و اکر با محدودیت های لازم مطابقت نداشتند
// به کاربر پیغام خطا 
// نمایش دهید
// و در غیر اینصورت پیغام مناسبی را نمایش دهید 
// اینپوت یوزرنیم حداقل باید 12 کاراکتر و اینپوت پسورد باید حداقل 8 کاراکتر داشته باشد 

let inputUsername = document.getElementById('username')
let textWarningUsername = document.getElementById('WarningUsername')
let inputPassword = document.getElementById('password')
let textWarningPass = document.getElementById('WarningPass')

function usernameValidation() {
    if (inputUsername.value.length < 12) {
        textWarningUsername.innerHTML = 'Must Contain 12 Characters (Min)'
        textWarningUsername.style.color = 'red'
        textWarningUsername.style.display = 'block'
    } else {
        textWarningUsername.innerHTML = 'Correct username Value'
        textWarningUsername.style.color = 'green'
        textWarningUsername.style.display = 'block'
    }
}

function passwordValidation() {
    if (inputPassword.value.length < 8) {
        textWarningPass.innerHTML = 'Must Be 8 Characters (Min)'
        textWarningPass.style.color = 'red'
        textWarningPass.style.display = 'block'
    } else {
        textWarningPass.innerHTML = 'Correct Password Value'
        textWarningPass.style.color = 'green'
        textWarningPass.style.display = 'block'
    }
}