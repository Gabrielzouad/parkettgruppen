// structure.js
import { filteredDocumentListItems } from 'sanity-plugin-singleton-tools';
  
  export const structure = (S:any, context:any) =>
    S.list()
      .title('Parkettgruppen')
      .items([
        ...filteredDocumentListItems({ S, context }),
      ]);
      