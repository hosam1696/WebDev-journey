## MODERN DEVELOPMENT WORKFLOW

   * source contol tools
   * package management tools
   *  task runners 
   * test runners
   * continous integrations tools
   * scafolding tools


1. Git and Github
Source	control	systems	have	many	benefits.

    * First,	they	enable	multiple	developers	to	work	on a	source	file	without	any	work	being	overridden.

    * Second,	source	control	systems	are	also	a	good	way	of	keeping	previous	copies	of	a	file	or auditing	its	changes.	These	features	can	be	really	useful,	for	example,	when	trying	to	find	out when	a	new	bug	was	introduced	for	the	first	time.


2. package managment tools (*Bower,	npm,	and	tsd*)


3. Task Runner(*Gulp, Grint*)

### Optimizing	a	TypeScript	application 
When	we	compile	our	Typescript	code,	the	compiler	will	generate	a	JavaScript	file	for	each compiled	TypeScript	file.	If	we	run	the	application	in	a	web	browser,	these	files	won't	really be	useful	on	their	own	because	the	only	way	to	use	them	would	be	to	create	an	individual HTML	script	tag	for	each	one	of	them. 

Alternatively,	we	could	follow	two	different	approaches: We	could	use	a	tool,	
* such	as	the	RequireJS	library,	to	load	each	of	those	files	on	demand using	AJAX.	This	approach	is	known	as	asynchronous	module	loading.	To	follow	this approach,	we	will	need	to	change	the	configuration	of	the	TypeScript	compiler	to	use	the asynchronous	module	definition	(AMD)	notation.

* We	could	configure	the	TypeScript	compiler	to	use	the	CommonJS	module	notation	and use	a	tool,	such	as	Browserify,	to	trace	the	application's	modules	and	dependencies	and generate	a	highly	optimized	single	file,	which	will	contain	all	the	application's	modules. In	this	book,	we	will	use	the	CommonJS	method	because	it	is	highly	integrated	with Browserify	and	Gulp. 


4. Test Runners
A	test	runner	is	a	tool	that	allows	us	to	automate	the	execution	of	our	application's	unit	tests in `chapter 7`

**Unit	testing**	refers	to	the	practice	of	testing	certain	functions	and	areas	(units)	of	our	code. This	gives	us	the	ability	to	verify	that	our	functions	work	as	expected.	It	is	assumed	that	the reader	has	some	understanding	of	the	unit	test	process

We	can	use	a	test	runner	to	automatically	execute	our	application's	test	suites	in	multiple browsers	instead	of	having	to	manually	open	each	web	browser	in	order	to	execute	the	tests

5. Continuous	Integration	tools 

**Continuous	Integration	(CI)**	is	a	development	practice	that	helps	to	prevent	potential integration	issues.	Software	integration	issues	refers	to	the	difficulties	that	may	arise	during the	practice	of	combining	individually	tested	software	components	into	an	integrated	whole. Software	is	integrated	when	components	are	combined	into	subsystems	or	when	subsystems are	combined	into	products