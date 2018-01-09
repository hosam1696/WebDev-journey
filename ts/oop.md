## Object Oriented Programming in Typescript

* Namespaces (internal modules)
* External modules
* Asynchronous Module definition
* commonJs Module
* Es6 Module
* Browserify and Universal module definition (umd)
* circular dependincies


1. **Solid Principles**

    In	the	early	days	of	software	development,	developers	used	to	write	code	with	procedural programing	languages.	In	procedural	programming	languages,	the	programs	follow	a	top-tobottom	approach	and	the	logic	is	wrapped	with	functions. New	styles	of	computer	programming,	such	as	modular	programming	or	structured programming,	emerged	when	developers	realized	that	procedural	computer	programs	could not	provide	them	with	the	desired	level	of	abstraction,	maintainability,	and	reusability. The	development	community	created	a	series	of	recommended	practices	and	design	patterns to	improve	the	level	of	abstraction	and	reusability	of	procedural	programming	languages,	but some	of	these	guidelines	required	a	certain	level	of	expertise.	In	order	to	facilitate	adherence to	these	guidelines,	a	new	style	of	computer	programming	known	as	object-oriented programming	(OOP)	was	created.

    Developers	quickly	noticed	some	common	OOP	mistakes	and	came	up	with	five	rules	that every	OOP	developer	should	follow	to	create	a	system	that	is	easy	to	maintain	and	extend over	time.	These	five	rules	are	known	as	the	SOLID	principles.	SOLID	is	an	acronym introduced	by	Michael	Feathers,	which	stands	for	the	following	principles

    * **Single	responsibility	principle	(SRP)**:
    	This	principle	states	that	a	software	component (function,	class,	or	module)	should	focus	on	one	unique	task	(have	only	one responsibility).
    * **Open/closed	principle	(OCP)**:	
    This	principle	states	that	software	entities	should	be designed	with	application	growth	(new	code)	in	mind	(should	be	open	to	extension),	but the	application	growth	should	require	the	fewer	possible	number	of	changes	to	the existing	code	(be	closed	for	modification).
    * **Liskov	substitution	principle	(LSP)**:
    	This	principle	states	that	we	should	be	able	to replace	a	class	in	a	program	with	another	class	as	long	as	both	classes	implement	the same	interface.	After	replacing	the	class,	no	other	changes	should	be	required,	and	the program	should	continue	to	work	as	it	did	originally.
    * **Interface	segregation	principle	(ISP)**:
    	This	principle	states	that	we	should	split interfaces	that	are	very	large	(general-purpose	interfaces)	into	smaller	and	more	specific ones	(many	client-specific	interfaces)	so	that	clients	will	only	need	to	know	about	the methods	that	are	of	interest	to	them. Dependency	inversion	principle	(DIP):	This	principle	states	that	entities	sho

2. **Classes**

3. **Association, aggregation, and composition**

    * We	call	`association`	those	relationships	whose	objects	have	an	independent	lifecycle	and where	there	is	no	ownership	between	the	objects.	Let's	take	an	example	of	a	teacher	and student.	Multiple	students	can	associate	with	a	single	teacher,	and	a	single	student	can	associate with	multiple	teachers,	but	both	have	their	own	lifecycles	(both	can	be	create	and	delete independently);	so	when	a	teacher	leaves	the	school,	we	don't	need	to	delete	any	students,	and when	a	student	leaves	the	school,	we	don't	need	to	delete	any	teachers.

    * We	call	`aggregation`	those	relationships	whose	objects	have	an	independent	lifecycle,	but there	is	ownership,	and	child	objects	cannot	belong	to	another	parent	object.	Let's	take	an example	of	a	cell	phone	and	a	cell	phone	battery.	A	single	battery	can	belong	to	a	phone,	but	if the	phone	stops	working,	and	we	delete	it	from	our	database,	the	phone	battery	will	not	be deleted	because	it	may	still	be	functional.	So	in	aggregation,	while	there	is	ownership,	objects have	their	own	lifecycle.

    * We	use	the	term	`composition`	to	refer	to	relationships	whose	objects	don't	have	an independent	lifecycle,	and	if	the	parent	object	is	deleted,	all	child	objects	will	also	be	deleted. Let's	take	an	example	of	the	relationship	between	questions	and	answers.	Single	questions	can have	multiple	answers,	and	answers	cannot	belong	to	multiple	questions.	If	we	delete questions,	answers	will	automatically	be	deleted

4. **Inheritance**

One	of	the	most	fundamental	object-oriented	programming	features	is	its	capability	to	extend existing	classe
5. **Mixins**

6. **Generic Classes**

7. **Generic Constrains**

8. **Interfaces**

The	feature	that	we	will	miss	the	most	when	developing	large-scale	web	applications	with JavaScript	is	probably	interface

in *OOP* we can say that a calss can extends another class and implement one or more interfaces

In	object-oriented	languages,	the	term	interface	is	often	used	to	define	an	abstract	type that	contains	no	data	or	code,	but	defines	behaviors	as	method	signatures.