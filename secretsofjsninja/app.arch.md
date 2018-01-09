* The	single-page	web	application	architecture 
* The	MV*	architecture Models	and	collections 
* Item	views	and	collection views 
* Controllers 
* Events 
* Router	and	hash	navigation 
* Mediator 
* Client-side	rendering	and	virtual	DOM 
* Data	binding	and	data	flow 
* The	web	component	and	shadow	DOM 
* Choosing	an	MV*	framework


An	SPA	is	a	web	application	in	which	all	the	resources	(HTML,	CSS,	JavaScript,	and	so	on) are	either	loaded	in	one	single	request,	or	loaded	dynamically	without	fully	reloading	the page.	We	use	the	term	single-page	to	refer	to	this	kind	of	application	because	the	web	page	is never	fully	reloaded	after	the	initial	page	load

## The MV* Architecture

As	a	result,	developers	have	started	using	in	the	frontend	some	of	the	design	patterns	that	have been	used	with	success	in	the	backend	over	the	last	decade.	Among	those,	we	can	highlight	the Model-View-Controller	(MVC)	design	pattern	and	some	of	its	derivative	versions,	such	as Model-View-ViewModel	(MVVM)	and	Model-View-Presenter	(MVP).

 Developers	around	the	world	started	to	share	some	SPA	frameworks	that	somehow	try	to implement	the	MVC	design	pattern	but	do	not	necessarily	follow	the	MVC	pattern	strictly.	The majority	of	these	frameworks	implement	Models	and	Views,	but	since	not	all	of	them implement	Controllers,	we	refers	to	this	family	of	frameworks	as	MV*.

 