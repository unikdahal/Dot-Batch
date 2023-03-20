let rectangle={
    length: 1,
    breadth: 2,

    draw: function(){
        console.log('Drawing Rectangle');
    }
}

function createRectangle(){
    return rectangle={
        length: 1,
        breadth: 2,
    
        draw: function(){
            console.log('Drawing Rectangle');
        }
    }
}

console.log(rectangle.draw());