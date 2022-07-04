# RestaurantList Search List
使用Node.js+Express建構餐廳搜尋清單，並運用handlebars樣版引擎來帶出餐廳內容與搜尋頁面，同時優化搜尋方式解決大小寫與保留輸入內容，提高操作流暢性。

**功能介紹**
1. 使用者可以操作滑鼠滾輪，在網站首頁瀏覽8家餐廳清單。
2. 使用者可以點擊餐廳卡片，在網站顯示餐廳內容(餐廳名稱、餐廳圖片、餐廳地址、餐廳電話、餐廳分類、餐廳簡述)
3. 使用者可以Search bar中輸入餐廳名稱，也可搜尋餐廳分類，並點擊Search button顯示對應查詢結果。
4. 使用者可以「不受」輸入文字的大小寫影響到搜尋結果。
5. 使用者可以自由調整搜尋內容，且保留搜尋的文字在Search bar。
6. 使用者可以新增一家餐廳
7. 使用者可以瀏覽一家餐廳的詳細資訊
8. 使用者可以瀏覽全部所有餐廳
9. 使用者可以修改一家餐廳的資訊
10. 使用者可以刪除一家餐廳
11. 使用者可以選擇餐廳的排序


**下一階段預計更新**
1. 新增卡片與清單顯示模式的切換功能。
2. 新增登入與註冊介面與功能。

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

4.  Start the server

```
npm run dev
```

5.  Execute successfully if seeing following message

```
App is running on http://localhost:3000
```

## Built With

-   node.js @ 14.16.0
-   express @ 4.16.4
-   express-handlebars @ 3.0.0
-   bootstrap @ 5.0
-   font-awesome @ 5.8.1


