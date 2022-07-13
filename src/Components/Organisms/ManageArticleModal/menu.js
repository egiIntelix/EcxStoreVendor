export default (previewArticle, deleteArticle, archivedArticle ) => ([
    {
        title: 'Edit',
        iconName: 'pencil-outline',
        itemProps: {
            bold: true,
        },
        onPress: previewArticle
    },
    {
        title: 'Hapus',
        iconName: 'trash-can-outline',
        itemProps: {
            bold: true,
        },
        onPress: deleteArticle
    },
    {
        title: 'Arsipkan',
        iconName: 'zip-box-outline',
        itemProps: {
            bold: true,
        },
        onPress: archivedArticle
    },
])