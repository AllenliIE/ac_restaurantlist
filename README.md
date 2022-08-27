# RestaurantList Search List
使用Node.js+Express建構餐廳搜尋清單，並運用handlebars樣版引擎來帶出餐廳內容與搜尋頁面，並可依據喜好新增餐廳。

**功能介紹**
1. 使用者可以搜尋餐廳與餐廳分類，並優化搜尋列(整合文字大小寫)。
2. 使用者可以新增一家餐廳。
3. 使用者可以瀏覽一家餐廳的詳細資訊(餐廳名稱、餐廳圖片、餐廳地址、餐廳電話、餐廳分類、餐廳簡述)。
4. 使用者可以瀏覽全部所有餐廳。
5. 使用者可以修改一家餐廳的資訊。
6. 使用者可以刪除一家餐廳。
7. 使用者可以選擇餐廳的排序。
8. 使用者可以註冊帳號，註冊的資料包括：名字、email、密碼、確認密碼。
9. 使用者也可以透過 Facebook Login 直接登入。
10. 使用者的密碼要使用 bcrypt 來處理。
11. 使用者必須登入才能使用餐廳清單(預設 user1, user2 使用者)。

## Getting Start

1.  Clone the project

```
git clone https://github.com/flowerhahaha/restaurant-collection.git
```

2.  Install the required dependencies

```
npm install
```

3.  Install nodemon

```
npm i nodemon
```

4.  Set MONGODB_URI

```
export MONGODB_URI="mongoose.connection"
```

5.  Start the server

```
npm run dev
```

6.  Execute successfully if seeing following message

```
App is running on http://localhost:3000
```

## Built With

-   node.js @14.16.0
-   express @4.16.4
-   express-handlebars @6.0.6
-   bootstrap @5.0
-   font-awesome @5.8.1
-   mongoosedb @5.9.7
-   method-override @3.0.0
-   body-parser @1.20.0
-   express-session @1.17.1
-   passport @0.4.1
-   passport-facebook @3.0.0
-   passport-local @1.0.0
-   bcryptjs @2.4.3
-   connect-flash @0.1.1
-   dotenv @8.2.0