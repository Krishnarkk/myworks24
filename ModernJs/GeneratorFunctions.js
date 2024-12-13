// regenerating functions , similar to LazyLoading  ,   call as Lazy evaluation , calculation done until next calculation
function* InfiniteSequence(start = 1) {
  let num = start;
  while (true) {
    // yield keyword pauses the function and returns the specified value
    yield num;
    num++;
  }
}

const generator = InfiniteSequence();
//each time .next() is called on generator will resumes the execution until next yield
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//usage -> Used for lazy evaluation instead of generating all values at once
//the geneator produces values only when requested

//.next()
// returns object with yielded value and puts a statement as true

// 1. Lazy Loading Data from an API
// Imagine you're working with an API that returns large datasets, but you only need small chunks at a time. Using lazy evaluation, you can load data on-demand as the user scrolls or navigates.

// Scenario: Fetching records from an API in small chunks for infinite scrolling (e.g., on a social media feed or a product catalog).

// javascript
// Copy code
async function* fetchRecords(url) {
  let page = 1;
  let moreRecords = true;
  while (moreRecords) {
    const response = await fetch(`${url}?page=${page}`);
    const data = await response.json();
    moreRecords = data.length > 0;
    yield data;
    page++;
  }
}

const recordsGenerator = fetchRecords("https://api.example.com/posts");

// Simulating user scroll, which triggers loading more data
async function loadMorePosts() {
  const { value, done } = await recordsGenerator.next();
  if (!done) {
    console.log(value); // Logs the data chunk (new records)
  }
}

loadMorePosts(); // First page of posts
loadMorePosts(); // Next page of posts

//Explanation: In this example, fetchRecords is a generator function that fetches a new page of records each time .next() is called. This ensures you're only loading more data when the user scrolls (or triggers the loading mechanism), which prevents excessive memory consumption.

//lazy evaluation  in Pagination
async function* paginate(url) {
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const response = await fetch(`${url}?page=${page}`);
    const data = await response.json();
    hasMore = data.length > 0; // Assume the API sends an empty array when no more data is available
    yield data; // Yield each page of data
    page++;
  }
}

const paginatedData = paginate("https://api.example.com/items");

async function loadAllData() {
  for await (const page of paginatedData) {
    console.log(page); // Process the data (e.g., render on screen)
  }
}

loadAllData(); // Fetch data lazily, one page at a time
