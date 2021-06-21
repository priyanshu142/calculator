/*  function show() {
	let val = document.getElementById('input')
	let k = (val.innerHTML = val.value)
	val.appendChild(k)
} */
let i = 0,
	t = 0,
	c = 0
let symb
function show(a) {
	let val = document.getElementById('input')
	val.textContent += a
	num(a)
}
function num(a) {
	/* console.log('x') */
	if (a == '.') {
		clear()
	}
	if (i <= 1) {
		if (a == '+' || a == '-' || a == '*' || a == '/') {
			symb = a
			i = i + 1
		} else if (a == '=') {
			t = res(symb, t, c)
			i = 0
			c = 0
			console.log(t)
		} else if (i == 0) {
			t = a + t * 10
		} else if (i == 1) {
			c = a + c * 10
		}
	}
}
function res(symb, t, c) {
	if (symb == '+') {
		ad = add(t, c)
		return ad
	} else if (symb == '-') {
		su = sub(t, c)
		return su
	} else if (symb == '*') {
		mu = mult(t, c)
		return mu
	} else if (symb == '/') {
		di = div(t, c)
		return di
	}
}
function add(t, c) {
	let m = t + c
	let val = document.getElementById('input')
	val.innerHTML = ''
	val.textContent += m
	return m
}
function sub(t, c) {
	let m = t - c
	let val = document.getElementById('input')
	val.innerHTML = ''
	val.textContent += m
	return m
}
function mult(t, c) {
	let m = t * c
	let val = document.getElementById('input')
	val.innerHTML = ''
	val.textContent += m
	return m
}
function div(t, c) {
	let m = t / c
	let val = document.getElementById('input')
	val.innerHTML = ''
	val.textContent += m
	return m
}

function clear() {
	location.reload()
}
