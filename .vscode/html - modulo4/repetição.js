


let valores = [8,1,7,4,2,9]
x=0
while(x<valores.length){
    console.log( valores[x])
    x+=1
}

console.log('a lista tem '+ valores.length +'numeros')
valores.sort()

console.log ('no formato for em ordem alfabética : ')
for (let x=0;x<valores.length;x++)
{console.log(valores[x])}

for (y in valores)
{console.log(' a posição '+ y+ ' tem o número '+ valores[y])}

console.log('para achar a posição de um numero usar: valores.indexOf(7)')
console.log('o valor 7 está na posição :'+valores.indexOf(7))

console.log?('se o valor n for encontrado ele dará a posição -1')

if(valores.indexOf(6)==-1)
console.log('o valor não foi encontrado')


