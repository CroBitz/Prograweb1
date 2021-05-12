document.addEventListener('DOMContentLoaded' , function (){
    let imagenes = [
        {img:'Imagenes/galeria/k- rose - 35000.jpeg'},
        {img:'Imagenes/galeria/G-.jpeg'},
        {img:'Imagenes/galeria/j-dragon.jpeg'},
        {img:'Imagenes/galeria/k-bknh coneja.jpeg'},
        {img:'Imagenes/galeria/G-BirdBoy.jpeg'},
        {img:'Imagenes/galeria/k-pelo verde.jpeg'},
        {img:'Imagenes/galeria/j-mascara.jpeg'},
        {img:'Imagenes/galeria/k-catts.jpeg'},
        {img:'Imagenes/galeria/k-ditto feliz- 30000.jpg'},
        {img:'Imagenes/galeria/G-el sol y la vida.jpeg'},
        {img:'Imagenes/galeria/j-plantas.jpeg'},
        {img:'Imagenes/galeria/k-platino.jpeg'},
        {img:'Imagenes/galeria/G-gene.jpeg'},
        {img:'Imagenes/galeria/j-sombrero.jpeg'},
        {img:'Imagenes/galeria/k-el perro.jpeg'},
        {img:'Imagenes/galeria/k-flores marchitas.jpeg'},
        {img:'Imagenes/galeria/k-forever.jpeg'},
        {img:'Imagenes/galeria/k-pulso rojo.jpeg'},
        {img:'Imagenes/galeria/G-Mario.jpeg'},
        {img:'Imagenes/galeria/J-tortuga.jpg'},
        {img:'Imagenes/galeria/k-kirishima.jpeg'},
        {img:'Imagenes/galeria/k-lirio-30000.jpeg'},
        {img:'Imagenes/galeria/k-mi prohibicion.jpeg'},
        {img:'Imagenes/galeria/k-tauro.jpeg'},
        {img:'Imagenes/galeria/G-Mike.jpeg'},
        {img:'Imagenes/galeria/G-Obeja.jpeg'},
        {img:'Imagenes/galeria/k-pulso rojo.jpeg'},
        {img:'Imagenes/galeria/k-ocaso verde - 45000.jpeg'},
        {img:'Imagenes/galeria/k-pain.jpeg'},
        {img:'Imagenes/galeria/K-Sisi.jpeg'}
    ]

    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow =  document.querySelector('.slideshow img');

    contenedor.addEventListener('click', function (event){
    let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = event.target
    if (tgt == atras){
        if (contador > 0){
            img.src = imagenes[contador - 1].img
            contador--
        } else {
            img.src = imagenes[imagenes.length - 1].img
            contador = imagenes.length - 1
        }
    } else if (tgt == adelante){
            if (contador < imagenes.length - 1){
                img.src = imagenes [contador +1].img
                contador++
            }else{
                img.src = imagenes[0].img
                contador = 0
            }
        }   
    })

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

/*boton de salida*/

    document.querySelector('.btn_cerrar').addEventListener('click', () =>{
    overlay.style.opacity = 0
    overlay.style.visibility = 'hidden'
    })

    const btnswitch = document.querySelector('#switch');
    btnswitch.addEventListener('click' , () => {
    document.body.classList.toggle('dark');
    btnswitch.classList.toggle('active');
    })

})

