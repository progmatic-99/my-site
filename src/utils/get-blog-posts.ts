export const getBlogPosts = async () => {
  const url = "https://api.hashnode.com"
  const query = `
  {
      user(username: "progmatic99") {
        publication {
          posts {
            title
            slug
            totalReactions
            brief
            dateAdded
          }
        }
      }
    }
  `

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}