# Favouriting

This code allows for favouriting Webflow collection items, storing the data in LocalStorage. 

## For Setup
Will need the following set up for favouriting to work. 

1. Add cdn script to page. 
```
<script src="https://cdn.jsdelivr.net/gh/yomi-wan/favouriting@version/favourites.js"></script>
change 'version' to the latest commit. 
```

2. To your Collection List Wrapper give an ID called 'favList'
3. Give the embed a class of 'idtext'. This will make sure that id has no spaces and, is unique to the item.
4. Create interaction link, for the favouriting and unfavouriting. Give it the class of 'fav-btn' style the default state. eg. empty heart icon
5. Directly after 'fav-btn' add an embed block, give emded class 'idtext', use the drop down to grab the slug
6. Next add a combo class of 'fav' for the favourite state & style eg. filled in heart icon 
7. Remove 'fav' class and publish. 

>We do this so the default state is not showing that its favourited

### If would want a favourites only listing

You will need these two extra steps. 

1. Add class 'only-fav' to the Collection Item
2. style with Display None.

>We do this so the default state is not showing all.