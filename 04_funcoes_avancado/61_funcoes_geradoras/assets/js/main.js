//#region FUNÇÕES GERADORAS
//Lazy Evaluation: Uma função que entrega em partes o código, com pausas
/*
  Estrutura da função geradora:
    function* nomeFuncao(){ yield or return}
*/

/*
YIELD:
      Pode ser inserido diversas vezes dentro do escopo da função geradora;
      A primeira vez que é chamada a função, retorna o primeiro yield
*/
function* functionGenaration1(){
  const hiragana = 'んわらやまはなたさかありみひにちしきいるゆむふぬつすくうれめへねてせけえをろよもほのとそこお';
  const separateHiragana = hiragana;
  yield separateHiragana;

  const katakana = 'ンワラヤマハナタサカアリミヒニチシキイルユムフヌツスクウヱレメヘネテセケエヲロヨモホノトソコオ';
  const separateKatakana = katakana;
  yield separateKatakana;

  const concatHiraganaAndKatakana = separateHiragana.concat(separateKatakana);
  yield concatHiraganaAndKatakana;
}

console.log('-----Primera Chamada-----');
const first = functionGenaration1(); 
console.log(first.next().value);
console.log('');

console.log('-----Segunda Chamada-----');
console.log(first.next().value);
console.log('');

console.log('-----Terceira Chamada-----');
console.log(first.next().value);
console.log('');

console.log('-----Quarta Chamada - Finish-----');
console.log(first.next().value);
console.log('');

console.log('-----Iteração-----');
const forOf = functionGenaration1();
for(let vlr of forOf)
  console.log(`0 - ${vlr}`);
console.log('');


//GERADOR INFINITO = PERIGOSO
function* functionGenaration2(){
  let index = 0;
  while(true){
    yield index;
    index++;
  }
}

console.log('-----INFINTY-----');
const g2 = functionGenaration2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log('');

console.log('-----DELEGAR ESCOPO DE UMA FUNCAO PARA OUTRA-----');
function* functionGenaration3(){
  yield 0;
  yield 1;
  yield 2;
}

function* functionGenaration4(){
  yield* functionGenaration3(); //YIELD* Delega para função anterior
  yield 3;
  yield 4;
  yield 5;
}
const g4 = functionGenaration4();
for(let vlr of g4) { console.log(vlr); }
console.log('');

console.log('-----COM STRINGS-----');
function* functionGenaration5(){
  yield function(){
    console.log('yield 1');
  }

  /* 
  RETURN
    Quando add o return em função geradora, o código terimina no return, todo cód abaixo do return não é retornado
  */
  return function(){
    console.log('Return');
  }

  //Esse código não será executado
  yield function(){
    console.log('yield 2');
  }
}

const g5 = functionGenaration5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;

func1();
func2();
//func3();
//#endregion