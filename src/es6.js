
var alunos = [
    { nome: "Erivelton", nota: 7.0 },
    { nome: "Maria", nota: 6.0 },
    { nome: "Joaquim", nota: 5.5 },
    { nome: "Ana", nota: 9.5 },
    { nome: "Fabio", nota: 2.5 }
];

function filtrarAlunosAprovados(alunos) {
    var alunosAprovados = [];   
    for (var i = 0; i < alunos.length; i++) {
      if (alunos[i].nota >= 6) {
        alunosAprovados.push(alunos[i]);
      }
    }   
    return alunosAprovados;
}   
  var alunosAprovados = filtrarAlunosAprovados(alunos);
  console.log(alunosAprovados);