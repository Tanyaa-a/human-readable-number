module.exports = function toReadable(n) {
    if (n === 0) {
        return "zero";
      }
    
      const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
      const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
      const teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    
      let result = "";
    
      if (n >= 100) {
        result += ones[Math.floor(n / 100)] + " hundred ";
        n %= 100;
      }
    
      if (n >= 20) {
        result += tens[Math.floor(n / 10)] + " ";
        n %= 10;
      }
    
      if (n >= 10 && n < 20) {
        result += teens[n - 10] + " ";
        n = 0;
      }
    
      if (n > 0) {
        result += ones[n] + " ";
      }
    
      return result.trim();
    }
   