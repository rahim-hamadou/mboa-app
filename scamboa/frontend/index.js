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

// post to backend
const dataUser = {
	nom: "paul",
};

// recup name
const inputName = document.querySelector(".inputName");

// const check = function () {
// 	const userName = {
// 		nom: inputName.value,
// 	};
// 	console.log(userName);
// };
const addUser = (user) => {
	const userName = {
		nom: inputName.value,
	};
	// const userName = user.value;
	fetch("http://localhost:3000/users/adduser", {
		method: "POST",
		headers: { "Content-Type": "application/json" },

		body: JSON.stringify(userName),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log("userName:", userName);
			console.log("data:", data);
			window.location.reload();
		});
};

// update last
const updateUser = (user) => {
	const userName = {
		nom: inputName.value,
	};
	// const userName = user.value;
	fetch("http://localhost:3000/users/update/:position", {
		method: "UPDATE",
		headers: { "Content-Type": "application/json" },

		body: JSON.stringify(userName),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log("userName:", userName);
			console.log("data:", data);
			window.location.reload();
		});
};

// delete last one
const removeUser = () => {
	fetch("http://localhost:3000/users/deletelast", {
		method: "DELETE",
		headers: { "Content-Type": "application/json" },
	})
		.then((response) => response.json())
		.then((data) => {
			console.log("dataToErase:", data);
			window.location.reload();
		});
};
