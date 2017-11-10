module.exports = {
    popular: function () {
        var images =  [
            {
                uniqueId : 1,
                title : "sample image simple",
                description : "Awesome description",
                filename : "U5.jpg",
                views : Math.floor(Math.random()*100),
                likes : Math.floor(Math.random()*50),
                timestamp : Date.now()
            },
            {
                uniqueId : 2,
                title : "sample image simple",
                description : "Awesome description",
                filename : "U5.jpg",
                views : Math.floor(Math.random()*100),
                likes : Math.floor(Math.random()*50),
                timestamp : Date.now()
            },
            {
                uniqueId : 3,
                title : "sample image simple",
                description : "Awesome description",
                filename : "U5.jpg",
                views : Math.floor(Math.random()*100),
                likes : Math.floor(Math.random()*50),
                timestamp : Date.now()
            },
            {
                uniqueId : 4,
                title : "sample image simple",
                description : "Awesome description",
                filename : "U5.jpg",
                views : Math.floor(Math.random()*100),
                likes : Math.floor(Math.random()*50),
                timestamp : Date.now()
            }
        ];
        return images;
    }
}