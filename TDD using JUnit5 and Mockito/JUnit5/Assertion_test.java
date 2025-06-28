package harshita;
import org.junit.Test;
import static org.junit.Assert.*;
public class Assertion_test {
    @Test
    public void testAssertions () {
        // Assert equality
        assertEquals (5, 2 + 3);
        // Assert that the condition is true
        assertTrue (5 > 3);
        // Assert that the condition is false
        assertFalse (5 < 3);
        // Assert that the object is null
        assertNull(null);
        // Assert that the object is not null
        assertNotNull (new Object ());
    }
}
