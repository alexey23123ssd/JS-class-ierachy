class Figure{

  set perimetr(value){
  this._perimetr = value
  }
  get perimetr(){
  return this._perimetr 
  }
  
  set square(value){
  this._square = value
  }
  get square(){
  return this._square 
  }
    
  calculateSquare(){
  }
  
  calculatePerimetr(){
  }
  
  }
  
  class Triangle extends Figure{
   #firstSide;
   #secondSide;
   #thirdSide;
   constructor(firstSide,secondSide,thirdSide){
     super()
    if(firstSide<=0 || secondSide<=0 || thirdSide<=0){
       throw new Error("Стороны треугольника не могут быть меньше нуля")
     }
    if(firstSide > secondSide + thirdSide || secondSide > firstSide + thirdSide || thirdSide > firstSide + secondSide){
       throw new Error("Сторона не треугольника не может быть больше суммы двух других сторон")
  } 
   
   this.firstSide = firstSide 
   this.secondSide = secondSide
   this.thirdSide = thirdSide
   }
    
    calculateSquare(firstSide,secondSide,thirdSide){
      super.calculateSquare()
      let halfPerimetr = (firstSide + secondSide + thirdSide)/2
      this._square = Math.sqrt(halfPerimetr * (halfPerimetr - firstSide) * (halfPerimetr - secondSide) * (halfPerimetr - thirdSide))
      let answer = Number(this._square.toFixed(2))
      return answer;
    }
    
    calculatePerimetr(firstSide,secondSide,thirdSide){
     this._perimetr = firstSide + secondSide + thirdSide
     let answer = Number(this._perimetr.toFixed(2))
     return answer;
  }
  }
  
  let tri = new Triangle(5,7,9)
  
  let perimetr = tri.calculatePerimetr(tri.firstSide,tri.secondSide,tri.thirdSide)
  
  let square = tri.calculateSquare(tri.firstSide,tri.secondSide,tri.thirdSide)
  
  //alert(tri instanceof Figure)
  //alert(tri instanceof Triangle)
  
  class Circle extends Figure{
   #radius;
  constructor(radius){
  super()
  if(radius<=0){
    throw new Error("Радиус не может быть меньше нуля")
  }
   this.radius = radius
  }
    calculateSquare(radius){
     let square = 2 * 3.14 * radius
      return square
   } 
  }  
  
  let circle = new Circle(10);
  let a = circle.calculateSquare(circle.radius)