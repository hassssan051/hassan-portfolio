// Define an interface for the feed item
interface FeedItem {
  title: string;
  link: string;
  author: string;
  pubDate: string;
  content: string;
}

// Define a function that parses the XML response to an array of FeedItem objects
function parseFeed(xml: string): FeedItem[] {
  // Create a DOM parser
  const parser = new DOMParser();
  // Parse the XML string to a document
  const doc = parser.parseFromString(xml, "application/xml");

  console.log(doc);

  return [];
  // // Get all the item elements
  // const items = doc.getElementsByTagName("item");
  // // Initialize an empty array for the feed items
  // const feed: FeedItem[] = [];
  // // Loop through the item elements
  // for (let i = 0; i < items.length; i++) {
  //   // Get the current item element
  //   const item = items[i];
  //   // Get the title, link, author, pubDate and content elements
  //   const title = item.getElementsByTagName("title")[0];
  //   const link = item.getElementsByTagName("link")[0];
  //   const author = item.getElementsByTagName("dc:creator")[0];
  //   const pubDate = item.getElementsByTagName("pubDate")[0];
  //   const content = item.getElementsByTagName("content:encoded")[0];
  //   // Create a feed item object with the text content of the elements
  //   const feedItem: FeedItem = {
  //     title: title.textContent || "",
  //     link: link.textContent || "",
  //     author: author.textContent || "",
  //     pubDate: pubDate.textContent || "",
  //     content: content.textContent || "",
  //   };
  //   // Push the feed item object to the feed array
  //   feed.push(feedItem);
  // }
  // // Return the feed array
  // return feed;
}

// Define a function that fetches the feed from a given URL and logs the result
export async function fetchFeed(url: string): Promise<any> {
  try {
    // Fetch the response from the URL
    const response = await fetch(url);
    // Check if the response is OK
    if (response.ok) {
      // Get the response text
      const text = await response.text();
      // Parse the text to a feed array
      const feed = parseFeed(text);
      // Log the feed array
      console.log(feed);
      return feed;
    } else {
      // Throw an error with the status text
      throw new Error(response.statusText);
    }
  } catch (error) {
    // Log the error
    console.error(error);
  }
}
