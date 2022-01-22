let s="MADAM";
let len=s.length;
function palindrome(i){
    if(s[i]!==s[len-i-1])return false;
    if(i>=Math.floor(len/2))return true;
	return palindrome(i+1);
}

console.log(palindrome(0));