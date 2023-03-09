// console.log('loaded');
class Rectangle {
    constructor(width, height) {
        this.ht = height;
        this.w = width;
    }
    // Method to get the area
    getArea() {
        let area = this.ht * this.w;
        return area;
    }
}
function printDetails(rect) {
    console.log(rect);
    console.log(`The height is ${rect.ht}`);
    console.log(`The width is ${rect.w}`);
}
let myRectangle = new Rectangle(100, 100);
let myRectangle2 = new Rectangle(123400, 1010);
let myRectangle3 = new Rectangle(100, 133300);
let myRectangle4 = new Rectangle(1030, 10033);
let myRectangle5 = new Rectangle(10, 1200);
// printDetails(myRectangle);
// printDetails(myRectangle2);
// printDetails(myRectangle3);
// printDetails(myRectangle4);
// printDetails(myRectangle5);
// Get the area
console.log(`The area is ${myRectangle.getArea()}`);
console.log(`The area is ${myRectangle2.getArea()}`);
console.log(`The area is ${myRectangle3.getArea()}`);
console.log(`The area is ${myRectangle4.getArea()}`);
console.log(`The area is ${myRectangle5.getArea()}`);