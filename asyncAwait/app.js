const posts = [
  { title: "post one", body: "This is post one body" },
  { title: "post two", body: "This is post two body" },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error ...");
      }
    }, 2000);
  });
}

async function getPost() {

try{
   let newPost = await createPost({ 
    title: "Post Three", 
    body: "This is post three body" 
    });
  let output = "";
  posts.forEach((post) => {
    output += `<li>${post.title}</li>`;
  });
  document.body.innerHTML = output;  
}catch(err){
    console.log(err);
}
 
}

