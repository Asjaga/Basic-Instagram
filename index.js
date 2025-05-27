const express = require("express");
const path = require("path");
const app = express();
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
const { v4: uuidv4 } = require('uuid');
const port = 8080;
app.use(express.urlencoded({extended:true}));

let posts = [
  { id: uuidv4(),
    username: "sunset_gazer",
    caption: "Golden hues painting the evening sky.",
    likes: 1023,
    Image: "https://th.bing.com/th/id/R.e9dcea64526601c69755e66b24aee605?rik=XVZ14UBOjY2uTA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2frEZ5ohG.jpg&ehk=5gF1yEZ2S%2b3eEi3JxsfH0nGWs%2fhuj4g0A0F3OH06ND8%3d&risl=&pid=ImgRaw&r=0"
  },
  { id: uuidv4(),
    username: "forest_wanderer",
    caption: "Embracing the serenity of the woods.",
    likes: 847,
    Image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  },
  { id: uuidv4(),
    username: "mountain_dreams",
    caption: "Reaching new heights amidst the clouds.",
    likes: 932,
    Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  { id: uuidv4(),
    username: "urban_nature",
    caption: "Nature's touch in the heart of the city.",
    likes: 678,
    Image: "https://images.unsplash.com/photo-1494526585095-c41746248156"
  },
  { id: uuidv4(),
    username: "wildlife_enthusiast",
    caption: "A glimpse into the wild's wonders.",
    likes: 1105,
    Image: "https://th.bing.com/th/id/R.db84f4d0c0caf915211679b50e8e4f17?rik=1bHyf1tCS%2brstA&riu=http%3a%2f%2fwww.photo-paysage.com%2falbums%2fPaysages%2fLac-riviere-cascade%2fparadis-lac-cascade-plitvice.jpg&ehk=OMBV2yAjylP5qHUwMS44Of1KzgjCiN%2bqSMBfUEKmzBI%3d&risl=&pid=ImgRaw&r=0"
  },
  { id: uuidv4(),
    username: "zen_seeker",
    caption: "Finding peace in nature's embrace.",
    likes: 764,
    Image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  { id: uuidv4(),
    username: "flower_power",
    caption: "Blooming beauty in every petal.",
    likes: 889,
    Image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
  },
  { id: uuidv4(),
    username: "misty_mornings",
    caption: "Foggy dawns and fresh beginnings.",
    likes: 821,
    Image: "https://th.bing.com/th/id/OIP.gD7OwsQ7bJMQvsLBXng3KwAAAA?cb=iwp2&rs=1&pid=ImgDetMain"
  },
  { id: uuidv4(),
    username: "trail_blazer",
    caption: "Paths less traveled lead to the best views.",
    likes: 695,
    Image: "https://thumbs.dreamstime.com/b/fast-flowing-rapids-hokitika-river-near-gorge-carpark-south-island-west-coast-withe-southern-alps-as-background-260085257.jpg"
  },
  { id: uuidv4(),
    username: "cloud_chaser",
    caption: "Skies that tell a thousand stories.",
    likes: 978,
    Image: "https://th.bing.com/th/id/R.df02bc49ef8c167bc33888f359facb13?rik=VRDbmQHXH2J%2b2w&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f130000%2fvelka%2fnature-1436732866NMV.jpg&ehk=o2t0PidQjZU8%2bBL67CnF%2bNbpOXRdIczp02zYhWxsmBE%3d&risl=&pid=ImgRaw&r=0"
  }
];


app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.listen(port,()=>{
    console.log("Server is Listening on port 8080");
})
app.get("/post/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("editpost.ejs",{post});
});
app.patch("/post/:id/edit",(req,res)=>{
    let {id } = req.params;
    let post = posts.find((p) => id === p.id);
    let {image ,caption} = req.body;
    if (image != ""){
        post.Image = image;
    }
    post.caption = caption;
    res.redirect("/posts");

})
app.get("/posts",(req,res)=>{
    res.render("home.ejs",{posts});
})

app.get("/post/new",(req,res)=>{
    res.render("newpost.ejs");
});

app.delete("/post/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id != p.id);
    res.redirect("/posts");
});

app.post("/post/new",(req,res)=>{
    let {caption,image,username} = req.body;
    if (image === ""){
        image = "https://th.bing.com/th/id/OIP.qISjQuz0VsrKxe81_sA7twHaHa?w=214&h=214&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3"
    }
    posts.push({
        id: uuidv4(),
        username: username,
        caption: caption,
        likes: Math.floor(Math.random()* 1000 + 500),
        Image: image
    });
    res.redirect("/posts");
})

