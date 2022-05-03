# favouriting

This code allows for favouriting Webflow collection items, storing the data in LocalStorage. 

# For Setup
Will need the following set up for favouriting to work. 

> add cdn script to page. 

>Firstly add this ID to the 'favList' to the Collection List Wrapper
>Directly inside the collection item add an embed, use the drop down to grab the slug. Give the embed a class of idtext. This will make sure the id has no spaces and, is unique to the item.
>next add a link that will be used for the interaction. give it the class of 'fav-btn'
>style the default state. eg. empty heart
>add a combo class of 'fav' for the favourite state & style eg. filled in heart. 
>remove combo class and publish.