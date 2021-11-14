export const columnsNameTableOption:Array<any>= [
    {
        id: 'id',
        label: 'id',
        minWidth: 100
    },
    {
        id: 'size',
        label: 'size',
        minWidth: 100
    },
    {
        id: 'type',
        label: 'type',
        minWidth: 100,
    },
    {
        id: 'price',
        label: 'price',
        minWidth: 100,
    },
    {
        id: 'quantity',
        label: 'quantity',
        minWidth: 100,
    },
    {
        id: 'product_id',
        label: 'product_id',
        minWidth: 100,
    },
    {
        id: 'created_at',
        label: 'created_at',
        minWidth: 100,
    },
    {
        id: 'updated_at',
        label: 'updated_at',
        minWidth: 100,
    },
];
export const columnsNamesTableProducts:Array<any>= [
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
export const columnsReview:Array<any> = [
    {id: '', label: '', minWidth: 100},
    {id: 'id', label: 'id', minWidth: 100},
    {id: 'count_start', label: 'count_start', minWidth: 100},
    {id: 'product_id', label: 'product_id', minWidth: 100},
    {id: 'content', label: 'content', minWidth: 100},
    {id: 'user_id', label: 'user_id', minWidth: 100},
    {id: 'created_at', label: 'created_at', minWidth: 100},
    {id: 'updated_at', label: 'updated_at', minWidth: 100},
];
export const columnsNameTableComment:Array<any> = [
    {
        id: '',
        label: '',
        minWidth: 100,
    },
    {
        id: 'id',
        label: 'id',
        minWidth: 100
    },
    {
        id: 'user_id',
        label: 'user_id',
        minWidth: 100
    },
    {
        id: 'new_id',
        label: 'new_id',
        minWidth: 100,
    },
    {
        id: 'content',
        label: 'content',
        minWidth: 100,
    },
    {
        id: 'created_at',
        label: 'created_at',
        minWidth: 100,
    },
    {
        id: 'updated_at',
        label: 'updated_at',
        minWidth: 100,
    },
];
export const columnsTableNews:Array<any> = [
    {
        id: '',
        label: '',
        minWidth: 100
    },
    {
        id: 'id',
        label: 'id',
        minWidth: 100
    },
    {
        id: 'user_id',
        label: 'user_id',
        minWidth: 100
    },
    {
        id: 'title',
        label: 'title',
        minWidth: 100,
    },
    {
        id: 'is_show',
        label: 'is_show',
        minWidth: 100,
    },
    {
        id: 'created_at',
        label: 'created_at',
        minWidth: 100,
    },
    {
        id: 'updated_at',
        label: 'updated_at',
        minWidth: 100,
    },
];
export const columnsTableUser:Array<any> = [
    {
        id: 'id',
        label: 'id',
        minWidth: 80,
    },
    {
        id: 'permission',
        label: 'permission',
        minWidth: 80,
    },
    {
        id: 'full_name',
        label: 'full_name',
        minWidth: 80,
    },
    {
        id: 'address',
        label: 'address',
        minWidth: 80,
    },
    {
        id: 'name',
        label: 'name',
        minWidth: 80,
    },
    {
        id: 'phone',
        label: 'phone',
        minWidth: 80,
    },
    {
        id: 'username',
        label: 'username',
        minWidth: 80,
    },
    {
        id: 'password',
        label: 'password',
        minWidth: 80,
    },
    {
        id: 'Active',
        label: 'Active',
        minWidth: 80,
    },
    {
        id: 'created_at',
        label: 'created_at',
        minWidth: 80,
    },
    {
        id: 'updated_at',
        label: 'updated_at',
        minWidth: 80,
    },
];
export const columnsCategoryProduct:Array<any> = [
    {
        id: 'id',
        label: 'id',
        minWidth: 100
    },
    {
        id: 'Name',
        label: 'Name',
        minWidth: 100
    },
    {
        id: 'created_at',
        label: 'created_at',
        minWidth: 100
    },
    {
        id: 'created_at',
        label: 'created_at',
        minWidth: 100,
    },
];
export const columnsOptionOrder:Array<any> = [
    {
        id: 'id',
        label: 'id',
        minWidth: 100
    },

    {
        id: 'Product_name',
        label: 'Product_name',
        minWidth: 100
    },
    {
        id: 'population',
        label: 'Population',
        minWidth: 100,
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 100,
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 100,
    },
];