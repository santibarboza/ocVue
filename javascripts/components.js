var EventBus = new Vue;

Vue.component('registro-app',{
  template: '#registroTemplate',
  props: ['registro', 'index'],
  computed:{
      getTitulo: function(){
        return "Registro R"+this.index.toString(16).toUpperCase();
      },
      getUltimoCambio: function(){return this.ultimoCambio;}
  },
  data:function(){
      return {
          ultimoCambio:false
      }
  },
  created: function () {
    EventBus.$on('ultimoCambioRegistro', function (cambios) {
      this.ultimoCambio=cambios.includes(this.index) ;
    }.bind(this));
  },
  methods:{
    setUltimoCambio:function(status){
      this.ultimoCambio=status;
    }
  }  
});


Vue.component('registro-table-app',{
  template: '#registroTableTemplate',
  props: ['registros','inicio','fin'],
  methods:{
      enRango: function(i){
        return i>=this.inicio && i<this.fin;
      },
      getTitulo: function(i){
        return "R"+i.toString(16).toUpperCase();
      }
  }  
});

Vue.component('panelheading',{
  template: '#headingTemplate',
  props: ['targets', 'titulo'],
  computed:{
      getTarget: function(){
        return this.targets;
      },
      getTitulo: function(){
        return this.titulo;
      }
  }  
});
/*
Vue.component('app-panel-registros',{
    template:"#panelRegistrosTemplate",
    data: function () {
      return {
              registros:[
            {
              nombre:"R0",
              contenido:"00"
            },      
            {
              nombre:"R1",
              contenido:"00"
            },      
            {
              nombre:"R2",
              contenido:"00"
            },
          ]
      }
    }
});
*/
var vm=new Vue({
  el:"#panelIde",
  data:{
      registros:
        [
            { contenido:"00" },      
            { contenido:"00" },      
            { contenido:"00" },
            { contenido:"00" }, 
            { contenido:"00" },      
            { contenido:"00" },      
            { contenido:"00" },
            { contenido:"00" }, 
            { contenido:"00" },      
            { contenido:"00" },      
            { contenido:"00" },
            { contenido:"00" }, 
            { contenido:"00" },      
            { contenido:"00" },      
            { contenido:"00" },
            { contenido:"00" }
        ],
      memoria:
        [
            {
              direccion:"00",
              contenido:"00"
            },
            {
              direccion:"01",
              contenido:"00"
            }
        ]
  },
  methods:{
      updateRegistros: function(cambios){
        var registros=this.registros;
        var keys=[];
        $.each(cambios, function( index, cambio ) {
            registros[cambio.key].contenido=cambio.value;
            keys.push(cambio.key);
        });
        EventBus.$emit('ultimoCambioRegistro', keys);
    }
  }
});


/*
var panelMemoria, contenedorCode,contenedorCompilado,contenedorSimulacion;


contenedorCode = new Vue({
  el: '#contenedorCode',
  data: {
    ver: true,
    bigSize:'col-md-4'
  },
  methods: {
    ocultar:ocultarCode,
    mostrar:mostrarCode
  }
})
contenedorCompilado = new Vue({
  el: '#contenedorCompilado',
  data: {
    ver: true,
    bigSize:'col-md-3',
    texto:"Aca iria el codigo compilado"
  },
  methods: {
    ocultar:ocultarCompilado,
    mostrar:mostrarCompilado
  }
})
contenedorSimulacion = new Vue({
  el: '#contenedorSimulacion',
  data: {
    ver: true,
    bigSize:'col-md-5',
    paneles:2,   
    panelesArray:[panelRegistros,panelMemoria]
  },
  methods: {
    ocultar:ocultarSimulacion,
    mostrar:mostrarSimulacion,
    setCompilado:setCodigoCompilado        
  }
})
var ventanasArray={"0":contenedorCode,"1":contenedorCompilado,"2":contenedorSimulacion};

$( document ).ready(function() {
    $('#ventanas').multipleSelect({
    placeholder:"Ventanas Habilitadas",
    minimumCountSelected:2,
    countSelected:"# Ventanas Habilitadas",
    selectAll: false,
    onClick: function(view) {
                if(view.checked)
                    ventanasArray[view.value].mostrar();
                else
                   ventanasArray[view.value].ocultar();
            },
    onCheckAll: function() {
                for(componente in ventanasArray)
                    componente.mostrar();
            },
    onUncheckAll: function() {
                for(componente in ventanasArray)
                    componente.ocultar();
            }
});
$('#ventanas').multipleSelect('checkAll');
});

*/