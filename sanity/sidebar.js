import S from '@sanity/desk-tool/structure-builder';

// build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title(`Awere Resouces`)
    .items([
      // create new sub item
      // add in the rest of our document items
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings'
      ),
    ]);
}
