import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://i.ibb.co/dQKrvKJ/joti-real.jpg" alt="" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At incidunt,
          debitis ea aspernatur omnis earum nihil numquam alias dolorem rerum
          vel sunt facere placeat maxime reiciendis, accusantium sed, atque
          vero?
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i class="sidebarIcon fab fa-facebook-square"></i>
          <i class="sidebarIcon fab fa-twitter-square"></i>
          <i class="sidebarIcon fab fa-pinterest-square"></i>
          <i class="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}
