package harshita;
import java.util.*;
public class Search {
	
	public static int linearSearch(Product[] products, String name) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(name)) {
                return i;
            }
        }
        return -1;
    }
	
	
	public static int binarySearch(Product[] products, String name) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int compare = products[mid].productName.compareToIgnoreCase(name);

            if (compare == 0) return mid;
            else if (compare < 0) low = mid + 1;
            else high = mid - 1;
        }

        return -1;
    }

	
	 public static void sortProductsByName(Product[] products) {
	        Arrays.sort(products, (a, b) -> a.productName.compareToIgnoreCase(b.productName));
	 }
	
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Fashion"),
            new Product(3, "Phone", "Electronics"),
            new Product(4, "Watch", "Accessories"),
            new Product(5, "Bag", "Fashion")
        };

        // Linear Search
        System.out.println(" Linear Search:");
        int index1 = linearSearch(products, "Phone");
        System.out.println(index1 != -1 ? "Found: " + products[index1] : "Not Found");

        // Sort products by name before binary search
        sortProductsByName(products);

        // Binary Search
        System.out.println("\n Binary Search (after sorting):");
        int index2 = binarySearch(products, "Phone");
        System.out.println(index2 != -1 ? "Found: " + products[index2] : "Not Found");
    }
}

