

// /
function base(req){
    return "Hello World";
}
// /search
function search(req){
    if(req.key){
        return `search: ${req.key}`;
    }
    return "Just search";
}
// /sky

function sky(req){
    Math.random().any();
    return "sky";
}

function router(req){
    if(req.url === "/"){
        return base(req);
    }
    if(req.url === "/search"){
        return search(req);
    }
    if(req.url === "/sky"){
        return sky(req);
    }
}

// function app(req){
// return logger(req, router);
// }

//let app = defaultErrorHandler(timer(logger2(router)));
let app = mySpecialHandler(timer(defaultErrorHandler(logger2(defaultErrorHandler(router)))));



function logger2(next){
    return function (req){
    console.log(`Logger: Calling route handler: ${req.url}`);
    return next(req);
    }
}

function timer(nextFn){
    return function (req){
        let time = Date.now();
        let result = nextFn(req); 
        console.log(` Timer: took: ${Date.now() - time}`);
        return result;
    }
    
}

function defaultErrorHandler(nextFn){
    return function(req){
        try{
            return nextFn(req)
        }
        catch(e){
            return `Opps Nothing to Worry!`
        }
    }
}

function mySpecialHandler(nextFn){
    return function(req){
        try{
            return nextFn(req)
        }
        catch(e){
            return `Opps! Something went Wrong!`
        }
    }
}

console.log(app({url: "/"}));
console.log(app({url: "/search", key: "value"}));
console.log(app({url: "/sky"}));

