/**
 *
 * @param x {number}
 * @param y {type} number
 * @param z {type} number
 * @return {*}
 */
function add(x, y, z) {
    return x + y + z;
}

add(1, 2); // error

function add2(x, y, z) { // 若没有指定，则都是any类型，实际上已经提示了错误
    console.log(x, y, z);
}

add2(1, 2); // 参数是可选的
add2(1, 2, 3,  4); // error 但不能多传