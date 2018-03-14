import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/terceira/terceira.js';
import '../../ui/pages/corvo/corvo.js';
import '../../ui/pages/flores/flores.js';
import '../../ui/pages/faial/faial.js';
import '../../ui/pages/saojorge/saojorge.js';
import '../../ui/pages/pico/pico.js';
import '../../ui/pages/graciosa/graciosa.js';
import '../../ui/pages/saomiguel/saomiguel.js';
import '../../ui/pages/santamaria/santamaria.js';


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});



FlowRouter.route('/terceira', {
     name: 'App.terceira',
     action() {
          BlazeLayout.render('App_body', {main: 'App_terceira'});
     },
});

FlowRouter.route('/corvo', {
     name: 'App.corvo',
     action() {
          BlazeLayout.render('App_body', {main: 'App_corvo'});
     },
});

FlowRouter.route('/flores', {
     name: 'App.flores',
     action() {
          BlazeLayout.render('App_body', {main: 'App_flores'});
     },
});

FlowRouter.route('/faial', {
     name: 'App.faial',
     action() {
          BlazeLayout.render('App_body', {main: 'App_faial'});
     },
});

FlowRouter.route('/saojorge', {
     name: 'App.saojorge',
     action() {
          BlazeLayout.render('App_body', {main: 'App_saojorge'});
     },
});

FlowRouter.route('/pico', {
     name: 'App.pico',
     action() {
          BlazeLayout.render('App_body', {main: 'App_pico'});
     },
});

FlowRouter.route('/graciosa', {
     name: 'App.graciosa',
     action() {
          BlazeLayout.render('App_body', {main: 'App_graciosa'});
     },
});

FlowRouter.route('/saomiguel', {
     name: 'App.saomiguel',
     action() {
          BlazeLayout.render('App_body', {main: 'App_saomiguel'});
     },
});

FlowRouter.route('/santamaria', {
     name: 'App.santamaria',
     action() {
          BlazeLayout.render('App_body', {main: 'App_santamaria'});
     },
});


FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
