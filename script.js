class Passward {
	constructor(password) {
		this.password = password;
	}
	isStrong() {
		if (this.password.length >= 8) {
			return true;
		}
		return false;
	}
	isContainNumber() {
		const regex = /\d/;
		return regex.test(this.password);
	}
	isContainUpperCase() {
		const regex = /[A-Z]/;
		return regex.test(this.password);
	}
	isContainLowerCase() {
		const regex = /[a-z]/;
		return regex.test(this.password);
	}
	isContainSpecialCharacter() {
		const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
		return regex.test(this.password);
	}
}

p = new Passward(prompt("Set your password"));

if (
	(p.isStrong() == false,
	p.isContainLowerCase() == false,
	p.isContainUpperCase() == false,
	p.isContainLowerCase() == false,
	p.isContainSpecialCharacter() == false)
) {
	console.log("Password is weak");
} else {
	console.log("Thwe PAssword Is strong now");
}

console.log(p.isStrong());
console.log(p.isContainNumber());
console.log(p.isContainUpperCase());
console.log(p.isContainLowerCase());
console.log(p.isContainSpecialCharacter());
