function max(x,y)
{
    if(x>y)
        return x;
    else
        return y;
}

function maxOfThree(x,y,z) 
{
    return x>y?
        (x>z?x:z):
        (y>z)?y:z;    
       
}

function isVowel(s)
{
   if(s.length==1)
   {
        return /[aeiouAEIOU]/.test(s);    
   }
}

function sum(nums)
{
    var total=0;
   for(let i=0;i<nums.length;i++)
   {
        total+=nums[i];
   }
   return total;
}

function sumAlt(nums)
{
   nums=nums.reduce(function(total,element) 
    {
        return element+total;
    },0);
    return nums;
}

function multiply(nums)
{
    var output=1;
   for(let i=0;i<nums.length;i++)
   {
        output*=nums[i];
   }
   return output;
}

function multiplyAlt(nums)
{
    nums=nums.reduce(function(total,element) 
    {
        return element*total;
    },1);
    return nums;
}


function reverse(s)
{ 
    let output="";
    for(let i=s.length-1;i>=0;i--)
    {
        output+=s.charAt(i);
    }
    return output;
}


function reverseAlt(s)
{
    var chars= s.split('');    
    var reversed=chars.reduce((previousValue, currentValue,currentIndex) => 
    { 
         return previousValue+chars[s.length-1-currentIndex];
    },"");
    return reversed;
}

function findLongestWord(words)
{
    let longestWord="";
    for(let i=0;i<words.length;i++)
    {
        if(words[i].length>longestWord.length)
                longestWord=words[i];
    }
    return longestWord;
}

function filterLongWords(words,i)
{
    let filteredWords= new Array();
    let x=0;
    for(let k=0;k<words.length;k++)
    {
        if(words[k].length>i)
        {
            filteredWords[x]=words[k];       
            x=x+1;
        }
    }

    return filteredWords;  
}

function filterLongWordsAlt(words,n)
{
    words=words.filter(function(element,i,array)
    {
        return element.length>n;
    });

    return words;  
}

function myFunctionTest(expectedVal, testfn)
{
   if(JSON.stringify(testfn())==JSON.stringify(expectedVal))
        return "TEST SUCCEEDED";
    else
        return "TEST FAILED. Expected "+JSON.stringify(testfn())+" found "+ JSON.stringify(testfn());
}


const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem *10
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
  return elem == 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);



//console.log(max(7,3));
//console.log(maxOfThree(1,2,5));
//console.log(isVowel('A'));
//console.log(sum([1,2,3,4]));
//console.log(multiply([1,2,3,4]));
//console.log(reverse("test data"));
//console.log(findLongestWord(["apple","orange","bee","hon"]));
//console.log(filterLongWords(["apple","orange","bee","hon"],4));
//console.log(sumEff([1,2,3,4,5]));
//console.log(multiplyEff([1,2,3,4,5]));
//console.log(filterLongWordsAlt(["apple","orange","bee","hon"],4));
//console.log(reverse("test data"));


console.log("Expected output of max(20,10) is 20 and  " +
   myFunctionTest(20, function(){return max( 20, 10);} )); 

console.log("Expected output of maxOfThree(1,2,5) is 5 and  " +
   myFunctionTest(5, function(){return maxOfThree(1,2,5);} )); 

console.log("Expected output of isVowel('A') is true and  " +
   myFunctionTest(true, function(){return isVowel('A');} )); 

console.log("Expected output of sum([1,2,3,4]) is 10 and  " +
   myFunctionTest(10, function(){return sum([1,2,3,4]);} )); 

console.log("Expected output of sumAlt([1,2,3,4]) is 10 and  " +
   myFunctionTest(10, function(){return sumAlt([1,2,3,4]);} )); 

console.log("Expected output of multiply([1,2,3,4]) is 24 and  " +
   myFunctionTest(24, function(){return multiply([1,2,3,4]);} )); 

console.log("Expected output of multiplyAlt([1,2,3,4]) is 24 and  " +
   myFunctionTest(24, function(){return multiplyAlt([1,2,3,4]);} )); 

console.log("Expected output of reverse(\"test data\") is (\"atad tset\") and  " +
   myFunctionTest("atad tset", function(){return reverse("test data");} )); 

console.log("Expected output of reverseAlt(\"test data\") is (\"atad tset\") and  " +
   myFunctionTest("atad tset", function(){return reverseAlt("test data");} )); 

console.log("Expected output of findLongestWord([\"apple\",\"orange\",\"bee\",\"hon\"]) is \"orange\" and  " +
   myFunctionTest("orange", function(){return findLongestWord(["apple","orange","bee","hon"]);} )); 

console.log("Expected output of filterLongWords([\"apple\",\"orange\",\"bee\",\"hon\"],4) is [\"apple\",\"orange\"]] and  " +
   myFunctionTest(["apple","orange"], function(){return filterLongWords(["apple","orange","bee","hon"],4);} )); 

console.log("Expected output of filterLongWordsAlt([\"apple\",\"orange\",\"bee\",\"hon\"],4) is [\"apple\",\"orange\"]] and  " +
   myFunctionTest(["apple","orange"], function(){return filterLongWordsAlt(["apple","orange","bee","hon"],4);} ));


