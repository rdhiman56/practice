function AreaOfRectangle(l, w) {
    if(l <= 0){
        throw new Error("Length should be +ive value");
    }else if(w <= 0){
        throw new Error("Width should be +ive value")
    }
const area = l * w;
console.log('Area of Rectangle', area);
}
AreaOfRectangle(10, 5);
