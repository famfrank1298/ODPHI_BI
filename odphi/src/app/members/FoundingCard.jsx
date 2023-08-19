import "./foundingCard.css";

const FoundingCard = (props) => {

    // console.log(props);
    // "name": "Raul Vargas",
    //     "line-name": "I.N.F.A.M.O.U.S Line",
    //     "number": 5,
    //     "greek-line": "Founding Brothers",
    //     "sir-name": "Sir Kanis",
    //     "pic-link": "/members/infamous.webp",
    //     "cross-date": "April 14th, 2011"

  return (
    // <div className="card-container">
    //   <div className="card-item">
    //     <div className="card-link">
    //       <div className="card-bg"></div>
    //       <div className="card-name"> {props.info["name"]} </div>
    //       <div className="card-name"> {props.info["sir-name"]} </div>
    //     </div>
    //   </div>
    // </div>

    <div class='card'>
      <div class='info'>
        <h1 class='title'>{props.info[0]["line-name"]}</h1>
        <p class='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit.</p>
      </div>
    </div>

  );
};

export default FoundingCard;
