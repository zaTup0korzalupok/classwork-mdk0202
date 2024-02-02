const Denis = {
    name: "мiкола",
    age: 19,
    born: 'April 12 1996',
    born_city: 'Rostov na dony',
    hobby: ['gopak','vodka'],
    countries: 'DNR',
    contacts: {
        phone: '+389822134',
        email: ['belarus_top@mail.br', 'Freedom_texas@mail.top'],
        Street: 'street 11 house 3',
        social_web: ['telegram','tik tok','vkontakte'],
    }
}
let fun=(x)=>{
    console.log(`${x.name}`)
    console.log(`${x.age}`)
    console.log(`${x.born}`)
    console.log(`${x.countries}`)
    for (let  cont in x.contacts) {
    console.log(`конкакты:${x.contacts[cont]}`)
    }

}
fun(Denis)
