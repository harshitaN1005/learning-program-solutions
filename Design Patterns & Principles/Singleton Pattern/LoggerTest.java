package harshita;

public class LoggerTest {
    public static void main(String[] args) {
        // Getting the Log instance
        Logger log1 = Logger.getInstance();
        Logger log2 = Logger.getInstance();

        // Using the logger
        log1.log("This is the first log message.");

        // Confirming singleton behavior
        System.out.println("Are both logger instances same? " + (log1 == log2));
    }
}
