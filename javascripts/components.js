var EventBus = new Vue;

Vue.component('registro-app',{
  template: '#registroTemplate',
  props: ['registro', 'index'],
  computed:{
      getTitulo: function(){
        return "Registro R"+this.index.toString(16).toUpperCase();
      }
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

Vue.component('registro-panel-app',{
  template: '#registroPanelTemplate',
  props: ['registros']  
});
Vue.component('memoria-app',{
  template: '#memoriaTemplate',
  props: ['memoria', 'index'],
  computed:{
      getTitulo: function(){
        return "Memoria: Direccion 0x"+this.index.toString(16).toUpperCase();
      },
      clasesMemoria:function(){
        return {
          ultimaMemoria: this.ultimoCambio,
          pcMemoria: this.esPC,
          irMemoria: this.esIR,
        }
      },
  },
  data:function(){
      return {
          ultimoCambio:false,
          esPC:false,
          esIR:false
      }
  },
  created: function () {
    EventBus.$on('ultimoCambioMemoria', function (cambios) {
      this.ultimoCambio=cambios.includes(this.index) ;
    }.bind(this));
    EventBus.$on('nuevopc', function (pc) {
      this.esPC=(pc==this.index)||(pc+1==this.index);
    }.bind(this));
    EventBus.$on('nuevoir', function (ir) {
      this.esIR=(ir==this.index)||(ir+1==this.index);
    }.bind(this));
  }  
});

Vue.component('memoria-table-app',{
  template: '#memoriaTableTemplate',
  props: ['memorias','cantxfilas'], 
  computed:{
      cantfilas: function(){
        return this.memorias.length/this.cantxfilas;
      }
  },
  methods:{
    getMemoria: function(i,j){
      var indice=this.getIndex(i,j);
      return this.memorias[indice];
    },
    getIndex: function(i,j){
      var fila=i-1;
      var columna=j-1;
      var indice=fila*this.cantxfilas+columna; 
      return indice;
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
Vue.component('panelcompilado-app',{
  template: '#compiladoTemplate',
  props: ['panel'],
  computed:{
    getPanel: function(){
        return this.panel;
      },
    getBigSize: function(){
        return "col-md-"+this.panel.size;
      },
  }  
});

Vue.component('panelcode-app',{
  template: '#codeTemplate',
  props: ['panel'],
  computed:{
    getPanel: function(){
        return this.panel;
      },
    getBigSize: function(){
        return "col-md-"+this.panel.size;
      },
  }  
});

Vue.component('panelsimulacion-app',{
  template: '#simulacionTemplate',
  props: ['panel'],
  computed:{
    getPanel: function(){
        return this.panel;
      },
    getBigSize: function(){
        return "col-md-"+this.panel.size;
      },
  }  
});
Vue.component('panellogs-app',{
  template: '#logsTemplate',
  props: ['logs'],
  computed:{
    getLogs: function(){
        return this.logs;
      }
  }  
});
Vue.component('panelmemoria-app',{
  template: '#memoriaPanelTemplate',
  props: ['memorias'],
  computed:{
    getLogs: function(){
        return this.logs;
      }
  }  
});


var vm=new Vue({
  el:"#panelIde",
  created:function () {
    var i;
    for (i = 0; i < 16; i++) {
      this.panelSimulacion.registros.push({contenido:"00"});
    } 
    for (i = 0; i < 256; i++) {
      this.panelSimulacion.memorias.push({contenido:"00"});
    }
  },
  data:{
      panelCode:{
        value:"aca iriael codigo fuente",
        size:4
      },
      panelCompilado:{
        value:"aca iria el codigo", 
        size:3
      },
      panelSimulacion:{
        size:5,
        registros:[],
        memorias:[],
        logs:{
          value:"aca se mostrarian los logs"
        }
      }
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
    },
    updateMemoria: function(cambios){
        var memorias=this.memorias;
        var keys=[];
        $.each(cambios, function( index, cambio ) {
            memorias[cambio.key].contenido=cambio.value;
            keys.push(cambio.key);
        });
        EventBus.$emit('ultimoCambioMemoria', keys);
    },
    updatePC: function(pc){
        EventBus.$emit('nuevopc', pc);
    },
    updateIR: function(ir){
        EventBus.$emit('nuevoir', ir);
    }
  }
});

