document.getElementById("send-post").addEventListener("click", sendPost);

async function sendPost() {
  const postTitle = document.getElementById('post-title').value;
  const postBody = document.getElementById('post-body').value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method : 'POST',
    body: JSON.stringify({
      userId:2,
      title:postTitle,
      body: postBody
    }),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(post => {
    let outout = `
            <ul>
                <li>ID: ${post.id}</li>
                <li>Title: ${post.title}</li>
                <li>Body : ${post.body}</li>
            </ul>
            `;
    document.getElementById("output").innerHTML = outout;
    
  })
}



























  //***************************** 
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
//     if (res.ok) {
//       let post = await res.json();
//       let outout = `
//         <ul>
//             <li>ID: ${post.id}</li>
//             <li>Title: ${post.title}</li>
//             <li>Body : ${post.body}</li>
//         </ul>
//         `;
//       document.getElementById("output").innerHTML = outout;
//     } else {
//       throw Error(res.status);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

//-------------------
// function getPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       if (res.ok) {
//         return res.json();
//       } else {
//         throw Error(res.status);
//       }
//     })
//     .then((posts) => {
//       let outout = "";
//       posts.forEach((post) => {
//         outout += `

//             <ul>
//             <li>ID: ${post.id}</li>
//             <li>Title: ${post.title}</li>
//             <li>Body : ${post.body}</li>
//             </ul>
            
//             `;
//       });

//       document.getElementById("output").innerHTML = outout;
//     })
//     .catch((err) => console.log(err));
// }
