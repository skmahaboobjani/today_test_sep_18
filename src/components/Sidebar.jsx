const Sidebar = () => {
  return (
    <>
      <div className="side-nav">
        {/* <p> Sidebar </p> */}
        <div className="profile-container">
            <img src="https://www.filmibeat.com/ph-big/2019/02/mahesh-babu_155056989980.jpg" alt="profile-avatar"/>
            <p>My Name</p>
        </div>
        <div className="tab-container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Deposite</a></li>
                    <li><a href="#">Payment</a></li>
                    <li><a href="#">Offer</a></li>
                    <li><a href="#">Setting</a></li>
                </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
