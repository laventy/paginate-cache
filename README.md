# How to Run
  1. npm install
  2. npm start

# Time Used
  2 days + 12 hours

# Caching and Fetching Algorithm

## Overview
Cache pages in advance when almost coming to the end of the cache, with the performance consideration when the user may navigate too quickly.

## Key Points
  1. Cache **4** pages forward at the beganning (i.e. cache pages of 2 - 5).
  2. Always keep **4** cached pages forward and backward based on the current       page index at any given time.

     For example, if the current page index is 20, then pages of 16-19 and 21 - 24 should be cached.
  3. if the user clicks the Next or Back button too quickly, the **Debounce** function comes to reduce the unnecessary fetching.

     For example, if the user navigate from page 1 to page 20 too quickly, then only pages of 16 - 19 and 21 - 24 should be cached. 
     
     Any unnecessary fetching between page 6 (already cache to page 5 at the beganning) and page 15 will be ignored.

## Algorithm
  1. Fetch page 1 and also cache pages of 2 - 5 at the beganning.
  2. when click Next or Back button, check if more pages should be fetched and cached:
      ```
        if (currentPageIndex + 2) not in cache

            more pages should be cached
      ```

      ```
        if (currentPageIndex - 2) not in cache

            more pages should be cached
      ```

      ```
        if (currentPageIndex + 1) not in cache

            more pages should be cached
      ```
      ```
        if (currentPageIndex - 1) not in cache

            more pages should be cached
      ```
      ```
        otherwise
            no pages should be cached
      ```

        
  


