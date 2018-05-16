

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

var vm=new Vue({
  el:"#panelIde",
  data:{
      registros:
        [
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
            {
              nombre:"R3",
              contenido:"00"
            },      
            {
              nombre:"R4",
              contenido:"03"
            },      
            {
              nombre:"R5",
              contenido:"00"
            },
            {
              nombre:"R6",
              contenido:"00"
            },      
            {
              nombre:"R7",
              contenido:"00"
            },      
            {
              nombre:"R8",
              contenido:"00"
            },
            {
              nombre:"R9",
              contenido:"00"
            },      
            {
              nombre:"RA",
              contenido:"00"
            },      
            {
              nombre:"RB",
              contenido:"00"
            },
            {
              nombre:"RC",
              contenido:"00"
            },      
            {
              nombre:"RD",
              contenido:"03"
            },      
            {
              nombre:"RE",
              contenido:"00"
            },
            {
              nombre:"RF",
              contenido:"00"
            }
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