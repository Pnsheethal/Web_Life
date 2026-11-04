console.log('hii');

var a = 'this is outside the block'  //*global scope
let b = 'this is let outside the block' //* script scope
const c = 'heyy' //*script scope

{
    var a='this is var inside the block'
    let b = 'this is let inside the block'
    const c= 'this is const inside'
}

