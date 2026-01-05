// ******************************************     Strings      ******************************************** //

// ===============>>>   Strings are IMMUTABLE

// 1. What are Strings?

/*
public class Strings {
    public static void main(String[] args) {
        int char [] = {'q','s','w','x'};                // Char Array
        Strings str1 = "ABCD";                          // This is a String
        String str2 = new String("EFGH");               // Another method of implement String
    }
}
*/

// 2. Input/Output

import java.util.*;
public class Strings {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String name;
        name = sc.next();                              // Single String
        name = sc.nextLine();                          // Whole String
        System.out.println(name);
    }
}

// 3. String Length

public class Strings {
    public static void main(String[] args) {
        String name = "Saurav Pandit";
        System.out.println(name.length());
    }
}

// 4. String Concatenation

public class Strings {
    public static void main(String[] args) {
        String firstname = "Saurav";
        String lastname = "Pandit";
        String fullname = firstname + " " + lastname;
        System.out.println(fullname);
    }
}

// 5. String charAt method                              ====>  charAt means character At (Index)

public class Strings {
    public static void printLetter(String fullname) {
        for(int i=0; i<fullname.length(); i++){
            System.out.print(fullname.charAt(i) + " ");
        } 
        System.out.println();
    }
    public static void main(String[] args) {
        String firstname = "Saurav";
        String lastname = "Pandit";
        String fullname = firstname + " " + lastname;
        
        printLetter(fullname);
    }
}

// 6. Question 1 : Check if a String is palindrome                                  ** intuit **                

public class Strings {
    public static boolean isPalindrome(String str) {
        int n = str.length();
        for(int i=0; i<str.length()/2; i++){
            if(str.charAt(i) != str.charAt(n-1-i)){
                return false;
            }
        } 
        return true;
    }
    public static void main(String[] args) {
        String str = "noon";
        isPalindrome(str);
        System.out.println(isPalindrome(str));
    }
}

// 7. Question 2 : Shortest Path                              

public class Strings {
    public static float getShortestpath(String path) {
        int X = 0;
        int Y = 0;

        for(int i = 0; i < path.length(); i++) {
            char direction = path.charAt(i);

            // Move based on direction
            if(direction == 'S') {
                Y--;
            } else if(direction == 'N') {
                Y++;
            } else if(direction == 'W') {
                X--;
            } else if(direction == 'E') {
                X++;
            }
        }

        // Compute shortest distance from origin
        return (float) Math.sqrt(X * X + Y * Y);
    }

    public static void main(String[] args) {
        String path = "WNEENESENNN";
        System.out.println(getShortestpath(path));
    }
}

// 8. String Functions - Compare

public class Strings {
    public static void main(String[] args) {

        String S1 = "Saurav";
        String S2 = "Saurav";

        String S3 = new String("Saurav");

        if(S1 == S2){                                                                  //   Equales
            System.out.println("Strings are equales");
        }else{
            System.out.println("Strings are not equales");
        }


        if(S1 == S3){                                                                  // NOT Equales - interning Concept
            System.out.println("Strings are equales");
        }else{
            System.out.println("Strings are not equales");
        }

        // ******************  OR  ***************** //

        if(S1.equals(S3)){
            System.out.println("Strings are equales");
        }else{
            System.out.println("Strings are not equales");
        }
    }
}

// 9. String Functions - SubString

/*
 * Si = Starting Index   (Included)
 * Ei = Ending Index     (Excluded - Not Included)
 */

 public class Strings {
    public static String substring(String str, int si , int ei ){
        String SubString = "";
        for(int i=si; i<ei; i++){
            SubString += str.charAt(i);
        }
        return SubString;
    }
    public static void main(String[] args) {
        String str = "Saurav Pandit";
        System.out.println(substring(str, 0, 7));

        // ******  OR  ******  Inbuilt Functions // 
        
        System.out.println(str.substring(0, 7));

    }
}

// 10. Print Largest String 

//  Question 3 : For a given set of Strings, Print the largest String.    ("apple", "mango", "banana")

public class Strings {
    public static void main(String[] args) {
        String fruit[] = {"apple", "mango", "banana"};

        String largest = fruit[0];
        for(int i=1; i<fruit.length; i++){
            if(largest.compareTo(fruit[i]) < 0){
                largest = fruit[i];
            }
        }
        System.out.println(largest);
    }
}

// 11. Why Strings sre immutable
// Interning Concept in there (Refer Class Note.... )

// 12. StringBuilder

public class Strings {
    public static void main(String[] args) {
        StringBuilder sb = new StringBuilder("");
        for(char ch='A'; ch<='Z'; ch++){
            sb.append(ch);
        }
        System.out.println(sb);
        System.out.println(sb.length());
    } 
}