fetch("https://api.chucknorris.io/jokes/random")
	.then((response) => response.json())
	.then((data) => {
		document.querySelector("#fact").textContent = data.value;
	});

const ulDb = document.querySelector("#liste");
const ulBack = document.querySelector("#listeBack");

// call route from db  backend
fetch("http://localhost:3000/users/db")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		let tab = data.allUsersDb;

		tab.map((element) => {
			let li = document.createElement("li");
			li.innerHTML = element.nom;
			ulDb.appendChild(li);
		});
	});

// call route from backend
fetch("http://localhost:3000/users")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		let tab = data.Users;

		tab.map((element) => {
			let li = document.createElement("li");
			li.innerHTML = element.nom;
			ulBack.appendChild(li);
		});
	});
