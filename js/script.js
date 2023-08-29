// array com valor dos salarios
const salarios = [500, 1000, 1700, 2000, 2300, 3000, 3500, 5000, 6000, 7500]

// array com condições no salarios
const salariosAlterados = salarios.slice().map((salario) => {
  if (salario <= 2000) {
    return salario * 1.15;  // Aumenta em 15% se o salário for menor ou igual a 2000
  } else {
    return salario * 1.1;   // Aumenta em 10% se o salário for maior que 2000
  }
})

// Exibindo os salários alterados
console.log(salariosAlterados)

// Filtrando salários maiores ou iguais a 2500
const salarios2500 = salariosAlterados.filter((salario) => {
  return salario >= 2500;
})

// Exibindo os salários maiores ou iguais a 2500
console.log(salarios2500)

// Somando os salários filtrados
const salariosSomados = salarios2500.reduce((preVal, curenVal) => preVal + curenVal, 0)

// Exibindo a soma dos salários
console.log(salariosSomados)
