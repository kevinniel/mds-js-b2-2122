console.log('toto');

let toto = 3;
console.log(toto);

console.log("5 / 3");
console.log(5 / 3);

console.log("5 % 3");
console.log(5 % 3);

console.log("2 puissance 3");
console.log(2**3);

let datas = {
	"name": "Yavin IV",
	"rotation_period": "24",
	"orbital_period": "4818",
	"diameter": "10200",
	"climate": "temperate, tropical",
	"gravity": "1 standard",
	"terrain": "jungle, rainforests",
	"surface_water": "8",
	"population": "1000",
	"residents": [
        1,
        2,
        3,
        [
            "a",
            "b",
            "c",
            "d",
        ]
    ],
	"films": [
		"https://swapi.dev/api/films/1/"
	],
	"created": "2014-12-10T11:37:19.144000Z",
	"edited": "2014-12-20T20:58:18.421000Z",
	"url": "https://swapi.dev/api/planets/3/"
}


console.log("datas.surface_water");
console.log(datas.surface_water);

console.log("datas");
console.log(datas);

console.log("datas.residents");
console.log(datas.residents);


console.log("datas.residents[3]");
console.log(datas.residents[3]);

console.log("datas.residents[3][2]");
console.log(datas.residents[3][2]);

let datas = {
	"name": "Yavin IV",
	"rotation_period": "24",
	"surface_water": "8",
	"population": "1000",
	"residents": [
        1,
        2,
        3,
        [
            "a",
            "b",
            {
                a: ["a", "z", "e"], // affichage du "z"
                b: {
                    c: "4",
                    z: 5
                }
            },
            "d",
        ]
    ]
}

console.log("datas");
console.log(datas);

console.log("datas.residents");
console.log(datas.residents);

console.log("datas.residents[3]");
console.log(datas.residents[3]);

console.log("datas.residents[3][2]");
console.log(datas.residents[3][2]);

console.log("datas.residents[3][2].a");
console.log(datas.residents[3][2].a);

console.log("datas.residents[3][2].a[1]");
console.log(datas.residents[3][2].a[1]);