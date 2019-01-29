	var elevi = [];
	var elevIdx = -1;

	class Elev {
		constructor(fullName) {
			this.nume = fullName;
			this.note = [];
		}
		get medie() {
			var sum = 0;
			for (var i = 0; i < this.note.length; i++) {
				sum += parseInt(this.note[i], 10); 
			}

			var avg = sum / this.note.length;
			if (isNaN(avg)) {
				return "";
			}
			return avg.toFixed(1);
		}
	}

	function vizibil(id) {
		const e = elevi[id];
		elevIdx = id;

		document.getElementById("nume_elev").innerHTML = e.nume;
		document.querySelector("#note_elev_wrapper").classList.add("visible");
		let str = "";

		for (let i = 0; i < e.note.length; i++) {
			str += `<tr>
					<td>${e.note[i]}<td>
				</tr>`
		}
		document.getElementById("catalog").innerHTML = str;
	};

	function invizibil() {
		document.querySelector("#note_elev_wrapper").classList.remove("visible");
	}

	function deseneazaTabel() {
		let str = "";
		for (var i = 0; i < elevi.length; i++) {
			str += `
               	<tr>
                   	<td >${elevi[i].nume}</td>
                   	<td >${elevi[i].medie}</td>
                   	<td>
                       	<button onclick="vizibil(${i})">Vezi notele</button>
                   	</td>
               	</tr>`
		}
		document.querySelector("table tbody").innerHTML = str;
	}

	function adauga(m, event) {
		event.preventDefault();
		let elev = new Elev(m.querySelector("input[name]").value);

		elevi.push(elev);
		deseneazaTabel();
	}

	function adaugaNota(s, event) {
		event.preventDefault();

		let input = document.querySelector("#form_elev input[name]");
		const e = elevi[elevIdx];
		e.note.push(input.value)
		vizibil(elevIdx);
		deseneazaTabel();
	}

	function deseneazaCatalog(id) {
		let str = "";
		for (let i = 0; i < catalog.length; i++) {
			str += `<tr>
                   	<td>${catalog[i].nota_elev}<td>
               	</tr>`
		}
		document.getElementById("catalog").innerHTML = str;
		document.getElementById("medie").innerHTML = str;
	}

	function sortare1 () {
		elevi[elevIdx].note.sort(function(a,b) {
			if (a> b){
				return 1;
			}
			if (a< b){
				return -1;
			}
		return 0;
		});
		console.log(elevi[elevIdx].note);
		vizibil(elevIdx);
	}

	function sortare2 () {
		elevi[elevIdx].note.sort(function(a,b) {
			if (a< b){
				return 1;
			}
			if (a> b){
				return -1;
			}
		return 0;
		});
		console.log(elevi[elevIdx].note);
		vizibil(elevIdx);
	}

	function sortare3 () {
		elevi.sort(function(a,b) {
			if (a.medie> b.medie){
				return 1;
			}
			if (a.medie< b.medie){
				return -1;
			}
		return 0;
		});
		console.log(elevi);
		deseneazaTabel();
	}

	function sortare4 () {
		elevi.sort(function(a,b) {
			if (a.medie < b.medie){
				return 1;
			}
			if (a.medie > b.medie){
				return -1;
			}
		return 0;
		});
		console.log(elevi);
		deseneazaTabel();
	}

