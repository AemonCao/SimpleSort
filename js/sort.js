 $(document).ready(function() {
   // 随机数列的最大最小值 最大值务必大于最小值
   var ranmin = 1000;
   var ranmax = 50;

   var oldarr;

   // 数组背景颜色
   var colour = "129, 194, 214";

   $("#newRandom").click(function() {
     var num = $("#num").val();
     var div = $("#ranarr");

     oldarr = new Array();

     // 初始化数组的同时生产随机数列
     for (var i = 0; i < num; i++) {
       oldarr[i] = 0;
       oldarr[i] = parseInt(Math.random() * (ranmax - ranmin + 1) + ranmin);
     }

     // 打印数组
     printarr(oldarr, div);
   });

   $("#reverse_sort").click(function() {
     var div = $("#newarr");
     reverse_sort(oldarr);
     printarr(oldarr, div);
   });

   $("#bubble_sort").click(function() {
     var div = $("#newarr");
     bubble_sort(oldarr);
     printarr(oldarr, div);
   });

   $("#selection_sort").click(function() {
     var div = $("#newarr");
     selection_sort(oldarr);
     printarr(oldarr, div);
   });

   $("#insertion_sort").click(function() {
     var div = $("#newarr");
     insertion_sort(oldarr);
     printarr(oldarr, div);
   });


   //打印数组方法
   function printarr(arr, div) {
     var a;
     div.empty();
     for (var i = 0; i < arr.length; i++) {
       a = Math.round((1.0 / (ranmax - ranmin) * (arr[i] - ranmin)) * 100) / 100;
       div.append('<div class="arrlist" align="center" style="background: rgba(' + colour + ', ' + a + ')">' + arr[i] + '</div>');
     }
     return true;
   }

   //倒序
   function reverse_sort(arr) {
     var temp;
     for (var i = 0; i < (arr.length - 1) / 2; i++) {
       temp = arr[arr.length - 1 - i];
       arr[arr.length - 1 - i] = arr[i];
       arr[i] = temp;
     }
     return arr;
   }

   //冒泡排序
   function bubble_sort(arr) {
     var times = 0;
     var temp;
     console.time("冒泡排序");
     for (var i = 0; i < arr.length; i++) {
       for (var j = 0; j < arr.length - 1 - i; j++) {
         if (arr[j] > arr[j + 1]) {
           temp = arr[j];
           arr[j] = arr[j + 1];
           arr[j + 1] = temp;
           times++;
         }
       }
     }
     console.timeEnd("冒泡排序");
     console.log(times);
     return arr;
   }

   //选择排序
   function selection_sort(arr) {
     var times = 0;
     var minindex, temp
     console.time("选择排序");
     for (var i = 0; i < arr.length - 1; i++) {
       minindex = i;
       for (var j = i; j < arr.length; j++) {
         if (arr[j] < arr[minindex])
           minindex = j;
         times++;
       }
       temp = arr[i];
       arr[i] = arr[minindex];
       arr[minindex] = temp;
     }
     console.timeEnd("选择排序");
     console.log(times);
     return arr;
   }

   //插入排序
   function insertion_sort(arr) {
     var times = 0;
     console.time("插入排序");
     for (var i = 1; i < arr.length; i++) {
       var key = arr[i];
       var j = i - 1;
       while (j >= 0 && arr[j] > key) {
         arr[j + 1] = arr[j];
         j--;
         times++;
       }
       arr[j + 1] = key;
     }
     console.timeEnd("插入排序");
     console.log(times);
     return arr;
   }

   //希尔排序
   function shell_sort(arr) {

   }


 });