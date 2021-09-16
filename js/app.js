const menu = [
    {
        id: 1,
        title: "berry pancakes",
        category: "breakfast", 
        price: 12.99,
        img: "./images/item-1.jpg",
        desc: "buttermilk pancakes topped with fresh seasonal berries",
    },
    {
        id: 2,
        title: "sunrise burger",
        category: "breakfast", 
        price: 13.99,
        img: "./images/item-2.jpg",
        desc: "1lb beef patty with melted provolone, ham and poached egg to brighten your day",
    },
    {
        id: 3,
        title: "AM bagel",
        category: "breakfast", 
        price: 10.99,
        img: "./images/item-3.jpg",
        desc: "fried egg, turkey, tomato and lettuce between a toasted bagel of your choice (plain, everything, sourdough)",
    },
    {
        id: 4,
        title: "toasted turkey",
        category: "lunch", 
        price: 11.99,
        img: "./images/item-4.jpg",
        desc: "cheddar cheese, carved turkey, tomato and lettuce pressed with your choice of bread (white, wheat, sourdough)",
    },
    {
        id: 5,
        title: "insane in the memburger",
        category: "lunch", 
        price: 12.99,
        img: "./images/item-5.jpg",
        desc: "1lb beef patty with melted cheddar cheese and zillion dollar sauce on a brioche bun",
    },
    {
        id: 6,
        title: "steak n tators",
        category: "dinner", 
        price: 23.99,
        img: "./images/item-6.jpg",
        desc: "new york steak, pan fried fingerlings and flaky sea salt",
    },
    {
        id: 7,
        title: "mom's spaghetti",
        category: "dinner", 
        price: 17.99,
        img: "./images/item-7.jpg",
        desc: "lose yourself with handmade noodles, bolognese and freshly grated parmesan",
    },
    {
        id: 8,
        title: "molten chocolate lava cake",
        category: "dessert", 
        price: 9.99,
        img: "./images/item-8.jpg",
        desc: "you're gonna lava this gooey dark chocolate cake topped with powdered sugar",
    },
    {
        id: 9,
        title: "berry nice pie",
        category: "dessert", 
        price: 9.99,
        img: "./images/item-9.jpg",
        desc: "homemade pie with seasonal berries",
    },
    

    ];

    const sectionCenter = document.querySelector('.section-center');

    const filterBtns = document.querySelectorAll('.filter-btn');

    //load items
    window.addEventListener("DOMContentLoaded", function () {
        displayMenuItems(menu)
    });
    
    //filter items
    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
            if (menuItem.category === category) {
                return menuItem;

                }
            })
            // console.log(menuCategory);
            if (category === "all"){
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        
        });
    });

    function displayMenuItems(menuItems){
        let displayMenu = menuItems.map(function(item){
            // console.log(item);
    
            return `<article class="menu-item">
                        <img src="${item.img}" class="photo" alt="${item.title}"/>
                        <div class="item-info">
                            <header>
                                <h4>${item.title}</h4>
                                <h4 class="price">$${item.price}</h4>
                            </header>
                            <p class="item-text">${item.desc}</p>
                        </div>
                    </article>`;
        });
        displayMenu = displayMenu.join("")
        sectionCenter.innerHTML = displayMenu
        
    }