export interface Article {
    id: string;
    nombre: string;
    categoria: string;
    descripcion: string;
    unidades: number;
    precio: number;
}

export const ARTICLES: Article[] = [
    {
        "id": "m1",
        "nombre": "Galaxy A32",
        "categoria": "Moviles",
        "descripcion": "4GB + 128GB libre",
        "unidades": 10,
        "precio": 229
    },
    {
        "id": "m2",
        "nombre": "Oppo A94",
        "categoria": "Moviles",
        "descripcion": "8GB + 128GB libre",
        "unidades": 10,
        "precio": 269
    },
    {
        "id": "m3",
        "nombre": "Galaxy S22",
        "categoria": "Moviles",
        "descripcion": "5G Amoled libre",
        "unidades": 10,
        "precio": 859
    },
    {
        "id": "m4",
        "nombre": "Apple iPhone",
        "categoria": "Moviles",
        "descripcion": "14 Pro móvil libre",
        "unidades": 0,
        "precio": 339
    },
    {
        "id": "m5",
        "nombre": "Galaxy Z Flip4",
        "categoria": "Moviles",
        "descripcion": "5G móvil libre",
        "unidades": 10,
        "precio": 1990
    },
    {
        "id": "m6",
        "nombre": "Note 11",
        "categoria": "Moviles",
        "descripcion": "6GB + 128GB",
        "unidades": 10,
        "precio": 300
    },
    {
        "id": "m7",
        "categoria": "Moviles",
        "nombre": "Realme 9",
        "descripcion": "8GB + 128GB",
        "unidades": 10,
        "precio": 300
    },
    {
        "id": "p1",
        "categoria": "Portatiles",
        "nombre": "Asus Zen",
        "descripcion": "i5 16Gb SSD",
        "unidades": 10,
        "precio": 900
    },
    {
        "id": "p2",
        "nombre": "HP Pavillion",
        "categoria": "Portatiles",
        "descripcion": "SSD Windows 11",
        "unidades": 10,
        "precio": 750
    },
    {
        "id": "p3",
        "nombre": "MacBook",
        "descripcion": "MacOs 13",
        "categoria": "Portatiles",
        "unidades": 10,
        "precio": 1115
    },
    {
        "id": "t1",
        "nombre": "Xiaomi P1E",
        "descripcion": "Android 9 HDR10",
        "categoria": "Televisores",
        "unidades": 10,
        "precio": 300
    },
    {
        "id": "t2",
        "nombre": "Toshiba 55UAG",
        "categoria": "Televisores",
        "descripcion": "Android UHD 4K",
        "unidades": 10,
        "precio": 450
    },
    {
        "id": "t3",
        "nombre": "Samsung UE305",
        "descripcion": "Full HD, HDR",
        "categoria": "Televisores",
        "unidades": 10,
        "precio": 350
    }
]
