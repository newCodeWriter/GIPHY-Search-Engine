# Project_2 - Marshay Brown

Overview/Description

The site is a Giphy search engine that allows the user to enter a keyword and search gifs based on that keyword.

Functionality

The user clicks on 'Search' in the navigation menu at the top to open the search box. Once the search box is open, the user can enter a keyword (or keywords) into the search box and click the search button next to the search box to search and retrieve gifs based on that keyword.
When the user searches a word, the keyword and the number of gifs yielded from the search will appear as (disabled) buttons above the gifs yielded from the search. 
The user is able to click on a gif and be directed to the source of the gif in a new page tab. If the gif has no source, the href attribute is removed and the image cannot be clicked.
In mobile view, the user can toggle the visibility of the menu items.
When the user clicks the search button with an empty search box, the search box will focus with no changes to the page. This ensures that the user knows that they have to enter something in order to search.  

Technologies Used

.html,.js/.jQuery, .scss/.css

User Stories

As a user, I want to be able to click on an image so that I can go to the source of that image.
As a user, I want to be able to search a word or a combination of words so that I can view images related to and based on my search. 
As a user, I want to be able to change the number of results so that I have the option to control how many gifs are returned.

Ideas for improvement

-The same search gives a random selection of images each time it is searched. For instance, if I search the word "yellow" three times, I expect the search to yield a different set of images each time the word is searched. 
-Being able to search the GIPHY API for all gifs and being able to display a certain amount of images per page.
-Allowing the user to select how many images are displayed per page.
