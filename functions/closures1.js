/*
    CLOSURES:
     are important for a varity of reasons
     1: it's both a feature and philosophy that once understood make many other concepts [data binding, asynchronous programming, promise Objects] in JS easier
     2: they are of the most powerful componnet of the language 
     3: when used correctly they afford developer a mechanism to make their code more expressive, compact and reusable

     in most basic case a closure is simply an outer function that returns an inner function doing this creates a  mechanism to return an enclosed scope on demand 

*/


/*
    why we use closure?
    1: Object factory

    function x() {
        return (function() {
            return {
                ...
            }
        })()
    }
    2: Binding Proxy
    function y(cb) {
        return function() {
            return cb.apply(selfm arguments)
        }
    }
    3: Aware Dom Manipulation

    4: singleston Module Pattern
    (function(){
        let x = function(){}
        let y = function(){}
        return {
            x,
            y
        }
    })()
*/