import {Cliente} from "./Cliente.js";
import{ContaCorrente} from "./contas/ContaCorrente.js";
import { ContaPoupanca } from "./contas/ContaPoupanca.js";
import { ContaSalario } from "./contas/ContaSalario.js";


import{Gerente} from './funcionarios/Gerente.js'
import{Diretor} from './funcionarios/Diretor.js'
import{SistemaAutenticacao} from './SistemaAutenticacao.js'

const cliente1 = new Cliente('Valdisnei', 123456789, 11122233344); //nome, rg, cpf

const contaCorrente = new ContaCorrente(1001,cliente1); //agencia, cliente

const contaPoupanca = new ContaPoupanca(50, 1001, cliente1); // saldo, agencia, cliente

const contaSalario = new ContaSalario(1001, cliente1);


const diretor = new Diretor('valdisnei', 12345678900, 10000); //nome, cpf, salário
diretor.cadastrarSenha('123456');


const gerente = new Gerente('ieda', 98765432100, 5000);
gerente.cadastrarSenha('654321');


const diretorLogado= SistemaAutenticacao.login(diretor, '123456');
const gerenteLogado = SistemaAutenticacao.login(gerente, '654321')


