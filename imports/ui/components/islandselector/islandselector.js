import './islandselector.html';

Template.islandselector.onCreated(function navbarOnCreated() {

  //Stores the current island src index
  this.currentIsland = new ReactiveVar(0);

  //Initializes the currentIslandSrc placehoder with given src
  this.currentIslandSrc = new ReactiveVar("/img/terceira.png");
  this.title = new ReactiveVar("Terceira");

});

Template.islandselector.helpers({
  currentIsland() {
    return Template.instance().currentIslandSrc.get();
  },

  title() {
    return Template.instance().title.get();
  },
});

Template.islandselector.events({
  'click .island'(event, instance) {
    let islandName = event.target.name;
    FlowRouter.go("/" + islandName );
  },

  'click .arrow-right'(event, instance) {
    const ISLANDS_PATH = "/img";
    const ISLANDS_EXTENSION = "png";

    const ISLANDS = [{title:"Terceira", name:"terceira"},
                    {title:"S.Miguel",name:"saomiguel"},
                    {title:"S.Jorge",name:"saojorge"},
                    {title:"Santa Maria",name:"santamaria"},
                    {title:"Pico",name:"pico"},
                    {title:"Graciosa",name:"graciosa"},
                    {title:"Flores",name:"flores"},
                    {title:"Faial",name:"faial"},
                    {title:"Corvo",name:"corvo"}]

    const LAST_ISLAND = 8;
    const FIRST_ISLAND = 0;

    const currentIsland = instance.currentIsland;
    const currentIslandSrc = instance.currentIslandSrc;
    const currentTitle = instance.title;

    if(currentIsland.get() === LAST_ISLAND) {
      currentIsland.set(FIRST_ISLAND);
    }
    else {
      currentIsland.set(currentIsland.get() + 1);
    }

    currentIslandSrc.set(ISLANDS_PATH + '/' + ISLANDS[currentIsland.get()].name + "." + ISLANDS_EXTENSION);
    currentTitle.set( ISLANDS[currentIsland.get()].title);

  },

  'click .arrow-left'(event, instance) {
    const ISLANDS_PATH = "/img";
    const ISLANDS_EXTENSION = "png";

    const ISLANDS = [{title:"Terceira", name:"terceira"},
                    {title:"S.Miguel",name:"saomiguel"},
                    {title:"S.Jorge",name:"saojorge"},
                    {title:"Santa Maria",name:"santamaria"},
                    {title:"Pico",name:"pico"},
                    {title:"Graciosa",name:"graciosa"},
                    {title:"Flores",name:"flores"},
                    {title:"Faial",name:"faial"},
                    {title:"Corvo",name:"corvo"}];

    const LAST_ISLAND = 0;
    const FIRST_ISLAND = 8;

    const currentIsland = instance.currentIsland;
    const currentIslandSrc = instance.currentIslandSrc;
    const currentTitle = instance.title;

    if(currentIsland.get() === LAST_ISLAND) {
      currentIsland.set(FIRST_ISLAND);
    }
    else {
      currentIsland.set(currentIsland.get() - 1);
    }

    currentIslandSrc.set(ISLANDS_PATH + '/' + ISLANDS[currentIsland.get()].name + "." + ISLANDS_EXTENSION);
    currentTitle.set( ISLANDS[currentIsland.get()].title);
  },

  'mouseexit .arrow-left'(event, instance) {

  },

});
