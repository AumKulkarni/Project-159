AFRAME.registerComponent("info",{
    schema:{
        itemId:{default:'',type:'string'},
    },
    update:function(){
        this.createBanner()
    },
    createBanner:function(){
        storyInfo={
            "captain-aero":{
            banner_url:'./assets/posters/captain-aero-banner.jpg',
            title:'captainAero',
            released_year:1999,
            description:'Captain Aeros first adventure was written by Allen Ulmer and illustrated by Ray Willner.[3] Captain Aero is a Flying ace for the US Army, who patrols the skies with his little Chinese pal, Chop Suey.',

        },
        "spiderman":{
            banner_url:'./assets/posters/spiderman-banner.png',
            title:'spiderman',
            released_year:1984,
            description:'Spider-Man is a superhero appearing in American comic books published by Marvel Comics'
        },
        "superman":{
            banner_url:'./assets/posters/superman-banner.jpg',
            title:'superman',
            released_year:1988,
            description:'Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster',
        },
        "outer-space":{
            banner_url:'./assets/posters/outer-space-banner.jpg',
            title:'outer-space',
            released_year:1973,
            description:'Outer space (or simply space) is the expanse beyond celestial bodies and their atmospheres. Outer space is not completely empty'
        },
    }
    const {itemId}=this.data;
    const backgroundEl=document.querySelector("#fadeBackground");
    const entityEl=document.createElement("a-entity");
    entityEl.setAttribute("visible",true)
    entityEl.setAttribute("id",`${itemId}-banner`);
    entityEl.setAttribute("geometry",{
        primitive:"plane",
        width:0.9,height:1
    });
    entityEl.setAttribute("material",{
        color:"white"
    });
    entityEl.setAttribute("position",{
        x:0,y:0.1,z:-1
    });

    const item=storyInfo[itemId];
    const imageEl=this.createImageEl(item)
    const titleEl=this.createTitleEl(item)
    const descriptionEl=this.createDescriptionEl(item)
    entityEl.appendChild(imageEl)
    entityEl.appendChild(titleEl)
    entityEl.appendChild(descriptionEl)
    backgroundEl.appendChild(entityEl)
    },
    createImageEl:function(item){
        const entityEl=document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("geometry",{
            primitive:"plane",
            width:0.85,height:0.4
        });
        entityEl.setAttribute("material",{src:item.banner_url});
        entityEl.setAttribute("position",{
            x:0,y:0.3,z:0.05
        });
        return entityEl;
    },
    createTitleEl:function(item){
        const entityEl=document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("text",{
            anchor:"left",
            width:1.2,
            height:2,
            color:"red",
            value:`${item.title} (${item.released_year})`
        });
        
        entityEl.setAttribute("position",{
            x:-0.4,y:0.02,z:0.05
        });
        return entityEl;
    },
    createDescriptionEl:function(item){
        const entityEl=document.createElement("a-entity");
        entityEl.setAttribute("visible",true);
        entityEl.setAttribute("text",{
            anchor:"left",
            width:1.2,
            height:2,
            color:"red",
            value:item.description
        });
        
        entityEl.setAttribute("position",{
            x:-0.4,y:-0.24,z:0.05
        });
        return entityEl;
    }
})