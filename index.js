class Polygon{
    constructor(sides = []){
        this.sides = sides;
    }
    get countSides(){
        return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((total, side) => total + side);
    }
}
class Triangle extends Polygon{
    get isValid(){
        if(this.countSides === 3){
            const side1 = this.sides[0];
            const side2 = this.sides[1];
            const side3 = this.sides[2];
            if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
                return true;
            }
        }
        return false;
    }
}
class Square extends Polygon{
    get isValid(){
        if(this.countSides === 4){
            const side1 = this.sides[0];
            const side2 = this.sides[1];
            const side3 = this.sides[2];
            const side4 = this.sides[3];
            if(side1 === side2 && side1 === side3 && side1 === side4){
                return true;
            }
        }
        return false;
    }
    get area(){
        if(this.isValid){
            return this.sides[0] ** 2;
        }
    }
}