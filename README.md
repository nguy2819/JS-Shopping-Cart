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


### Shopping Cart Scope
- Looking at the example below, we learned that var global ="Hello" will be expanded and still exist in the another script tag
```
<body>
    <h1>Shoping cart</h1>
    <script>
      //Scope - determines where a variable or a value is visible

      var global ="Hello";
      function myFunction() {

      }
    </script>

    <script>
      console.log("Global"+global);
    </script>
    <div id="root"></div>
  </body>
```
> ![screen shot 2018-09-20 at 11 37 53 am](https://user-images.githubusercontent.com/36870689/45836314-b707f300-bcc9-11e8-8cda-3b85b3bca4b3.png)

- However, noticing this, if we add another var global = 10 right inside the second script tag, we will have a different result. We no longer have the result Global: Hello but we received Global: 10.
```
<body>
    <h1>Shoping cart</h1>
    <script>
      //Scope - determines where a variable or a value is visible

      var global ="Hello";
      function myFunction() {

      }
    </script>

    <script>
      var global = 10;
      console.log("Global"+global);
    </script>
    <div id="root"></div>
  </body>
```
> ![screen shot 2018-09-20 at 11 42 27 am](https://user-images.githubusercontent.com/36870689/45836521-50370980-bcca-11e8-9109-40bfd1926153.png)

- This is how SCOPE works, we will still get back Global: 10 (2 times), even we defined var global ="Hello" first and it should be visible throughout entire program. It will be something we need to learn more and recognize more when we work with JS SCOPE more. 
```
    <script>
      //Scope - determines where a variable or a value is visible

      var global ="Hello"; //this global variable should be visible throughout entire program
      function myFunction() {
        console.log("Global"+global);

      }
    </script>

    <script>
      var global = 10;
      console.log("Global"+global);
      myFunction();
    </script>
```
> ![screen shot 2018-09-20 at 11 52 43 am](https://user-images.githubusercontent.com/36870689/45837184-fb948e00-bccb-11e8-8ae1-a8fa081594f5.png)

- Let see what happened when we moved the var global ="Hello" inside the function. => Global is undefined
```
<script>
      //Scope - determines where a variable or a value is visible

      //var global ="Hello"; //this global variable should be visible throughout entire program
      function myFunction() {
        var global ="Hello"; 
        //this variable that we moved from outside function to inside. 
        //This variable is inside a codeblock- that will determine the scope of that variable. 
        //The scope is the curly braces {}
        console.log("Global"+global);
      }
      console.log("Global"+global);
    </script>
```
> ![screen shot 2018-09-20 at 12 02 10 pm](https://user-images.githubusercontent.com/36870689/45837672-0ef42900-bccd-11e8-8089-65e0e71d702f.png)

- So we tried to call myFunction() outside of the scope, and we got the Global: Hello; however, the 2nd console.log is undefined. It means that the variable global="Hello" does not exist outside of the scope {} or codeblock function. As a result, the 2nd console.log with that global - has nothing to do with the var global="Hello" inside the scope {}. They are totally seperate.
```
<script>
      //Scope - determines where a variable or a value is visible

      function myFunction() {
        var global ="Hello"; 
        console.log("Global: "+global);
      }
      myFunction();
      console.log("Global"+global);
    </script>
```
> ![screen shot 2018-09-20 at 1 38 37 pm](https://user-images.githubusercontent.com/36870689/45842612-75337880-bcda-11e8-82d8-4fd1d2fe6478.png)


- So what happened if we added another var global = 10 outside of the scope function?
> We can see that the var global = 10 is the variable of the entire program and we have var global ="Hello" is variable of the scope inside the function here. => The result is in the picture below, even they have the same name global, but they are totally seperate. 
```
<script>
      //Scope - determines where a variable or a value is visible
      var global = 10;

      function myFunction() {
        var global ="Hello"; 
        console.log("Global: "+global);
      }
      myFunction();
      console.log("Global: "+global);
    </script>
```
> ![screen shot 2018-09-20 at 1 45 41 pm](https://user-images.githubusercontent.com/36870689/45843082-cb54eb80-bcdb-11e8-825a-26ee083abac6.png)
