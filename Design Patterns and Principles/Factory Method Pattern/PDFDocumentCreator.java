package harshita;

//creates PDF documents
class PdfDocumentCreator extends DocCreator {
 public Document createDoc() {
     return new PdfDocument();
 }
}
