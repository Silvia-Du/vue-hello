const app = new Vue({

  el : '#app',

  data:{
    message: 'Questa è la prima cosa che scrivo in Vue',
    sfondo: 'img-background',
    image: './generic_vue_header.jpg',
    buttonText: 'Fai comparire un\'altra immagine',

    visibilità: 'hide',
    roundedBorder: 'rounded',
    isRounded:false,
    visible: true,
    counter: 0,
  },

  methods:{
    toggleGetImage(){

      this.counter ++;
      console.log(this.counter);

      if( this.counter == 1 ){
        this.visible = !this.visible;
        this.buttonText = 'ora modificala!';
      }
      

      if( this.counter == 2 ){
        this.isRounded = !this.isRounded;
        this.visible = false;
        this.buttonText = 'falla sparire!'
      }

      if( this.counter == 3 ){
        this.buttonText= 'Fallo di nuovo!';
        this.visible = true;
        this.counter = 1;
      }
    }
  }

})

