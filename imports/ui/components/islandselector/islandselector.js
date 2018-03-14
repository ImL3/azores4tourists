import './islandselector.html';
import {TAPi18n} from 'meteor/tap:i18n';

Template.islandselector.onCreated(function navbarOnCreated() {

     //Stores the current island src index
     this.currentIsland = new ReactiveVar(0);

     //Loads the first island
     this.currentIslandSrc = new ReactiveVar("/img/terceira.png");

     this.name = new ReactiveVar("terceira");

     //Loads the first island title
     this.title = new ReactiveVar("Terceira");

     // this.aboutText = new ReactiveVar("awewe");
});

Template.islandselector.helpers({
     currentIsland() {
          return Template.instance().currentIslandSrc.get();
     },

     title() {
          return Template.instance().title.get();
     },

     name() {
          return Template.instance().name.get();
     },
     aboutTitle() {
          return TAPi18n.__(`about_island_title.${Template.instance().name.get()}`);
     },
     aboutText() {
          return TAPi18n.__(`about_island_text.${Template.instance().name.get()}`);
     },

});

Template.islandselector.events({
     'click .enter'(event, instance) {
          let islandName = instance.name.get();
          FlowRouter.go("/" + islandName);

     },

     'click .arrow-right'(event, instance) {
          const ISLANDS_PATH = "/img";
          const ISLANDS_EXTENSION = "png";

          const ISLANDS = [{title: "Terceira", name: "terceira"},
               {title: "São Miguel", name: "saomiguel"},
               {title: "São Jorge", name: "saojorge"},
               {title: "Santa Maria", name: "santamaria"},
               {title: "Pico", name: "pico"},
               {title: "Graciosa", name: "graciosa"},
               {title: "Flores", name: "flores"},
               {title: "Faial", name: "faial"},
               {title: "Corvo", name: "corvo"}];

          const LAST_ISLAND = 8;
          const FIRST_ISLAND = 0;

          const currentIsland = instance.currentIsland;
          const currentIslandSrc = instance.currentIslandSrc;
          const currentTitle = instance.title;
          const currentName = instance.name;

          if (currentIsland.get() === LAST_ISLAND) {
               currentIsland.set(FIRST_ISLAND);
          }
          else {
               currentIsland.set(currentIsland.get() + 1);
          }

          currentIslandSrc.set(ISLANDS_PATH + '/' + ISLANDS[currentIsland.get()].name + "." + ISLANDS_EXTENSION);
          currentTitle.set(ISLANDS[currentIsland.get()].title);
          currentName.set(ISLANDS[currentIsland.get()].name);


     },

     'click .arrow-left'(event, instance) {
          const ISLANDS_PATH = "/img";
          const ISLANDS_EXTENSION = "png";

          const ISLANDS = [{title: "Terceira", name: "terceira"},
               {title: "S.Miguel", name: "saomiguel"},
               {title: "S.Jorge", name: "saojorge"},
               {title: "Santa Maria", name: "santamaria"},
               {title: "Pico", name: "pico"},
               {title: "Graciosa", name: "graciosa"},
               {title: "Flores", name: "flores"},
               {title: "Faial", name: "faial"},
               {title: "Corvo", name: "corvo"}];

          const LAST_ISLAND = 0;
          const FIRST_ISLAND = 8;

          const currentIsland = instance.currentIsland;
          const currentIslandSrc = instance.currentIslandSrc;
          const currentTitle = instance.title;
          const currentName = instance.name;

          if (currentIsland.get() === LAST_ISLAND) {
               currentIsland.set(FIRST_ISLAND);
          }
          else {
               currentIsland.set(currentIsland.get() - 1);
          }

          currentIslandSrc.set(ISLANDS_PATH + '/' + ISLANDS[currentIsland.get()].name + "." + ISLANDS_EXTENSION);
          currentTitle.set(ISLANDS[currentIsland.get()].title);
          currentName.set(ISLANDS[currentIsland.get()].name);
     },

     'mouseexit .arrow-left'(event, instance) {

     },

});
