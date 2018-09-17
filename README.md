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
