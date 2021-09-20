import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://i.ibb.co/bP8SRC1/146669418-1804140843088856-5317163125282671699-o.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ispum dolor sit ameet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Aktaruzzaman Joti</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere
          vero, tempora totam optio accusamus eius architecto assumenda eos
          iusto alias tenetur vel consequatur, nemo enim quo exercitationem amet
          dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          facere vero, tempora totam optio accusamus eius architecto assumenda
          eos iusto alias tenetur vel consequatur, nemo enim quo exercitationem
          amet dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nisi facere vero, tempora totam optio accusamus eius architecto
          assumenda eos iusto alias tenetur vel consequatur, nemo enim quo
          exercitationem amet dolorem! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nisi facere vero, tempora totam optio accusamus eius
          architecto assumenda eos iusto alias tenetur vel consequatur, nemo
          enim quo exercitationem amet dolorem! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nisi facere vero, tempora totam optio
          accusamus eius architecto assumenda eos iusto alias tenetur vel
          consequatur, nemo enim quo exercitationem amet dolorem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere
          vero, tempora totam optio accusamus eius architecto assumenda eos
          iusto alias tenetur vel consequatur, nemo enim quo exercitationem amet
          dolorem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facere
          vero, tempora totam optio accusamus eius architecto assumenda eos
          iusto alias tenetur vel consequatur, nemo enim quo exercitationem amet
          dolorem!
        </p>
      </div>
    </div>
  );
}
