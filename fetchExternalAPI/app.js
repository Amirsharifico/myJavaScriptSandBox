document.getElementById("get-post").addEventListener("click", getPost);
document.getElementById("get-posts").addEventListener("click", getPosts);

async function getPost() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
    if (res.ok) {
      let post = await res.json();
      let outout = `
        <ul>
            <li>ID: ${post.id}</li>
            <li>Title: ${post.title}</li>
            <li>Body : ${post.body}</li>
        </ul>
        `;
      document.getElementById("output").innerHTML = outout;
    } else {
      throw Error(res.status);
    }
  } catch (err) {
    console.log(err);
  }
}

//-------------------
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(res.status);
      }
    })
    .then((posts) => {
      let outout = "";
      posts.forEach((post) => {
        outout += `

            <ul>
            <li>ID: ${post.id}</li>
            <li>Title: ${post.title}</li>
            <li>Body : ${post.body}</li>
            </ul>
            
            `;
      });

      document.getElementById("output").innerHTML = outout;
    })
    .catch((err) => console.log(err));
}
