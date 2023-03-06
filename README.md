# TATA CLiQ Mart Clone

<center><h3>Begin your journey online with one of the fastest growing, e-commerce brands in the country and have a seamless online shopping experience. Immerse yourself in the joy of browsing through the best Indian and international brands in fashion, luxury, electronics and jewellery.</h3></center>

<center><img width="500px" src=""></center>

# Features

- `Login/Signup using firebase`
- `Multiple Filtering and Sorting options`
- `Products Page`
- `Single UserPage`
- `Cart Page `
- `Admin Panel`
- `Fully Responsive`

# My work planning and proof

<!-- All the folder structure information -->

=> Before you start:

- Use `assets` folder for images,pdf,video..etc
- Use `components` folder for making components either in folder or without folder
  just be sure naming should not match with other folder/file to avoid collision
- Use `pages` folder to create all the pages
- Use `routes` folder to all the routing related stuffs
- Use `scripts` folder for any js script you wanna write.(this folder helps you to
  keep jsx and js folder separate)
- Use `styles` folder to keep your all css files.
- Use `constants` folder to create all the constants (Helps you reducing hard-coding)(Most recommended)

<!-- Cloning related and Getting started related stuffs -->

=> Clone the directory to start work `$git clone  https://github.com/Rajesh890-bit/fancy-thunder-426.git`

=> Ok guys here are the some basic instruction before you start , If you are here you are successfully pulled the code and you are ready to type you first command in terminal.

Step-1- Navigate to proeject directory using `$cd fancy-thunder-426-rajesh`

Step-2- install node_modules using `$cd npm install`

Step-3- install some common dependencies:- <br /> - `$npm install react-router-dom axios`<br /> - `$npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion @chakra-ui/icons` - `npm @mui/material` - `npm i firebase` - `npm i react-responsive-carousel`

<!-- Git related stuffs -->

=> Some basic requirements(Mandatory):
1- You have to work in daily branches manner, so you have to create
new branch everyday . So you have make branch using your student_code
followed the day in which you working. below is the eg for my branches.

               - branch-naming style: fw21_XXXX_day-x

            -for day-2 branch name should be: fw21_0929_day-2
            -for day-3 branch name should be: fw21_0929_day-3
            -for day-4 branch name should be: fw21_0929_day-4
            -for day-5 branch name should be: fw21_0929_day-5

        2- How to create branches:
            - $git branch <branch-name> (without angle brackets)

        3- How to switch branches:
            -$git switch <branch-name>  (without angle brackets)

        4- How to pull:
            -$git pull origin <branch-name>    (without angle brackets)

=> Some helpful Tools during development :<br /> 
- Chakra-UI - https://chakra-ui.com/<br /> 
- Chakra-Templets - https://chakra-templates.dev/#<br /> 
- Code SandBox - <br/> 
- Chat-gpt - https://chat.openai.com/chat<br />

**\*\*\*\***\*\***\*\*\*\***\***\*\*\*\***\*\***\*\*\*\*** All the best guys ****\*\*****\*\*****\*\*****\*\*\*\*****\*\*****\*\*****\*\*****

# Work Flow Chart

\*Note:- Bhavnesh will do all the backend and admin panel so you will get apis and endpoint on day-2 morning.

# Base_url

`Your backend base url`

# Endpoints

`/users`
`/products`

`User Schema`

```
{
   "id":0,
  "name": "",
  "email": "",
  "password": "",
  "account": {
    "cart": [
      {"id":0,
        "images": ["", ""],
        "name": "",
        "short_desc": "",
        "long_desc": "",
        "price": 0,
        "category":"",
        "strike_price": 0,
        "ratings": 0,
        "color":"",
        "delivery_time": 0,
        "size":"",
        "quantity":0
      }]
  }
}
```

- Whole `db.json` Database look

```

 {
  "users": [
    {
     "id":0,
    "name": "user-1",
    "email": "",
    "password": "",
    "account": {
      "cart": [
        {"id":0,
          "images": ["", ""],
          "name": "",
          "short_desc": "",
          "long_desc": "",
          "price": 0,
          "category":"",
          "strike_price": 0,
          "ratings": 0,
          "color":"",
          "delivery_time": 0,
          "size":"",
          "quantity":0
        }]
    }
  },{
    "id":1,
    "name": "user-2",
    "email": "",
    "password": "",
    "account": {
      "cart": [
        {"id":0,
          "images": ["", ""],
          "name": "",
          "short_desc": "",
          "long_desc": "",
          "price": 0,
          "category":"",
          "strike_price": 0,
          "ratings": 0,
          "color":"",
          "delivery_time": 0,
          "size":"",
          "quantity":0
        }]
    }
  }

  ],


  "products": [

    {
      "id": "category-name-1",
      "items": [
        {
          "id": 0,
          "images": ["", ""],
          "name": "",
          "short_desc": "",
          "long_desc": "",
          "price": 0,
          "category":"",
          "strike_price": 0,
          "ratings": 0,
          "color": "",
          "delivery_time": 0,
          "size": ""
        }
      ]
    }
        ]
      }

  ]


}

```

# Pages

These are the pages we need in this project.

- `HomePage`--------------------> (Day1-Day2)

- `AccountPage`-------------------------> (Day1-Day2)

- `SignupPage`-------------------------> (Day1-Day2)

- `LoginPage`---------------------------> (Day2)

- `SearchPage`------------------------>(Day3)

- `ProductPage`------------------------> (Day3-Day4)

- `ViewProductPage`------------------->(Day3-Day4)

- `CartPage`----------------------------> Saurabh (Day3-Day4)

# Components

     These are the components we need in this project.

//HomePage

- `Navbar`----------(Day-1)
- `Footer`----------(Day-1)
- `carousel` ------------(Day-1)
- `Category-circular-Card`------(Day-1)
- `Category-rectangular-Card`-------(Day-1)
- `brands-Card`----------- (Day-1)
- `banner-Card`-------(Day-1)
- `Trending-Card`---------(Day-1)

//ProdcutPage

- `Filter-box`------(Day-2)
- `Product-Card`---------(Day-2)
- `Sort-Box`---------(Day-2)

//SearchBar

- `Search bar`--------> Comes with Navbar (Day-1)
