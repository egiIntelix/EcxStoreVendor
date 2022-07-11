export default (previewProduct, archivedProduct, deleteProduct) => ([
    {
        title: 'Lihat Preview Produk',
        iconName: 'eye-outline',
        navigate: 'PreviewProduct',
        itemProps: {
            bold: true,
        },
        onPress: previewProduct
    },
    {
        title: 'Arsipkan Produk',
        iconName: 'zip-box-outline',
        navigate: '',
        itemProps: {
            bold: true,
        },
        onPress: archivedProduct
    },
    {
        title: 'Hapus',
        iconName: 'trash-can-outline',
        navigate: '',
        itemProps: {
            bold: true,
        },
        onPress: deleteProduct
    },
])