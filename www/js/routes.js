angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('arquitectura.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('arquitectura.planDeEstudios', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planDeEstudios.html',
        controller: 'planDeEstudiosCtrl'
      }
    }
  })

  .state('arquitectura.perfilDelGraduado', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perfilDelGraduado.html',
        controller: 'perfilDelGraduadoCtrl'
      }
    }
  })

  .state('arquitectura.alcanceDelTTulo', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alcanceDelTTulo.html',
        controller: 'alcanceDelTTuloCtrl'
      }
    }
  })

  .state('arquitectura.horarios', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarios.html',
        controller: 'horariosCtrl'
      }
    }
  })

  .state('arquitectura', {
    url: '/side-menu21',
    templateUrl: 'templates/arquitectura.html',
    controller: 'arquitecturaCtrl'
  })

  .state('arquitectura.bibliotecaDigital', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaDigital.html',
        controller: 'bibliotecaDigitalCtrl'
      }
    }
  })

  .state('arquitectura.1AO', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/1AO.html',
        controller: '1AOCtrl'
      }
    }
  })

  .state('arquitectura.programasDeCTedra', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/programasDeCTedra.html',
        controller: 'programasDeCTedraCtrl'
      }
    }
  })

  .state('arquitectura.2AO', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/2AO.html',
        controller: '2AOCtrl'
      }
    }
  })

  .state('arquitectura.3AO', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/3AO.html',
        controller: '3AOCtrl'
      }
    }
  })

  .state('arquitectura.4AO', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/4AO.html',
        controller: '4AOCtrl'
      }
    }
  })

  .state('arquitectura.5AO', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/5AO.html',
        controller: '5AOCtrl'
      }
    }
  })

  .state('arquitectura.acercaDeLaApp', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('arquitectura.calendarioAcadMico', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('arquitectura.tallerDeDiseOArquitectNicoI', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallerDeDiseOArquitectNicoI.html',
        controller: 'tallerDeDiseOArquitectNicoICtrl'
      }
    }
  })

  .state('arquitectura.sistemasDeRepresentaciN', {
    url: '/page14',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sistemasDeRepresentaciN.html',
        controller: 'sistemasDeRepresentaciNCtrl'
      }
    }
  })

  .state('arquitectura.morfologAI', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/morfologAI.html',
        controller: 'morfologAICtrl'
      }
    }
  })

  .state('arquitectura.expresiNOralYEscrita', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/expresiNOralYEscrita.html',
        controller: 'expresiNOralYEscritaCtrl'
      }
    }
  })

  .state('arquitectura.introducciNALosTiposConstructivos', {
    url: '/page18',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNALosTiposConstructivos.html',
        controller: 'introducciNALosTiposConstructivosCtrl'
      }
    }
  })

  .state('arquitectura.ambienteYEcologA', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ambienteYEcologA.html',
        controller: 'ambienteYEcologACtrl'
      }
    }
  })

  .state('arquitectura.introducciNALaArqContemporNea', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNALaArqContemporNea.html',
        controller: 'introducciNALaArqContemporNeaCtrl'
      }
    }
  })

  .state('arquitectura.tallerDeDiseOArquitectNicoII', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallerDeDiseOArquitectNicoII.html',
        controller: 'tallerDeDiseOArquitectNicoIICtrl'
      }
    }
  })

  .state('arquitectura.morfologAII', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/morfologAII.html',
        controller: 'morfologAIICtrl'
      }
    }
  })

  .state('arquitectura.elementosDeMatemTica', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/elementosDeMatemTica.html',
        controller: 'elementosDeMatemTicaCtrl'
      }
    }
  })

  .state('arquitectura.instalacionesI', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instalacionesI.html',
        controller: 'instalacionesICtrl'
      }
    }
  })

  .state('arquitectura.teorAYAnLisisDeLaArquitecturaI', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teorAYAnLisisDeLaArquitecturaI.html',
        controller: 'teorAYAnLisisDeLaArquitecturaICtrl'
      }
    }
  })

  .state('arquitectura.tecnologADeLaConstrucciN', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecnologADeLaConstrucciN.html',
        controller: 'tecnologADeLaConstrucciNCtrl'
      }
    }
  })

  .state('arquitectura.introducciNALosTiposEstructurales', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNALosTiposEstructurales.html',
        controller: 'introducciNALosTiposEstructuralesCtrl'
      }
    }
  })

  .state('arquitectura.introducciNALaInformTica', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNALaInformTica.html',
        controller: 'introducciNALaInformTicaCtrl'
      }
    }
  })

  .state('arquitectura.estadSticaAplicada', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estadSticaAplicada.html',
        controller: 'estadSticaAplicadaCtrl'
      }
    }
  })

  .state('arquitectura.tallerDeDiseOArquitectNicoIII', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallerDeDiseOArquitectNicoIII.html',
        controller: 'tallerDeDiseOArquitectNicoIIICtrl'
      }
    }
  })

  .state('arquitectura.inglS', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inglS.html',
        controller: 'inglSCtrl'
      }
    }
  })

  .state('arquitectura.estructurasI', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estructurasI.html',
        controller: 'estructurasICtrl'
      }
    }
  })

  .state('arquitectura.introducciNAlUrbanismo', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/introducciNAlUrbanismo.html',
        controller: 'introducciNAlUrbanismoCtrl'
      }
    }
  })

  .state('arquitectura.informTicaAplicadaI', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTicaAplicadaI.html',
        controller: 'informTicaAplicadaICtrl'
      }
    }
  })

  .state('arquitectura.instalacionesII', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/instalacionesII.html',
        controller: 'instalacionesIICtrl'
      }
    }
  })

  .state('arquitectura.teorAYAnLisisDeLaArquitecturaII', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teorAYAnLisisDeLaArquitecturaII.html',
        controller: 'teorAYAnLisisDeLaArquitecturaIICtrl'
      }
    }
  })

  .state('arquitectura.tecnologADeLaConstrucciNII', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecnologADeLaConstrucciNII.html',
        controller: 'tecnologADeLaConstrucciNIICtrl'
      }
    }
  })

  .state('arquitectura.tallerDeDiseOArquitectNicoIV', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallerDeDiseOArquitectNicoIV.html',
        controller: 'tallerDeDiseOArquitectNicoIVCtrl'
      }
    }
  })

  .state('arquitectura.urbanismo', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/urbanismo.html',
        controller: 'urbanismoCtrl'
      }
    }
  })

  .state('arquitectura.informTicaAplicadaII', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informTicaAplicadaII.html',
        controller: 'informTicaAplicadaIICtrl'
      }
    }
  })

  .state('arquitectura.estructurasII', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estructurasII.html',
        controller: 'estructurasIICtrl'
      }
    }
  })

  .state('arquitectura.tecnologADeEnergAsNoConvencionales', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecnologADeEnergAsNoConvencionales.html',
        controller: 'tecnologADeEnergAsNoConvencionalesCtrl'
      }
    }
  })

  .state('arquitectura.teorAYAnLisisDeLaArquitecturaIII', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/teorAYAnLisisDeLaArquitecturaIII.html',
        controller: 'teorAYAnLisisDeLaArquitecturaIIICtrl'
      }
    }
  })

  .state('arquitectura.cienciasYTecnologADeLaInvestigaciN', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cienciasYTecnologADeLaInvestigaciN.html',
        controller: 'cienciasYTecnologADeLaInvestigaciNCtrl'
      }
    }
  })

  .state('instalacionesIII', {
    url: '/page52',
    templateUrl: 'templates/instalacionesIII.html',
    controller: 'instalacionesIIICtrl'
  })

  .state('planificaciNYOrganizaciNDeObras', {
    url: '/page53',
    templateUrl: 'templates/planificaciNYOrganizaciNDeObras.html',
    controller: 'planificaciNYOrganizaciNDeObrasCtrl'
  })

  .state('paisajismo', {
    url: '/page54',
    templateUrl: 'templates/paisajismo.html',
    controller: 'paisajismoCtrl'
  })

  .state('arquitectura.tallerDeDiseOArquitectNicoV', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tallerDeDiseOArquitectNicoV.html',
        controller: 'tallerDeDiseOArquitectNicoVCtrl'
      }
    }
  })

  .state('arquitectura.diseOUrbano', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/diseOUrbano.html',
        controller: 'diseOUrbanoCtrl'
      }
    }
  })

  .state('arquitectura.diseOEstructural', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/diseOEstructural.html',
        controller: 'diseOEstructuralCtrl'
      }
    }
  })

  .state('arquitectura.topografA', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/topografA.html',
        controller: 'topografACtrl'
      }
    }
  })

  .state('arquitectura.patrimonioCulturalUrbanoYArquitectNico', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/patrimonioCulturalUrbanoYArquitectNico.html',
        controller: 'patrimonioCulturalUrbanoYArquitectNicoCtrl'
      }
    }
  })

  .state('arquitectura.domTicaEInmTica', {
    url: '/page60',
    views: {
      'side-menu21': {
        templateUrl: 'templates/domTicaEInmTica.html',
        controller: 'domTicaEInmTicaCtrl'
      }
    }
  })

  .state('arquitectura.diseOPaisajStico', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/diseOPaisajStico.html',
        controller: 'diseOPaisajSticoCtrl'
      }
    }
  })

  .state('arquitectura.practicanatoEnGestiNMunicipal', {
    url: '/page61',
    views: {
      'side-menu21': {
        templateUrl: 'templates/practicanatoEnGestiNMunicipal.html',
        controller: 'practicanatoEnGestiNMunicipalCtrl'
      }
    }
  })

  .state('arquitectura.diseOBioambiental', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/diseOBioambiental.html',
        controller: 'diseOBioambientalCtrl'
      }
    }
  })

  .state('arquitectura.tCnicasEnGestiNEmpresarial', {
    url: '/page63',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tCnicasEnGestiNEmpresarial.html',
        controller: 'tCnicasEnGestiNEmpresarialCtrl'
      }
    }
  })

  .state('arquitectura.trabajoFinal', {
    url: '/page64',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trabajoFinal.html',
        controller: 'trabajoFinalCtrl'
      }
    }
  })

  .state('arquitectura.horarioIngreso', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horarioIngreso.html',
        controller: 'horarioIngresoCtrl'
      }
    }
  })

  .state('arquitectura.horario1Cuatrimestre', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario1Cuatrimestre.html',
        controller: 'horario1CuatrimestreCtrl'
      }
    }
  })

  .state('arquitectura.horario2Cuatrimestre', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horario2Cuatrimestre.html',
        controller: 'horario2CuatrimestreCtrl'
      }
    }
  })

  .state('arquitectura.gUAUNLaR', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gUAUNLaR.html',
        controller: 'gUAUNLaRCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});