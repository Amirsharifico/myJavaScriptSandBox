document.getElementById("get-post").addEventListener("click", getPost);
document.getElementById("get-posts").addEventListener("click", getPosts);

function getPost() {
  fetch("post.json")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw Error(res.status);
      }
    })
    .then((post) => {
      let outout = `
        <ul>
            <li>ID: ${post.id}</li>
            <li>Title: ${post.title}</li>
            <li>Body : ${post.body}</li>
        </ul>
        `;
      document.getElementById("output").innerHTML = outout;
    })
    .catch((err) => console.log(err));
}

//-------------------
function getPosts() {
  fetch("posts.json")
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
