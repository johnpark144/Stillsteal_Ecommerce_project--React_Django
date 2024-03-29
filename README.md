---------- <a href="README_KOR.md">한글로 보기(KOR)</a> ----------

# Stillsteal_Ecommerce_project--React_Django

- Website Link : https://stillsteal.netlify.app
- Backend(API) : https://vyckd353.pythonanywhere.com/api/

- Creater : Yeonghwan Park (John Park)
- Main Tools : React(frontend), Django(backend, restframework)
- CSS : Tailwind Css(for practice), Css Modules
- Sub Tools : Html, ContextApi, MySql, PhotoShop
- Idea or Not : Idea 75%, Clone 25% (refer to how other ecommerce sites look like, and what function exist)
- Bundler : Webpack
- Explantion : This is Ecommerce site that I create for practice,
  It's not technically clone, but I refer to some ecommerce sites
  only to think which function would be nice to implement.

- Hard Part and Solution :

1. While implementing Cart function, I realized "Local storage" is needed, It was first time using that so I had a hard time with that at that time,
   especially Whenever I refresh the page, the storage was gone, It was because of typos on "[]", but now thankfuly I got used to it pretty much.
2. Whenever more and too much codes are required for subtle function than for core function of the website, I was debating if I have to implement or not many time..
   but after all I did those such as "moving into Detail page and back to Category page but showing the anchored spot remembering all the state on 'Sort By','Number of posts to display per page','pagination', etc"
   so because of these to be honest, my code would be so complicated and messy.. but by this I wanted to make "better quality-web site" unlike just common "To-do-list website"

- Things To Fix or Improve : need to get this clean code, better English-comment's grammer, real-payment-function with card for ecommerce shopping, JWT-token (I need to study about more JWT-token.)
- Login Must ? : Not necessarily (but There is function of sign-up and log-in)
- Name why : the reason why I named this site "Stillsteal" is because when we see some nice product for the price, we say "that's steal!",
  so in order to stress those are cheap always which means "still", I named it "stillsteal"

- Comment language : English
- Date of creation : Nov 4th ~ Nov 15th 2022
- Date of debugging : Nov 16th ~ Nov 18th 2022 (clean code, fix error, custom hook, comment)
- Date of 1st upload : Nov 18th 2022
- Date of 1st deployment : Nov 22th 2022
- Deployment Tool : Netlify(Front), Pythonanywhere(Back)

# Functions

- Responsive Website
- Login, Logout, Signup (you can also use without login)
- TokenRefresh with JWT
- Navigation bar and Navigation side bar
- Add to cart, subtract from cart (Login -> Backend Server / Non-login -> Local Storage)
- Search
- Past-searchlist(Local Storage) and delete
- See cart in Product detail, Checkout, Cart in deferent form
- Pagination
- Number of posts to display per page
- Possible with Sort by 1, 2, 3 beleow together
- 1 Sort by category
- 2 Sort by Price(lowest), Price(highest), Name(ASC), Name(DESC), Rate
- 3 Sort only less than certain price
- Product detail
- Checkout(no payment yet)
- Image Animation and design (Home-product, AboutUs, sidebar)
- Image sprite(AboutUs)
- Spinner Loading until Data is found (despite no any data)

# Sample pictures

- Products
  ![products](https://user-images.githubusercontent.com/106279616/202816996-f3fbcef0-a825-4caf-9ed4-2f23246af5af.jpg)

- Products Detail
  ![productsDetail](https://user-images.githubusercontent.com/106279616/202817066-06a0eb33-4c0f-48b6-8a51-4785cfc3276b.jpg)

- Cart
  ![Cart](https://user-images.githubusercontent.com/106279616/202817073-01c09c47-7e73-436d-a6e2-cefcea5af410.jpg)

- Backend Django admin, API, MYSQL

![장고 어드민](https://user-images.githubusercontent.com/106279616/202817473-196059a0-9989-4470-89cc-8b7e1db7c439.jpg)

![장고어드민, restframework, mysql](https://user-images.githubusercontent.com/106279616/202817483-ed6cde7d-e580-4e51-bceb-3360eb941d9c.jpg)

# Sample videos

All pages look like bad quality in the videos but real look is like the picture above,
and also Don't mind buffering and glitching for it happen only whenever the video recoder turn on,
So please pay attention only to the functions.

<h3> 1.Sort by category, Pagination: </h3>
<video src="https://user-images.githubusercontent.com/106279616/203090869-de93ff39-b4e7-4a51-a479-5baded54638d.mp4"></video>

<h3> 2. Sort by price, name, rate, lessthanprice: </h3>
<video src="https://user-images.githubusercontent.com/106279616/203091737-eb973947-a08d-481b-b28a-c23f714a63c5.mp4"></video>

<h3> 3. Search, Past-searchlist:  </h3>
<video src="https://user-images.githubusercontent.com/106279616/203092189-8ffa67d9-c679-4923-b394-2ebfee7545b5.mp4"></video>

<h3> 4. Cart with Login, Re-login regain list: </h3>
<video src="https://user-images.githubusercontent.com/106279616/203092673-ad37e5ef-29c1-4e80-b6de-21fbb021b325.mp4"></video>

<h3> 5. Cart without login, Checkout: </h3>
<video src="https://user-images.githubusercontent.com/106279616/203092735-60519df0-070f-44be-960a-fb977508b317.mp4"></video>

<h3> 6. Responsive site: </h3>
<video src="https://user-images.githubusercontent.com/106279616/203093064-d76e9253-0e54-4650-b1d6-9c87c563aa78.mp4"></video>
