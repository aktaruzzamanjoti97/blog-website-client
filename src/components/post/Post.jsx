import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.ibb.co/bP8SRC1/146669418-1804140843088856-5317163125282671699-o.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor</span>
        <hr />
        <span className="postDate">1 hr ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur non
        nobis provident fugit rem eius adipisci sit numquam, molestiae quasi,
        explicabo ad consectetur sed iure molestias cum! Non, in vero.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur non
        nobis provident fugit rem eius adipisci sit numquam, molestiae quasi,
        explicabo ad consectetur sed iure molestias cum! Non, in vero.
        
      </p>
    </div>
  );
}
