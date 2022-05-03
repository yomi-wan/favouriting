# favouriting

This code allows for favouriting Webflow collection items, storing the data in LocalStorage. 

## For Setup
Will need the following set up for favouriting to work. 

1. Add cdn script to page. 
```
<script src="https://cdn.jsdelivr.net/gh/yomi-wan/favouriting@version/favourites.js"></script>
change 'version' to the latest commit. 
```

2. To your Collection List Wrapper give and ID called 'favList'
3. Directly inside the Collection Item add an embed, use the drop down to grab the slug. Give the embed a class of 'idtext'. This will make sure that id has no spaces and, is unique to the item.
4. Create interaction link, for the favouriting and unfavouriting. Give it the class of 'fav-btn' style the default state. eg. empty heart icon
5. Next add a combo class of 'fav' for the favourite state & style eg. filled in heart icon 
6. remove combo class and publish.