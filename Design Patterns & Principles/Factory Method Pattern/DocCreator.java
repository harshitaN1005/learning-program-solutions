package harshita;

//a manager class to handle document creation
abstract class DocCreator{
  // This is the "factory method" that will create the document
  public abstract Document createDoc();
  // This method uses the created document
  public void openDocument() {
      Document doc = createDoc(); // ask subclass to create document
      doc.open(); 
  }
}
