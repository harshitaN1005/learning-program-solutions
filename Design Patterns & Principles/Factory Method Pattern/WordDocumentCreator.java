package harshita;

//creates Word documents
class WordDocumentCreator extends DocCreator{
  public Document createDoc() {
      return new WordDocument();
  }
}

