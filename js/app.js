let initialList = [
    {
        name: 'A',
        count: 0, 
        img: './img/a.jpg',
        nickNames: ['A']
    },
    {
        name: 'B',
        count: 0, 
        img: './img/b.jpg',
        nickNames: ['B']
    },
    {
        name: 'C',
        count: 0, 
        img: './img/c.jpg',
        nickNames: ['C']
    },
    {
        name: 'D',
        count: 0, 
        img: './img/d.jpg',
        nickNames: ['D']
    },
    {
        name: 'E',
        count: 0, 
        img: './img/e.jpg',
        nickNames: ['E']
    }
];

let Cat = function(data) {
    this.name = data.name;
    this.count = ko.observable(data.count);
    this.img = data.img;
    this.nickNames = data.nickNames;
    this.title = ko.computed(function(){
        if(this.count() <= 10) {
            return 'NewBie';
        } else {
            return 'Master';
        }
    }, this);
    
};

let ViewModel = function() {
    var self = this;
    self.catList = ko.observableArray([]);
    initialList.forEach(function(obj){
        self.catList().push(new Cat(obj));
    });
    self.currentCat = ko.observable(self.catList()[0]);
    self.incrementCounter = function() {
        self.currentCat().count(self.currentCat().count() + 1);
    };
    self.renderCat = function(paramCat) {
        self.currentCat(paramCat);
    }
};

ko.applyBindings(new ViewModel());