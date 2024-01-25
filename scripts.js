const password = document.getElementById("password")

const length8 = document.getElementById("length8")
const oneNumber = document.getElementById("oneNumber")
const lowercaseLetter = document.getElementById("lowercaseLetter")
const specialSymbol = document.getElementById("specialSymbol")
const uppercaseLetter = document.getElementById("uppercaseLetter")

password.addEventListener("change", changeInput)

function changeInput() {
	if (password.value.length >= 8) {
		length8.classList.add("done")
		length8.textContent = `✅At least 8 characters length`
	} else {
		length8.classList.remove("done")
		length8.textContent = `• At least 8 characters length`
	}

	if (/\d/.test(password.value)) {
		oneNumber.classList.add("done")
		oneNumber.textContent = `✅At least 1 number (0..9)`
	} else {
		oneNumber.classList.remove("done")
		oneNumber.textContent = `• At least 1 number (0..9)`
	}

	if (/[a-z]/.test(password.value)) {
		lowercaseLetter.classList.add("done")
		lowercaseLetter.textContent = `✅At least 1 lowercase letter (a..z)`
	} else {
		lowercaseLetter.classList.remove("done")
		lowercaseLetter.textContent = `• At least 1 lowercase letter (a..z)`
	}

	if (/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
		specialSymbol.classList.add("done")
		specialSymbol.textContent = `✅At least 1 special symbol(!..$)`
	} else {
		specialSymbol.classList.remove("done")
		specialSymbol.textContent = `• At least 1 special symbol(!..$)`
	}

	if (/[A-Z]/.test(password.value)) {
		uppercaseLetter.classList.add("done")
		uppercaseLetter.textContent = `✅At least 1 uppercase letter (A..Z)`
	} else {
		uppercaseLetter.classList.remove("done")
		uppercaseLetter.textContent = `• At least 1 uppercase letter (A..Z)`
	}
}

const showPassword = document.getElementById("showPassword")

showPassword.addEventListener("click", function () {
	password.type = password.type === "password" ? "text" : "password"
})
