export default (navigation) => [
    {
        title: 'Media',
        iconName: 'folder-image',
    },
    {
        title: 'Artikel',
        iconName: 'newspaper-variant-outline',
        onPress: () => navigation.navigate("Artikel")
    },
    {
        title: 'Pembayaran',
        iconName: 'credit-card-outline',
        onPress: () => navigation.navigate("Pembayaran")
    },
    {
        title: 'Kupon',
        iconName: 'ticket-percent-outline',
    },
    {
        title: 'Konsumen',
        iconName: 'account-outline',
    },
    {
        title: 'Buku Kas',
        iconName: 'book-outline',
    },
    {
        title: 'Review',
        iconName: 'comment-text-outline',
    },
    {
        title: 'Add to My Store',
        iconName: 'store-plus-outline',
    },
    {
        title: 'Reports',
        iconName: 'file-chart-outline',
    },
]