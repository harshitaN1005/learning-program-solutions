package harshita;

public class Main {
    public static void main (String[] args) {
        DocCreator creator;
        creator = new WordDocumentCreator();
        creator.openDocument();  
        creator = new PdfDocumentCreator();
        creator.openDocument();  
        creator = new ExcelDocumentCreator();
        creator.openDocument();
    }
}

