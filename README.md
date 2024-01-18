# tabeanixdorff

## To whomever it may concern.
Currently it is April 2022.
This project was designed by Tabea Nixdorff.
The developer is Magalie Chetrit.
The project is built with WordPress and has it's own custom theme.

### ACF BLOCKS - How it works
Posts are used for the projects. So if T wants to upload a project she needs to add a new post. These are then sent to index.php

## Project Specifics.
- Filters and Sorting
- ACF
- Search
- Flickity

## Use short code blocks
```[snippet full-image="#.png" snippet-image="#.png"]test word[/snippet]```

## Search
First we want specific posts at the top of the post list. There are several ways to do this. I decided to use categories. There's a category called "top-post". All posts with the category top-posts will be shown first with a `get_posts` function call.

Then we get the posts with a `pre_get_posts` hook in the `functions.php`. We filter out everything that has the hidden category. We also filter out everything that is not a post. This is because we don't want pages to show up in the search results.

When the user types a search keyword the keyword is picked up with JavaScript. The keyword is used to filter out the posts that don't match the keyword. The posts that match the keyword are then shown.