package harshita;
//creates excel documents
class ExcelDocumentCreator extends DocCreator {
 public Document createDoc() {
     return new ExcelDocument();
 }
}
