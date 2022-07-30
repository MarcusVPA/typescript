"use strict";
/*
Desafio 02: Como podemos melhorar o esse código usando TS?

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/
var Profession;
(function (Profession) {
    Profession[Profession["Atriz"] = 0] = "Atriz";
    Profession[Profession["Padeiro"] = 1] = "Padeiro";
})(Profession || (Profession = {}));
let person1 = {
    name: 'maria',
    age: 29,
    profession: Profession.Atriz
};
let person2 = {
    name: 'roberto',
    age: 19,
    profession: Profession.Padeiro
};
let person3 = {
    name: 'laura',
    age: 32,
    profession: Profession.Atriz
};
let person4 = {
    name: "carlos",
    age: 19,
    profession: Profession.Padeiro
};
