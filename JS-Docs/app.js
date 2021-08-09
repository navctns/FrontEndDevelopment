function update(obj){
	obj.c = 'c';
	return obj;
}

let alpha = {a:'a',b:'b',c:'d'};
console.log('alpha befor',alpha);
alpha = update(alpha);
console.log('alpha after',alpha);
