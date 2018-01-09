the typescript runtime `Javascript` has a concurrency model based on an **event loop** this model is quite different to th other modeils in languages such as C and Java

* some important runtime concepts `heap`, `stack`, `queue` and `frame`

**frame** is a sequential unit of work in the preciding diagram the frames are represented by the blocks inside the stack

**Stack** contains the sequential steps taht a message needs to execute a *stack* is a simple data structure that represents last in first out `LIFO` therefore when aa frame is aadded to the stack it is alwasys added to the top of the stack

**Queue** contains a list of messages waiting to be processed each message is accosited with a function *Queue* is a simple data structure that represents first in first out `FIFO`

**Heap** is a memory container taht is not aware of the order of the items stored on it the heap contains all the variables and objects currently in use


### The Event Loop

Concurrency is the ability for two or more operations to be executed simultaously the runtime execution takes place on one single thread


### Call, Apply an Bind Methods

All funtions inherits the call, apply and Bind methods from Function.prototype we can use these methods to set the value of *this* operator when it's used inside the body of the function

the *call* and *apply* methods are almost identical both methods allow us to invoke a function and set the value of *this* inside the function

**bind** The	bind	method	can	be	used	to	set	the	value	of	the	this	operator	(within	a	function) regardless	of	how	it	is	invoke

### Closures

are	one	of	the	most	powerful	features	available	at	runtime,	but	they	are	also	one	of the	most	misunderstood.	The	Mozilla	developer	network	defines	closures	as	follows: 
> Closures	are	functions	that	refer	to	independent	(free)	variables.	In	other	words,	the function	defined	in	the	closure	'remembers'	the	environment	in	which	it	was	created.