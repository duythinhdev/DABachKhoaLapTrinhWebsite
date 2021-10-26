export const columns: any = [
    {
        id: 'id',
        label: 'id',
        minWidth: 100
    },

    {
        id: 'Product Name',
        label: 'Product Name',
        minWidth: 100
    },
    {
        id: 'image',
        label: 'image',
        minWidth: 100,
        format: (value: any) => value.toLocaleString('en-US'),
    },
    {
        id: 'description',
        label: 'description',
        minWidth: 100,
        format: (value: any) => value.toLocaleString('en-US'),
    },
    {
        id: 'create_at',
        label: 'create_at',
        minWidth: 100,
        format: (value: any) => value.toFixed(2),
    },
    {
        id: 'update_at',
        label: 'update_at',
        minWidth: 100,
        format: (value: any) => value.toFixed(2),
    },
    {
        id: 'id_catergory_product',
        label: 'id_catergory_product',
        minWidth: 100,
        format: (value: any) => value.toFixed(2),
    },
];
