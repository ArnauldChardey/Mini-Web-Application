# Mini-Web-Application
in this project I used html ,css, jquery und javascript .

my idea was to create a form where the user can enter the data of an animal (Useranimal has the following data: firstname,  lastname,LAST medical check and age) ex : Stephan ,the lion 3.02.2019 8 
{
"firstname":"stephan",
"lastname":"the lion",
"date_ofmedicalcheck":"2.10-2019",
"age":"6"
},
when the user fills the form, he clicks on send button and the data shal be display in a table:
in the table create delete and edit buttons:
-when the user clicks on delete button, the useranimal is deleted in the table 
-when he clicks on edit button  he can update the Useranimal's data
 -the data had to be stored in a json file using javascript.
 
during the realization of the project I encountered some problems:
1)first when I used php and javascript to have the form sent by url and stocket in json file, I received a google chrome message that the data transfer was blocked: cross origin...

2)secondly I used jquery and localstorage (store the data directly on the browser) but when I click on the send button ;
in my table  it shows undefine as a value rather than display the values passed in the form. 
