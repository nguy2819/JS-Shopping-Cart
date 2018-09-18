# JS Shopping Cart

### Array Basics 
- Simple teaching-learning about Basics of Array and play with it directly on index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
  </head>
  <body>
    <h1>Shoping cart</h1>
    <script>
        var array = ["Apple", "Banana", "Coconut"];
        console.log(array); //getting a full array 
        console.log(array[0]); //getting the 1st element in the array - which is Apple
        console.log(array[1]); //getting the 2nd element in the array - which is Banana
        console.log(array.length); //count how many elements in the array - which is 3
        array.push("Durian"); //added another element in the array - named Durian
        console.log(array); // getting a full array after adding another new element - which is the array includes ["Apple", "Banana", "Coconut", "Durian"]
        console.log(array.length); //count how many elements now in the array - which is 4
    </script>
  </body>
```
> ![screen shot 2018-09-17 at 1 47 56 pm](https://user-images.githubusercontent.com/36870689/45646387-62256c00-ba80-11e8-9900-56dbb3c48281.png)

- Using "for loop" - we don't have to worry about typing console.log(array) to check if it's added a new element or nor
```
    <script>
        var array = ["Apple", "Banana", "Coconut"];
        array.push ("Durian");
        for (var i = 0; i < array.length; i++) {
          console.log(array[i]);
        }
    </script>
```
> ![screen shot 2018-09-17 at 2 25 22 pm](https://user-images.githubusercontent.com/36870689/45648391-b0893980-ba85-11e8-96b4-5cb4ebec59e3.png)

### Object Basics
- name, cost, count are KEYS - it can be a string too like "name", "cost", "count"
```
var obj = {name: "Apple", cost: 1.99, count: 2};
        console.log(obj.name);
        console.log(obj.cost);

        for (var key in obj) {
          console.log(key+ " "+obj[key]);
        }

        var array = ["A", "B", "C"];

        for (var key in array) {
          console.log(key+ " "+array[key]);
        }
```
> ![screen shot 2018-09-18 at 9 44 51 am](https://user-images.githubusercontent.com/36870689/45699599-89834400-bb27-11e8-934e-00c514ea484b.png)

### Arrays and Objects
- We can see in the cart, there is only 1 object (as the first index, which is index 0). When we as for the 2nd index, which is index 1, it will be undefined because there is no 2nd object as 2nd index. 
```
    <script>
       var cart = [];

       var item = {name: "Apple", cost: 1.99, count: 3};

       cart.push(item);

       console.log(cart); // [Object] > 0: Object
       console.log(cart[0]); // {name: "Apple", cost: 1.99, count: 3}
       console.log(cart[0].name); //Apple
       console.log(cart[0].cost); //1.99

       console.log(cart[1]); //undefined
       console.log(cart[1].name); //uncaught / undefined
       console.log(cart[0].price); //undefine
    </script>
```
> ![screen shot 2018-09-18 at 10 58 11 am](https://user-images.githubusercontent.com/36870689/45703569-f8659a80-bb31-11e8-81de-ab540d06e4e6.png)

### Shopping Cart Functions
- message and count are parameters/ argument variables (so message will be parameter number 1 and count is parameter number 2)
- Hello World will be value number 1 and 1 will be value number 2 => Say Hello World - 1 time
- Hello Flowers is value number 1 and 2 is value number 2 => Say Hello Flowers - 2 times
- Hello Beautiful Earth is value number 1 and 5 is value number 2 => Say Hello Beautiful Earth - 5 times
```
    <script>
       function myFunction(message, count){
         for (var i = 0; i < count; i++) {
           console.log(message);
         }
       }

       myFunction("Hello World", 1);
       myFunction("Hello Flowers", 2);
       myFunction("Hello Beautiful Earth", 5);
       myFunction("Hello Wonderful Life", 3);

       function square(num){
         return num * num;
       }

       console.log(square(4));
    </script>
```
> ![screen shot 2018-09-18 at 1 55 45 pm](https://user-images.githubusercontent.com/36870689/45713032-2c00ee80-bb4b-11e8-8d4f-dd60a95fda17.png)
