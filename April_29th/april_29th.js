function foo(n) {
    let a = 0;
    if(n == 0) {
        a = 2;
    } else {
        a = 2 * foo(n-1);
    }
    bar(a);
    return a;
}

function bar(m) {
    for(let i = m; i > 1; i /= 2);
}