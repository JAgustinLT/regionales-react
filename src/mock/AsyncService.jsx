export const productos = [
    //ESTE PRODUCTO ESTA COMENTADO POR QUE YA FUE SUBIDO A FIREBASE
    // {
    //     id:'01',
    //     name:'nueces confitadas',
    //     description:'nuez con dulce de leche bañada en fondant',
    //     stock:100,
    //     price: 800,
    //     img:'../img/nuezfondant.png',
    //     category:'Nueces Confitadas'
    // },
    {
        // id:'02',
        name:'nueces de chocolate',
        description:'nuez con dulce de leche bañada en chocolate',
        stock:100,
        price: 800,
        img:'../img/nuezchoco.png',
        category:'Nueces Chocolate'
    },
    {
        // id:'03',
        name:'dulce de cayote',
        description:'dulce de cayote en almibar',
        stock:100,
        price: 5000,
        img:'../img/cayote.png',
        category:'Dulces Envasados'
    },
    {
        // id:'04',
        name:'dulce de batata',
        description:'dulce de batata en almibar',
        stock:100,
        price: 5000,
        img:'../img/batata.png',
        category:'Dulces Envasados'
    },
    {
        // id:'05',
        name:'dulce de higo',
        description:'dulce de higo en almibar',
        stock:100,
        price: 5000,
        img:'../img/higo.png',
        category:'Dulces Envasados'
    },
    {
        // id:'06',
        name:'dulce de zapallo',
        description:'dulce de zapallo en almibar',
        stock:100,
        price: 5000,
        img:'../img/zapallo.png',
        category:'Dulces Envasados'
    }
]


export const getProductos =()=>{
    let error = false
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un error, Intente mas tarde')
            }else{
                resolve(productos)
            }
        },2000)
    })

}

export const getOneProduct = (id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let prod= productos.find((producto)=> producto.id === id)
            resolve(prod)
        }, 2000)
    })
}