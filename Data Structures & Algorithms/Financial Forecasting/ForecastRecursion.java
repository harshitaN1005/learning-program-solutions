package harshita;

public class ForecastRecursion {

    // Recursive method to calculate future value
    public static double forecast(double presentValue, double growthRate, int years) {
        // Base case: If no more years to grow, return current value
        if (years == 0) {
            return presentValue;
        }

        // Recursive case: grow the value for one year and repeat
        return forecast(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double initialAmount = 1000;     // Starting with ₹1000
        double growthRate = 0.1;         // 10% annual growth
        int years = 5;                   // Forecast for 5 years

        double result = forecast(initialAmount, growthRate, years);
        System.out.println("Initial Amount" + initialAmount);
        System.out.printf("Predicted value after %d years: ₹%.2f%n", years, result);
    }
}
