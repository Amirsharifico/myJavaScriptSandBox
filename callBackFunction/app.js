const posts =[
    {title: 'post one', body:'This is post one body'},
    {title: 'post two', body:'This is post two body'}
]

function createPost(post, getPost){
    setTimeout(()=>{
        posts.push(post);
        getPost();
    },2000); 

}

function getPost(){
    setTimeout(()=>{
        let output ='';
        posts.forEach((post)=>{
            output +=`<li>${post.title}</li>`
        });
        document.body.innerHTML=output;

    },1000);
}

createPost({title: 'post three', body:'This is post three body'}, getPost);
